import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const TodoDetails = ({ todo, list, setEdit, setTodo, setClear }) => {
  // const [complete, setComplete] = useState([]);
  // console.log(complete);
  const handleDelete = (id) => {
    const url = `https://morning-brook-30971.herokuapp.com/addlist/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = todo.filter((list) => list._id !== id);
          setTodo(remaining);
        }
      });
  };
  const handlePost = (list) => {
    fetch("https://morning-brook-30971.herokuapp.com/complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <tr>
      <td>
        <input
          onClick={() => {
            handleDelete(list._id);
            handlePost(list);
            // setComplete(list);
          }}
          type="checkbox"
          className="btn"
        />
      </td>
      <td>{list.title}</td>
      <td>{list.date}</td>
      {/* <td>{list.place}</td> */}
      <td>
        <label
          onClick={() => [setEdit(list), setClear(list)]}
          for="my-modal-6"
          className="btn btn-warning"
        >
          Edit
        </label>
      </td>
    </tr>
  );
};

export default TodoDetails;
