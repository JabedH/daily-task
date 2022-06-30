import React, { useEffect, useState } from "react";
import AddTdoModal from "./AddTdoModal";
import MyModal from "./MyModal";
import TodoDetails from "./TodoDetails";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("todolist.json")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  });
  const [todoEdit, setEdit] = useState([]);
  return (
    <div className="">
      <AddTdoModal />
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Time</th>
              <th>Place</th>
              <th>Edit info</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((list) => (
              <TodoDetails list={list} setEdit={setEdit} />
            ))}

            {<MyModal todoEdit={todoEdit}></MyModal>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDo;
