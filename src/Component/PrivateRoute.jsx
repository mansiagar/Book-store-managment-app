import "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Create";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  const location = useLocation();
  //useEffect
  useEffect(() => {
    console.log(location);
  }, [location]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
