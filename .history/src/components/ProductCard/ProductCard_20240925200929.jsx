import { Link } from "react-router-dom";

// import icons
import { FaUser } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";

export default function ProductCard({ book }) {
  useEffect(() => {
    fetch("http://localhost:8080/catebook/catebookname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            setMsg(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          Cookies.set("username", data.username, { expires: 7 });
          Cookies.set("userId", data.userId, { expires: 7 });
          if (data.roles.roleName === "Admin") {
            window.location.href = "/admin/dashboard";
          } else {
            window.location.href = "/";
          }
        }
      })
      .catch((error) => {
        setError("Network problem or server not working");
        Cookies.set("msg", "Network problem or server not working");
        console.log(
          "There was a problem with the fetch operation: " + error.message
        );
        window.location.reload();
      });

    fetchBooks();
  }, []);

  return (
    <Link to={`/product/${book.bookId}`}>
      <div className="flex flex-col books-center bg-white p-4 rounded-lg shadow-md">
        <img
          src={`../${book.picture}`}
          alt={book.bookName}
          className="w-full object-cover rounded-t-lg"
        />
        <h3 className="mt-4 mb-2 font-bold text-lg hover:text-primary cursor-pointer text-center">
          {book.bookName}
        </h3>
        <p className="mb-2 text-gray text-center">
          <FaUser className="inline-flex books-center mr-2" />
          {book.author}
        </p>
        <p className="text-sm text-darkGray text-center">
          Published: {book.createdAt}
        </p>
        <p className="text-sm  text-center text-primary">
          Category: {book.categoryId}
        </p>
      </div>
    </Link>
  );
}
