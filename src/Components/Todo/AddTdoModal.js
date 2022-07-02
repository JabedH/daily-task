import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { toast } from "react-toastify";

const AddTdoModal = () => {
  const [selected, setSelected] = useState(new Date());
  const editTdoList = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const date = e.target.date.value;
    const place = e.target.place.value;
    const addList = {
      title,
      date,
      place,
    };
    fetch("https://quiet-mountain-32735.herokuapp.com/addlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="flex justify-center items-center gap-14 my-10">
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
      <a href="#my-modal-2" class="btn my-5">
        add todo list
      </a>

      <div class="modal" id="my-modal-2">
        <div class="modal-box">
          <label for="my-modal-2" class=" absolute right-2 top-2">
            <a href="#" class=" btn btn-sm btn-circle">
              x
            </a>
          </label>

          <h3 class="font-bold text-lg">Select Your schedule</h3>
          <form
            onSubmit={editTdoList}
            action=""
            className="grid grid-cols-1 gap-3 justify-items-center "
          >
            <input
              name="title"
              type="text"
              placeholder="title"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="date"
              type="text"
              value={`${format(selected, "PP")}`}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="place"
              type="text"
              placeholder={`Place`}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className=" btn btn-success w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTdoModal;
