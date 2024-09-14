import { useState, useEffect } from "react";
import "../../../assets/js/jquery-3.3.1.min.js";
import "../../../assets/js/bootstrap.min.js";
import "../../../assets/js/main.js";
import moment from "moment";
import axios from "axios";

const Users = () => {
  let [data, setData] = useState([]);
  let [err, setErr] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/users");
        alert(response.data);
        setData(response.data);
        setErr(response.data);
      } catch (error) {
        setErr("Network problem or server not working");
        console.log(
          `There was a problem with the fetch operation: ${error.message}`
        );
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Users</h2>

        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr style={{ textTransform: "uppercase" }}>
                <th scope="col">User Id</th>
                <th scope="col">Category</th>
                <th scope="col">Username</th>
                <th scope="col">Age</th>
                <th scope="col">Avatar</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated at</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.userId}>
                    <td>{item.userId}</td>
                    <td>{item.categoryId}</td>
                    <td>{item.username}</td>
                    <td>{item.age}</td>
                    <td>
                      {item.avatar ? (
                        <img
                          src={`../src/assets/images/${item.avatar}`}
                          alt=""
                          width={50}
                          style={{ borderRadius: "50%" }}
                        />
                      ) : (
                        "No avatar"
                      )}
                    </td>
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
                    <td>{item.roles.roleName}</td>
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

export default Users;
