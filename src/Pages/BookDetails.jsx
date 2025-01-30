import "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../style/Books.css";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const [Books, setBooks] = useState([]);
  const [category, setCotegory] = useState("");
  const [sortbyvalue, setSortbyValue] = useState("");
  //Loading state
  const [loading, setLoading] = useState(true);
  //Error state
  const [error, setError] = useState(null);
  //navigate
  const navigate = useNavigate();
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
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://equinox-power-dress.glitch.me/books?sort=${sortbyvalue}`
        );
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        setError(error.response.message);
      }
    };
    fetchData();
  }, [sortbyvalue]);
  // View Book
  const ViewBook = (id) => {
    navigate(`/books/${id}`);
  };
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
      {/* sorting */}
      <select
        value={sortbyvalue}
        onChange={(e) => setSortbyValue(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="name_asc">Sort by asecding</option>
        <option value="price_asc">low to high</option>
        <option value="price_desc">High to low</option>
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

              <div>
                <button>Edit</button>
                <button>Delete</button>
                <button onClick={() => ViewBook(book.id)}>View</button>
              </div>
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
