import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Home(){
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://builder-backed.herokuapp.com/user/get").then((res) => {
      setUser(res.data.data);
    });
  }, []);
  console.log("user", user.map(x=>x.password));
  return (
    <div>
      <h1>Users List</h1>
      <Link to="/login">Login</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {user && user.map((x) => {
           return (
            <tr key={x._id}>
            <th>{x.username}</th>
            <td>{x.password}</td>
          </tr>
           )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
