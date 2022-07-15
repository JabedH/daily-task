import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ToDo from "../Todo/ToDo";
import banner from "../../assets/BG1.jpg";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch(`https://morning-brook-30971.herokuapp.com/addlist?email=${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  // useEffect(() => {
  //   fetch(`https://morning-brook-30971.herokuapp.com/addlist?email=${email}`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 401 || res.status === 403) {
  //         signOut(auth);
  //         navigate("/login");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTodo(data);
  //     });
  // }, []);
  if (loading) {
    <Loading />;
  }
  return (
    <div className=" drawer ">
      {user && (
        <div className="">
          <h1 className=" font-bold my-5">My Todo List</h1>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Place</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((list) => (
                <tr>
                  <td>{list.title}</td>
                  <td>{list.date}</td>
                  <td>{list.place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!user && (
        <div className="carousel ">
          <div className="carousel-item  w-full flex justify-center ">
            <img src={banner} alt="Burger" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
