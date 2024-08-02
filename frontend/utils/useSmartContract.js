import { useEffect, useState } from "react";
import Web3 from "web3";
import configuration from "../../smartContract/build/contracts/DecentralizedPlatform.json";
import { useSelector } from "react-redux";

const useSmartContract = () => {
  const [contract, setContract] = useState(null);
  const currentUser = useSelector((state) => state.user?.userData);
  const initContract = async () => {
    if (window.ethereum && currentUser?.address) {
      try {
        const web3 = new Web3(window.ethereum);

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = configuration.networks[networkId];

        if (deployedNetwork) {
          const contractInstance = new web3.eth.Contract(
            configuration.abi,
            deployedNetwork.address
          );
          setAddress(contractInstance);
          setContract(contractInstance);
        } else {
          console.error("Smart contract not deployed on the current network");
        }
      } catch (error) {
        console.error("Error initializing smart contract:", error);
      }
    }
  };

  useEffect(() => {
    if (currentUser.address) {
      initContract();
    }
  }, [currentUser?.address]); // Only run this effect when currentUser.address changes

  const setAddress = async (contractInstance) => {
    if (!contractInstance) {
      console.error("Smart contract not initialized");
      return;
    }

    try {
      if (
        currentUser.address !== "0x753c493641fcb604D0322E90E532dCA5657EA2A1"
      ) {
        console.error("Only the owner can set the SkillMesh address");
        return;
      }
      await contractInstance.methods
        .setSkillMeshAddress("0xeacA11D501648ECDF45D3FD78f4F0d6cd7587ac8")
        .send({
          from: currentUser.address,
        });
    } catch (error) {
      console.error("Error setting SkillMesh address:", error);
    }
  };

  const completeOrderTx = async (id) => {
    if (!contract) {
      console.error("Smart contract not initialized");
      return false;
    }

    try {
      const web3 = new Web3(window.ethereum);

      // Define the gas limit for the transaction (adjust as needed)
      const gasLimit = 3000000;

      // Send the transaction to complete the order with the specified gas limit
      await contract.methods.completeOrder(id).send({
        from: currentUser.address,
        gas: gasLimit,
      });
      return true;
    } catch (error) {
      console.error("Error completing order:", error);
      return false;
    }
  };

  const orderPlaced = async (seller, price, gigId, orderid) => {
    if (!contract) {
      console.error("Smart contract not initialized");
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);
      const priceInWei = web3.utils.toWei(price.toString(), "ether");
      await contract.methods
        .placeOrder(seller, gigId, priceInWei, orderid)
        .send({
          from: currentUser.address,
          value: priceInWei,
        });
      return true;
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  const orderDetails = async (id) => {
    if (!contract) {
      console.error("Smart contract not initialized");
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);

      // Call the getOrderDetails function (read-only)
      const result = await contract.methods.getOrderDetails(id).call({
        from: currentUser.address,
      });

      // Handle the result (you can log it or use it as needed)
      console.log("Order details:", result);
    } catch (error) {
      console.error("Error getting order details:", error);
    }
  };

  return { orderPlaced, orderDetails, completeOrderTx };
};

export default useSmartContract;
