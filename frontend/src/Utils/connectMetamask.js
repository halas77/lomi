import { ethers } from "ethers";
import { toast } from "react-toastify";

export const connectMetamask = async (setAccount) => {
  if (typeof window.ethereum === "undefined") {
    console.log("Metamask is not insatlled!");
    toast.info("Metamask is not insatlled!");
    return;
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    setAccount(accounts[0]);
    return { signer, accounts };
  } catch (error) {
    console.log("error", error);
  }
};

export const checkIfWalletIsConnect = async (setAccount) => {
  try {
    if (typeof window.ethereum === "undefined") {
      console.log("Metamask is not insatlled!");
      toast.info("Metamask is not insatlled!");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length) {
      setAccount(accounts[0]);
    } else {
      console.log("No accounts found");
      toast.info("No accounts found!");
    }
  } catch (error) {
    console.log(error);
  }
};
