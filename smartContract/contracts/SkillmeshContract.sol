// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedPlatform {
    address public owner;
    address public skillmeshTeam;
    uint public constant RELEASE_DELAY = 2;
    uint public constant SKILLMESH_FEE_PERCENT = 5;

    enum OrderStatus {
        Created,
        AmountPending,
        Completed,
        Disputed,
        FundsReleased
    }

    struct Order {
        uint id;
        address payable buyer;
        address payable seller;
        string gigId;
        uint price;
        uint createdAt;
        uint completedAt;
        OrderStatus status;
    }

    Order[] public orders;

    event OrderPlaced(
        uint orderId,
        address buyer,
        address seller,
        uint price,
        string _gigId
    );
    event OrderCompleted(
        uint orderId,
        address buyer,
        address seller,
        uint price
    );
    event AmountPending(
        uint orderId,
        address buyer,
        address seller,
        uint price
    );
    event OrderDisputed(uint orderId, address buyer, address seller);
    event OrderCanceled(uint orderId, address buyer, address seller);
    event FundsReleased(uint orderId, address recipient, uint amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function setSkillMeshAddress(address _skillmesh) external onlyOwner {
        skillmeshTeam = _skillmesh;
    }

    function placeOrder(
        address payable _seller,
        string memory _gigId,
        uint _price,
        uint _orderId
    ) external payable {
        require(
            msg.value == _price,
            "Payment amount must be equal to the order price"
        );
        uint currentTime = block.timestamp;

        orders.push(
            Order({
                id: _orderId,
                buyer: payable(msg.sender),
                seller: _seller,
                gigId: _gigId,
                price: _price,
                createdAt: currentTime,
                completedAt: 0,
                status: OrderStatus.Created
            })
        );

        emit OrderPlaced(
            orders.length - 1,
            msg.sender,
            _seller,
            _price,
            _gigId
        );
    }

    function readyFromSeller(uint _orderId) external {
        Order storage order = orders[_orderId];
        require(
            order.seller == msg.sender,
            "Only seller can mark the order as ready"
        );
        require(
            order.status == OrderStatus.Created,
            "Order is not in a valid state to mark as ready"
        );

        order.status = OrderStatus.AmountPending;

        emit AmountPending(_orderId, order.buyer, msg.sender, order.price);
    }

    function completeOrder(uint _orderId) external {
        Order storage order = orders[0];
        order.seller.transfer(order.price);
    }
}
