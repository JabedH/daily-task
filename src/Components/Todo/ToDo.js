import React, { useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar";
import Loading from "../Loading/Loading";
import AddTdoModal from "./AddTdoModal";
import MyModal from "./MyModal";
import TodoDetails from "./TodoDetails";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://quiet-mountain-32735.herokuapp.com/addlist")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  const [todoEdit, setEdit] = useState([]);

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <AddTdoModal todo={todo} setTodo={setTodo} />
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Date</th>
              <th>Place</th>
              <th>Edit info</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((list) => (
              <TodoDetails
                setTodo={setTodo}
                todo={todo}
                key={list._id}
                list={list}
                setEdit={setEdit}
              />
            ))}

            {
              <MyModal
                todo={todo}
                setTodo={setTodo}
                todoEdit={todoEdit}
              ></MyModal>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDo;
