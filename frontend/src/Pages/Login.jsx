import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../Context/MainContext";

const Login = () => {
  const { connectMetamaskWithAccount } = useContext(MainContext);

  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    connectMetamaskWithAccount();
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-[700px]  p-2">
      <div className="p-6 sm:p-8 border border-white/10 rounded-3xl shadow-lg bg-white/5 max-w-md">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 py-4">
            <img src="/lomiLogo.png" alt="Logo Image" className="w-7 h-7" />
            <h1 className="text-2xl font-semibold text-gray-50">1omi.</h1>
          </div>
          <p className="mt-2 text-sm text-gray-200">
            Connect your wallet to start using our platform. Ensure your
            MetaMask is installed and ready to go.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => handleConnectWallet()}
            className="w-full py-3 px-4 flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-lime-600 hover:bg-lime-500 text-white  focus:outline-none "
          >
            Connect Wallet
          </button>
          <p className="mt-4 text-xs text-gray-500 text-center">
            Make sure you have MetaMask installed in your browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
