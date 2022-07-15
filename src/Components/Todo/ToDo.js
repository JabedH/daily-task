import React, { useEffect, useReducer, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Calendar from "../Calendar/Calendar";
import Loading from "../Loading/Loading";
import AddTdoModal from "./AddTdoModal";
import MyModal from "./MyModal";
import TodoDetails from "./TodoDetails";

const ToDo = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [clear, setClear] = useState(null);
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch(`https://morning-brook-30971.herokuapp.com/addlist?email=${email}`, 
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    }
    )
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  const [todoEdit, setEdit] = useState([]);

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <AddTdoModal setClear={setClear} todo={todo} setTodo={setTodo} />
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Complete</th>
              <th>Title</th>
              <th>Date</th>
              {/* <th>Place</th> */}
              <th>Edit info</th>
            </tr>
          </thead>
          <tbody>
            {todo?.map((list) => (
              <TodoDetails
                setClear={setClear}
                setTodo={setTodo}
                todo={todo}
                key={list._id}
                list={list}
                setEdit={setEdit}
              />
            ))}

            {clear && (
              <MyModal
                setClear={setClear}
                todo={todo}
                setTodo={setTodo}
                todoEdit={todoEdit}
              ></MyModal>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDo;
