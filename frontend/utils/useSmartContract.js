import Web3 from "web3";
import configuration from "../../smartContract/build/contracts/DecentralizedPlatform.json";

const useSmartContract = () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  if (!configuration || !configuration.abi || !configuration.networks) {
    throw new Error("Smart contract configuration not found or incomplete");
  }
  const networkId = Object.keys(configuration.networks)[0]; 
  const contractAddress = configuration.networks[networkId].address;
  const contract = new web3.eth.Contract(configuration.abi, contractAddress);
  
  const handleContractError = (error) => {
    console.error("Smart contract interaction error:", error);
  };


  const interactWithContract = async (methodName, ...args) => {
    try {
      const result = await contract.methods[methodName](...args).send({ from: web3.eth.defaultAccount });
      return result;
    } catch (error) {
      handleContractError(error);
      throw new Error("Failed to interact with smart contract");
    }
  };


  const getContractData = async (methodName, ...args) => {
    try {
 
      const result = await contract.methods[methodName](...args).call();
      return result;
    } catch (error) {
      handleContractError(error);
      throw new Error("Failed to fetch data from smart contract");
    }
  };

  return { web3, contract, interactWithContract, getContractData };
};

export default useSmartContract;
