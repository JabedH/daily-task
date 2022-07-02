import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ToDo from "../Todo/ToDo";
import banner from "../../assets/BG1.jpg";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://quiet-mountain-32735.herokuapp.com/addlist")
      .then((res) => res.json())
      .then((data) => {
        if (user) {
          setTodo(data);
        }
      });
  }, []);

  return (
    <div className=" drawer ">
      {!user && (
        <div class="carousel ">
          <div class="carousel-item  w-full flex justify-center ">
            <img src={banner} alt="Burger" />
          </div>
        </div>
      )}
      {user && (
        <div class="">
          <h1 className=" font-bold my-5">My Todo List</h1>
          <table class="table w-full">
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
    </div>
  );
};

export default Home;
