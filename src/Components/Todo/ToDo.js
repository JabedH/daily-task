import React, { useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar";
import AddTdoModal from "./AddTdoModal";
import MyModal from "./MyModal";
import TodoDetails from "./TodoDetails";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addlist")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  });
  const [todoEdit, setEdit] = useState([]);
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <AddTdoModal />
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Place</th>
              <th>Edit info</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((list) => (
              <TodoDetails key={list._id} list={list} setEdit={setEdit} />
            ))}

            {<MyModal todoEdit={todoEdit}></MyModal>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDo;
