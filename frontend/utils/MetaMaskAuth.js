import { ethers } from "ethers";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
const ConnectMetaMask = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      if (accounts?.length > 0) {
        return (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Please Sign in To MetaMask Account!</AlertTitle>
            <AlertDescription>
              Make Sure you are connected to MetaMask Account ,OtherWise You can
              not Access To this Site
            </AlertDescription>
          </Alert>
        );
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Your browser does not Contain MetaMask!</AlertTitle>
        <AlertDescription>
          Please make MetaMask Account ,OtherWise You can not Access To this
          Site
        </AlertDescription>
      </Alert>
    );
  }
};
