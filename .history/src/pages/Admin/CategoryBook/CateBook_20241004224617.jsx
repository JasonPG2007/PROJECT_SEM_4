import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const CateBook = () => {
  let [data, setData] = useState([]);
  let [err, setErr] = useState("");
  let [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/catebook/catebooks"
        );
        setData(response.data);
        setErr(response.data);
      } catch (error) {
        setErr("Network problem or server not working");
        console.log(
          `There was a problem with the fetch operation: ${error.message}`
        );
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (event, categoryId) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:8080/catebook/deletecatebook/${categoryId}`
      );
      setMsg(response.data);
      setErr(response.data);
      if (response.status === 200) {
        window.location.href = "/admin/cate-book";
      }
    } catch (error) {
      setErr("Network problem or server not working");
      console.log(
        `There was a problem with the fetch operation: ${error.message}`
      );
    }
  };

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Users</h2>

        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr style={{ textTransform: "uppercase" }}>
                <th scope="col">Category ID</th>
                <th scope="col">Name</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated at</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.categoryId}>
                    <td>{item.categoryId}</td>
                    <td>{item.categoryName}</td>
                    <td>
                      {item.createdAt
                        ? moment(item.createdAt, "DD/MM/yyyy").format(
                            "DD/MM/yyyy"
                          )
                        : "Not created yet"}
                    </td>
                    <td>
                      {item.updatedAt
                        ? moment(item.updatedAt, "DD/MM/yyyy").format(
                            "DD/MM/yyyy"
                          )
                        : "Not updated yet"}
                    </td>
                    <td>
                      <a
                        href={`/admin/cate-book/update/${item.categoryId}`}
                        className="btn btn-primary mr-1"
                      >
                        <i className="ti ti-pencil"></i>
                      </a>
                      <button
                        className="btn btn-danger"
                        onClick={(event) =>
                          handleDelete(event, item.categoryId)
                        }
                      >
                        <i className="ti ti-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center" }}>
                    {err}
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

export default CateBook;
