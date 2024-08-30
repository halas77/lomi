import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  checkIfWalletIsConnect,
  connectMetamask,
} from "../Utils/connectMetamask";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  // connect to metamask
  const connectMetamaskWithAccount = async () => {
    const { accounts } = connectMetamask();
    setAccount(accounts[0]);
    window.location.reload();
  };

  // check if wallet is connect
  useEffect(() => {
    checkIfWalletIsConnect(setAccount);
  }, []);

  return (
    <MainContext.Provider
      value={{
        account,
        connectMetamaskWithAccount,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
