import "react";
import { Link } from "react-router-dom";
const Books = () => {
  return (
    <div>
      Welcome this is good book store app
      <Link to="/BookDetails">Book Details</Link>
    </div>
  );
};

export default Books;
