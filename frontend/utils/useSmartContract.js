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

    await contract.methods.setSkillMeshAddress(newAddress).send({
      from: owner,
    });
  };

  const orderPlaced = async (seller, price, gigid) => {
    const accounts = await web3.eth.getAccounts();
    const owner = accounts[0]; // Assuming the first account is the owner
    const priceInWei = web3.utils.toWei(price.toString(), "ether");
    alert(seller, "op");
    const gigId = 3;
    await contract.methods.placeOrder(seller, priceInWei, gigId).send({
      from: owner,
      value: priceInWei,
    });
  };
  return { contract, setSkillMeshAddress, orderPlaced };
};

export default useSmartContract;
// const contract = new web3.eth.Contract(
//   configuration.abi,
//   configuration.networks["5777"].address
// );
