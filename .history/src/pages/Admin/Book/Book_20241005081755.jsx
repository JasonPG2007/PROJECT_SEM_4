import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const Book = () => {
  const [books, setBooks] = useState([]);
  let [errFetch, setErrFetch] = useState("");
  let [err, setErr] = useState("");
  let [msg, setMsg] = useState("");

  const handleDelete = async (event, bookId) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:8080/book/deletebook/${bookId}`
      );
      setMsg(response.data);
      setErr(response.data);
      if (response.status === 200) {
        window.location.href = "/admin/book";
      }
    } catch (error) {
      setErr("Network problem or server not working");
      console.log(
        `There was a problem with the fetch operation: ${error.message}`
      );
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/book/books");
        setBooks(response.data);
        setErrFetch(response.data);
      } catch (error) {
        setErrFetch("Network problem or server not working");
        console.log("Error fetching books: " + error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Books</h2>
        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr style={{ textTransform: "uppercase" }}>
                <th scope="col">Book ID</th>
                <th scope="col">Category ID</th>
                <th scope="col">Book Name</th>
                <th scope="col">Author</th>
                <th scope="col">Publisher</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Picture</th>
                <th scope="col">Read Count</th>
                <th scope="col">Star</th>
                <th scope="col">Favorite</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(books) && books.length > 0 ? (
                books.map((book) => (
                  <tr key={book.bookId}>
                    <td>{book.bookId}</td>
                    <td>{book.categoryId}</td>
                    <td>{book.bookName}</td>
                    <td>{book.author}</td>
                    <td>{book.publisher}</td>
                    <td>{book.bookPrice}</td>
                    <td>{book.bookDescription}</td>
                    <td>
                      <img
                        src={`../${book.picture}`}
                        alt={book.bookName}
                        width="50"
                      />
                    </td>
                    <td>{book.readCount}</td>
                    <td>{book.star}</td>
                    <td>{book.isFavorite ? "Yes" : "No"}</td>
                    <td>
                      {moment(book.createdAt, "DD/MM/yyyy").format(
                        "DD/MM/yyyy"
                      )}
                    </td>
                    <td>
                      {book.updatedAt
                        ? moment(book.updatedAt, "DD/MM/yyyy").format(
                            "DD/MM/yyyy"
                          )
                        : "Not updated yet"}
                    </td>
                    <a
                      href={`/admin/book/update/${book.bookId}`}
                      className="btn btn-primary mr-1"
                    >
                      <i className="ti ti-pencil"></i>
                    </a>
                    <button
                      className="btn btn-danger"
                      onClick={(event) => handleDelete(event, book.bookId)}
                    >
                      <i className="ti ti-trash"></i>
                    </button>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={13} style={{ textAlign: "center" }}>
                    {errFetch}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Book;