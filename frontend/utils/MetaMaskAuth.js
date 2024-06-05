"use client";
import { useEffect, useState } from "react";
import { ethers, getAddress } from "ethers";
import { LoginMetamask } from "../Api/userApi";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/slice/userSlice";
import Web3 from "web3";

const useMetaMask = () => {
  const [account, setAccount] = useState(null);
  const dispatch = useDispatch();

  const handleMetaMaskChange = async (newAccounts) => {
    const updatedUserAddress = getAddress(newAccounts[0]);
    const updatedUserData = await LoginMetamask(updatedUserAddress);
    dispatch(setUserData({ info: updatedUserData?.user }));
    localStorage.setItem("userData", JSON.stringify(updatedUserData?.user));
    setAccount(updatedUserAddress);
  };

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        
     
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
     
        if (accounts.length <= 0) {
          throw new Error("MetaMask account not connected");
        }

        // Handle account change
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
    } else {
      return {
        status: "error",
        title: "MetaMask Not Found",
        description: "Please install MetaMask to use this feature.",
      };
    }
  };

  return { connectMetaMask, account, handleMetaMaskChange, };
};

export default useMetaMask;
