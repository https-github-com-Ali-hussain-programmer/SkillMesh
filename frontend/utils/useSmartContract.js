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
        currentUser.address !== "0xfFd595a5Ee59102288D5Ee8175345f7d05c31cAb"
      ) {
        console.error("Only the owner can set the SkillMesh address");
        return;
      }
      await contractInstance.methods
        .setSkillMeshAddress("0x55811290C262926B32B5A1172612F44C55f90f13")
        .send({
          from: currentUser.address,
        });
    } catch (error) {
      console.error("Error setting SkillMesh address:", error);
    }
  };

  const orderPlaced = async (seller, price, gigId) => {
    if (!contract) {
      console.error("Smart contract not initialized");
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);
      const priceInWei = web3.utils.toWei(price.toString(), "ether");
      console.log(priceInWei, gigId, seller);
      await contract.methods.placeOrder(seller, gigId, priceInWei).send({
        from: currentUser.address,
        value: priceInWei,
      });
      const result = await contractInstance.methods
      .getOrderDetails(1)
      .call({
        from: currentUser.address,
      });
      console.log(result)
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

  return { orderPlaced, orderDetails };
};

export default useSmartContract;
