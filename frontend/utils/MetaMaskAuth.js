"use client";
import { useEffect, useState } from "react";
import { ethers, getAddress } from "ethers";
import { LoginMetamask } from "../Api/userApi";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/slice/userSlice";
import Web3 from "web3";

const useMetaMask = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const dispatch = useDispatch();

  const handleMetaMaskChange = async (newAccounts) => {
    const updatedUserAddress = getAddress(newAccounts[0]);
    console.log(updatedUserAddress, "opopopopopop", newAccounts);
    const updatedUserData = await LoginMetamask(updatedUserAddress);
    dispatch(setUserData({ info: updatedUserData?.user }));
    localStorage.setItem("userData", JSON.stringify(updatedUserData?.user));
    setAccount(updatedUserAddress);
  };

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const accounts = await provider.send("eth_requestAccounts", []);
        if (accounts.length <= 0) {
          throw new Error("MetaMask account not connected");
        }

        setAccount(getAddress(accounts[0]));
        await handleMetaMaskChange(accounts);

        return {
          status: "success",
          title: "Congratulations!",
          description: "You are connected to MetaMask",
        };
      } catch (error) {
        return {
          status: "error",
          title: "MetaMask Error",
          description: error.message,
        };
      }
    }
  };

  return { connectMetaMask, account, handleMetaMaskChange };
};

export default useMetaMask;
