import "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../style/Books.css";

const BookDetails = () => {
  const [Books, setBooks] = useState([]);
  const [category, setCotegory] = useState("");
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
          `https://equinox-power-dress.glitch.me/books?category=${category}`
        );
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        setError(error.response.message);
      }
    };
    fetchData();
  }, [category]);
  console.log(category);
  console.log(Books);
  return (
    <div>
      <h2> This is list of books</h2>
      <select value={category} onChange={(e) => setCotegory(e.target.value)}>
        <option value="">All</option>
        <option value="Fiction">Fiction</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Productivity">Productivity</option>
        <option value="Technology">Technology</option>
        <option value="History">History</option>
        <option value="Finance">Finance</option>
        <option value="Business">Business</option>
        <option value="Psychology">Psychology</option>
      </select>
      {loading && <h1>Loading....</h1>}
      {error && <h1>{error}</h1>}
      {Books.length > 0 ? (
        <div>
          {Books.map((book) => (
            <div key={book.id} className="books">
              <img src={book.coverImage} alt={book.name}></img>
              <h1>{book.name}</h1>
              <h3>{book.category}</h3>

              <h3>{book.price}</h3>
              <h4>{book.publishingYear}</h4>
              <p>{book.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>No data found</h1>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
