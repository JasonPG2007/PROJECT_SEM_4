import { Link } from "react-router-dom";

// imprort icons
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductCard() {
  let [data, setData] = useState([]);
  let [err, setErr] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/users");
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setErr("Unexpected data format");
        }
      } catch (error) {
        setErr("Network problem or server not working");
        console.log(
          `There was a problem with the fetch operation: ${error.message}`
        );
      }
    };

    fetchBooks();
  }, []);

  return data.length > 0 ? (
    JSON.stringify(data).map((item) => (
      <Link key={item.bookId} to={`/product/${item.bookId}`}>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src={item.picture}
            alt={item.bookName}
            className="w-full object-cover rounded-t-lg"
          />
          <h3 className="mt-4 mb-2 font-bold text-lg hover:text-primary cursor-pointer text-center">
            {item.bookName}
          </h3>
          <p className="mb-2 text-gray text-center">
            <FaUser className="inline-flex items-center mr-2" />
            {item.author}
          </p>
          <p className="text-sm text-darkGray text-center">
            Published: {item.createdAt}
          </p>
          <p className="text-sm  text-center text-primary">
            Category: {item.categoryId}
          </p>
        </div>
      </Link>
    ))
  ) : (
    <div>{err}</div>
  );
}
