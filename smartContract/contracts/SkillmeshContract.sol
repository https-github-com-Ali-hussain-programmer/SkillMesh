// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedPlatform {
    address public owner;
    address public skillmeshTeam;
    uint public orderCount;
    uint public constant RELEASE_DELAY = 2;
    uint public constant SKILLMESH_FEE_PERCENT = 5;

    enum OrderStatus { Created, AmountPending, Completed, Disputed, FundsReleased }

    struct Order {
        uint id;
        address payable buyer;
        address payable seller;
        string documentHash;
        string completedFilesHash;
        uint price;
        uint createdAt;
        uint completedAt;
        OrderStatus status;
    }

    mapping(uint => Order) public orders;
    mapping(address => uint[]) public userOrders;

    event OrderPlaced(uint orderId, address buyer, address seller, uint price);
    event OrderCompleted(uint orderId, address buyer, address seller, uint price);
    event AmountPending(uint orderId, address buyer, address seller, uint price);
    event OrderDisputed(uint orderId, address buyer, address seller);
    event OrderCanceled(uint orderId, address buyer, address seller);
    event FundsReleased(uint orderId, address recipient, uint amount);

    constructor() {
        owner = msg.sender;
        orderCount = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

function setSkillMeshAddress(address skillmesh) external onlyOwner {
  skillmeshTeam = skillmesh;
}

    function placeOrder(address payable _seller, string memory _documentHash, uint _price) external payable {
        require(msg.sender != _seller, "Buyer cannot be the same as seller");
        require(msg.value >= _price, "Insufficient payment amount");

        orderCount++;
        uint orderId = orderCount;
        uint currentTime = block.timestamp;

        orders[orderId] = Order(orderId, payable(msg.sender), _seller, _documentHash, "", _price, currentTime, 0, OrderStatus.Created);
        userOrders[msg.sender].push(orderId);

        emit OrderPlaced(orderId, msg.sender, _seller, _price);
    }

    function readyFromSeller(uint _orderId) external {
        Order storage order = orders[_orderId];
        order.status = OrderStatus.AmountPending;

        emit AmountPending(_orderId, order.buyer, msg.sender, order.price);
    }

    function disputeOrder(uint _orderId) external {
        Order storage order = orders[_orderId];
        order.status = OrderStatus.Disputed;

        emit OrderDisputed(_orderId, msg.sender, order.seller);
    }

    function releaseFunds(uint _orderId) external {
        Order storage order = orders[_orderId];
        require(msg.sender != order.seller, "Only seller can complete the order");
        require(order.status == OrderStatus.AmountPending || order.status == OrderStatus.Disputed, "Order is not in a valid state for completion");

        order.status = OrderStatus.FundsReleased;
        order.completedAt = block.timestamp;

        // Calculate amount to transfer to seller after deducting Skillmesh fee
        uint amountToSeller = order.price;
        uint feeAmount = (amountToSeller * SKILLMESH_FEE_PERCENT) / 100;
        uint finalAmountToSeller = amountToSeller - feeAmount;

        // Transfer funds to seller
        payable(order.seller).transfer(finalAmountToSeller);

        // Transfer fee to Skillmesh team
        payable(skillmeshTeam).transfer(feeAmount);

        emit OrderCompleted(_orderId, order.buyer, order.seller, order.price);
    }

    function refundToBuyer(uint _orderId) external {
        Order storage order = orders[_orderId];
        require(order.status == OrderStatus.Disputed, "Order is not in a valid state for release");

        order.status = OrderStatus.FundsReleased;

        // Refund the buyer
        payable(order.buyer).transfer(order.price);

        emit OrderCompleted(_orderId, order.buyer, order.seller, order.price);
    }

    function releaseToSeller(uint _orderId) external {
        Order storage order = orders[_orderId];
        require(order.status == OrderStatus.Disputed, "Order is not in a valid state for release");

        order.status = OrderStatus.FundsReleased;

        this.releaseFunds(_orderId);
    }

    function getOrderDetails(uint _orderId) external view returns (Order memory) {
        return orders[_orderId];
    }

    function getUserOrders(address _user) external view returns (uint[] memory) {
        return userOrders[_user];
    }

    function withdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}