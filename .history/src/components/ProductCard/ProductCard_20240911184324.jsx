import { Link } from "react-router-dom";

// imprort icons
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ProductCard() {
  let [data, setData] = useState([]);
  let [err, setErr] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/book/books")
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            setData(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setErr("Network problem or server not working");
        console.log(
          `There was a problem with the fetch operation: ${error.message}`
        );
      });
  }, []);

  return data.map((item) => {
    <Link to={`/products/${item.id}`}>
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-cover rounded-t-lg"
        />
        <h3 className="mt-4 mb-2 font-bold text-lg hover:text-primary cursor-pointer text-center">
          {item.title}
        </h3>
        <p className="mb-2 text-gray text-center">
          <FaUser className="inline-flex items-center mr-2" />
          {item.author}
        </p>
        <p className="text-sm text-darkGray text-center">
          Published: {item.published_date}
        </p>
        <p className="text-sm  text-center text-primary">
          Category: {item.category}
        </p>
      </div>
    </Link>;
  });
}
