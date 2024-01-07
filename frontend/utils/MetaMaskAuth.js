"use client";
import { useEffect, useState } from "react";
import { ethers, getAddress } from "ethers";
import { LoginMetamask } from "../Api/userApi";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/slice/userSlice";

const useMetaMask = () => {
  const [account, setAccount] = useState(null);
  const dispatch = useDispatch();

  const handleMetaMaskChange = async (newAccounts) => {
    const updatedUserAddress = getAddress(newAccounts[0]);
    const updatedUserData = await LoginMetamask(updatedUserAddress);
    dispatch(setUserData({ info: updatedUserData?.user }));
    console.log(updatedUserData);
    setAccount(updatedUserAddress);
  };

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        if (accounts.length <= 0) {
          return {
            status: "error",
            title: "Please Sign in To MetaMask Account!",
            description:
              "Make Sure your Account are connected to MetaMask Account, Otherwise, you cannot Access To this Site",
          };
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
          title: "Please Sign in To MetaMask Account!",
          description:
            "Make Sure you are connected to MetaMask Account, Otherwise, you cannot Access To this Site",
        };
      }
    } else {
      return {
        status: "error",
        title: "MetaMask! Does not Exist on your Browser",
        description:
          "Please Install MetaMask Extension, Otherwise, you cannot Access this Site",
      };
    }
  };


  return { connectMetaMask, account,handleMetaMaskChange };
};

export default useMetaMask;