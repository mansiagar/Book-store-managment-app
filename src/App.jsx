import "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Login from "./Pages/Login";
import Navbar from "./Component/Navbar";
import PrivateRoute from "./Component/PrivateRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
