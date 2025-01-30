import "react";
import { AuthContext } from "./Create";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  // set authenticated
  const [isAuthenticated, setAuthenticated] = useState(() => {
    return localStorage.getItem("token") ? true : false;
  });
  //set Token
  const [token, setToken] = useState(null);
  // navigate
  const navigate = useNavigate();
  //location
  const location = useLocation();
  // useEffect
  useEffect(() => {
    console.log(token);
  }, [token]);

  useEffect(() => {
    console.log(location, "in Context");
  }, [location]);

  //login
  const login = (authToken) => {
    console.log(authToken, "in Context");
    //set token
    setToken(authToken);

    // localstroge
    localStorage.setItem("token", authToken);
    // authentication true
    setAuthenticated(true);

    // navigate to books page
    navigate(location.state.from || "/");
  };
  //logout
  const logout = () => {
    //set token null
    setToken(null);

    // authentication  false
    setAuthenticated(false);
    // localstorage clear
    localStorage.removeItem("token");
    // navigate to home page

    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
