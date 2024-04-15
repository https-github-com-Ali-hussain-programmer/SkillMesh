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
export const Logout = async () => {
  const response = await fetch(baseUrl + "/Logout", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error("Logout failed");
    return null;
  }
};
export const fetchProfileData = async (id, signal) => {
  const response = await fetch(baseUrl + `/profile`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    signal: signal,
    body: JSON.stringify({ id }),
  });
  const data = response.json();
  return data;
};

export const updateProfileData = async (id, item, signal) => {
  const response = await fetch(baseUrl + `/update/profile`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    signal: signal,
    body: JSON.stringify({ id, item }),
  });
  const data = response.json();
  return data;
};
export const updatePics = async (item, signal) => {
  const response = await fetch(baseUrl + `/update/profile/pic`, {
    method: "PATCH",
    credentials: "include",
    signal: signal,
    body: item,
  });
  const data = response.json();
  return data;
};

export const handleCertificationUpdate = async (item) => {
  const response = await fetch(baseUrl + `/update/profile/certificate`, {
    method: "PATCH",
    credentials: "include",
    body: item,
  });
  const data = response.json();
  return data;
};
export const deleteCertification = async (id, index) => {
  const data={id,index}
  const response = await fetch(baseUrl + `/update/profile/deleteCertificate`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const d = response.json();
  return d;
};
