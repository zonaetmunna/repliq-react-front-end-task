import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../view/components/reuseable/Loading";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const {
    user: { number },
    isLoading,
  } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !number) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
