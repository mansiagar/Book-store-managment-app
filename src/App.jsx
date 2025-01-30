import "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Login from "./Pages/Login";
import Navbar from "./Component/Navbar";
import PrivateRoute from "./Component/PrivateRoute";
import BookDetails from "./Pages/BookDetails";

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
        <Route
          path="/BookDetails"
          element={
            <PrivateRoute>
              <BookDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
