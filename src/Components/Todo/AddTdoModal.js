import { format } from "date-fns";
import React, { useReducer, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import AddList from "./AddList";

const AddTdoModal = ({ todo, setTodo }) => {
  const [user] = useAuthState(auth);
  console.log(user.email);
  const [selected, setSelected] = useState(new Date());
  const [clear, setClear] = useState(null);

  return (
    <div className="flex justify-center items-center  gap-14 my-10">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  items-center ">
        <div>
          <div className="">
            <div className=" ">
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
              />
            </div>
            <h1>You have selected: {format(selected, "PP")}</h1>
          </div>
        </div>
        <div>
          <a
            onClick={() => setClear(todo)}
            href="#my-modal-2"
            className="btn my-5 w-40   "
          >
            add todo list
          </a>
        </div>
      </div>
      {clear && (
        <AddList setClear={setClear} selected={selected} setTodo={setTodo} />
      )}
    </div>
  );
};

export default AddTdoModal;
