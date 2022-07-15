import { format } from "date-fns";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddList = ({ setTodo, selected, setClear }) => {
  const [user] = useAuthState(auth);
  const addList = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const date = e.target.date.value;
    const place = e.target.place.value;
    const email = user.email;
    const addList = {
      title,
      date,
      place,
      email,
    };
    fetch("https://morning-brook-30971.herokuapp.com/addlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged == true) {
          toast("Your list has been added");
          e.target.reset();
          setClear(null);
        }
      });
    setTodo((oldData) => [...oldData, addList]);
  };
  return (
    <div className="modal" id="my-modal-2">
      <div className="modal-box">
        <label for="my-modal-2" className=" absolute right-2 top-2">
          <a href="#" className=" btn btn-sm btn-circle">
            x
          </a>
        </label>

        <h3 className="font-bold text-lg">Select Your schedule</h3>
        <form
          onSubmit={addList}
          action=""
          className="grid grid-cols-1 gap-3 justify-items-center "
        >
          <input
            name="title"
            type="text"
            placeholder="title"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            name="date"
            type="text"
            value={`${format(selected, "PP")}`}
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            name="place"
            type="text"
            placeholder={`Place`}
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            for="my-modal-2"
            type="submit"
            value="submit"
            className=" btn btn-success w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default AddList;
