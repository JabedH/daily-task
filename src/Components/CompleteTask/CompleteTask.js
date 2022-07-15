import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import CompleteTaskDetails from "./CompleteTaskDetails";

const CompleteTask = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [complete, setComplete] = useState([]);
  useEffect(() => {
    fetch(`https://morning-brook-30971.herokuapp.com/complete?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setComplete(data);
      });
  }, []);
  return (
    <div className=" drawer ">
      <div className="overflow-x-auto">
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
