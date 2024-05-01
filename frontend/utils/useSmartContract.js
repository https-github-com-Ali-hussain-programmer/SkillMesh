import Web3 from "web3";
import configuration from "../../smartContract/build/contracts/DecentralizedPlatform.json";

const useSmartContract = () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  const contract = new web3.eth.Contract(
    configuration.abi,
    configuration.networks["5777"].address
  );

  const setSkillMeshAddress = async (newAddress) => {
    const accounts = await web3.eth.getAccounts();

    const owner = accounts[0]; // Assuming the first account is the owner
    console.log(owner, contract, web3);
    await contract.methods.setSkillMeshAddress(newAddress).send({
      from: owner,
    });
  };

  return { contract, setSkillMeshAddress };
};

export default useSmartContract;
// const contract = new web3.eth.Contract(
//   configuration.abi,
//   configuration.networks["5777"].address
// );
