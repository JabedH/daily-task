import React, { useEffect, useState } from "react";
import ToDo from "../Todo/ToDo";

const Home = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addlist")
      .then((res) => res.json())
      .then((data) => setTodo(data.slice(0, 4)));
  });
  return (
    <div className=" drawer ">
      <div class="overflow-x-auto">
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
    </div>
  );
};

export default Home;
