import { ethers } from "ethers";
import { connectMetamask } from "./connectMetamask";

export const getContract = async () => {
  const { signer } = await connectMetamask();

  const contract = new ethers.Contract(signer);

  return contract;
};
