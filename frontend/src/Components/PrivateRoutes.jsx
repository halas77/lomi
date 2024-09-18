import { Navigate, Outlet } from "react-router-dom";

import Loader from "./Loader";
import { useContext } from "react";
import { MainContext } from "../Context/MainContext";

const PrivateRoute = () => {
  const { account, isLoading } = useContext(MainContext);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return account ? <Outlet /> : <Navigate to="/connect-wallet" replace />;
};

export default PrivateRoute;
