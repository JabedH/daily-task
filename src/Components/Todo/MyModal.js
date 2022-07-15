import React from "react";
import { toast } from "react-toastify";

const MyModal = ({ todoEdit, setClear }) => {
  const id = todoEdit?._id;
  const editTodoList = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const date = e.target.date.value;
    const place = e.target.place.value;
    const updateList = {
      title,
      date,
      place,
    };
    fetch(`https://morning-brook-30971.herokuapp.com/addlist/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          toast("Your task has been changed");
          e.target.reset();
          setClear(null);
        }
      });
  };
  return (
    <div>
      <div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              for="my-modal-6"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">
              Editing: "{todoEdit.title}" list
            </h3>
            <form
              onSubmit={editTodoList}
              action=""
              className="grid grid-cols-1 gap-3 justify-items-center "
            >
              <input
                name="title"
                type="text"
                placeholder={`Title: ${todoEdit?.title}`}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                name="date"
                type="text"
                placeholder={`Date: ${todoEdit?.date}`}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                name="place"
                type="text"
                placeholder={`Place: ${todoEdit?.place}`}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                value="submit"
                className=" btn btn-success w-full max-w-xs"
              />
            </form>
            <p className="py-4">{}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
