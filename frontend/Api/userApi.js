import { ethers } from "ethers";
const baseUrl = "http://localhost:3001/api/v1/user";

export const LoginMetamask = async (account) => {
  const nonce = await generateNonce(baseUrl + "/nonce");
  const message = `This Nonce is Signed using Metamask ${nonce}`;
  const signedmessage = await SignedMessage(message);
  const address = account;
  const dataSigned = { signedmessage, address, message };
  const response = await fetch(baseUrl + "/Login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(dataSigned),
  });
  const data = response.json();
  return data;
};

const SignedMessage = async (message) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = provider.getSigner();
  const signedmessage = (await signer).signMessage(message);
  return signedmessage;
};

const generateNonce = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) {
    console.error(`Error fetching data from ${url}`);
    return null;
  }
  const { nonce } = await response.json();
  return nonce;
};

export const verifyToken = async () => {
  const response = await fetch(baseUrl + "/secure", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = response.json();
  return data;
};
