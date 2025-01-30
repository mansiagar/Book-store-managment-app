import "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const ViewBook = () => {
  const { id } = useParams();
  const [Books, setBooks] = useState();
  //Loading state
  const [loading, setLoading] = useState(true);
  //Error state
  const [error, setError] = useState(null);
  // fetch books
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://equinox-power-dress.glitch.me/books/${id}`
        );
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response.message);
      }
    };
    fetchData();
  }, [id]);
  console.log(Books);

  return (
    <div>
      {loading && <h1>Loading....</h1>}
      {error && <h1>{error}</h1>}

      <h1>{Books.name}</h1>
      <h3>{Books.category}</h3>

      <h3>{Books.price}</h3>
      <h4>{Books.publishingYear}</h4>
      <p>{Books.description}</p>
    </div>
  );
};

export default ViewBook;
