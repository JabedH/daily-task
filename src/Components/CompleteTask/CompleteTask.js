import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";

import CompleteTaskDetails from "./CompleteTaskDetails";

const CompleteTask = () => {

  const [complete, setComplete] = useState([]);
  useEffect(() => {
    fetch("https://quiet-mountain-32735.herokuapp.com/complete")
      .then((res) => res.json())
      .then((data) => {
        setComplete(data)
      });
  }, []);
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
            {complete.map((list) => (
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

export default CompleteTask;
