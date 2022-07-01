import React from "react";

const MyModal = ({ todoEdit }) => {
  const editTdoList = (e) => {
    e.preventDefault();
    const edit = e.target.title.value;
    console.log(edit);
  };
  return (
    <div>
      <div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <label
              for="my-modal-6"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="font-bold text-lg">Editing: "{todoEdit.title}" list</h3>
            <form
              onSubmit={editTdoList}
              action=""
              className="grid grid-cols-1 gap-3 justify-items-center "
            >
              <input
                name="title"
                type="text"
                placeholder={`Title: ${todoEdit?.title}`}
                class="input input-bordered w-full max-w-xs"
              />
              <input
                name="date"
                type="text"
                placeholder={`Date: ${todoEdit?.date}`}
                class="input input-bordered w-full max-w-xs"
              />
              <input
                name="place"
                type="text"
                placeholder={`Place: ${todoEdit?.place}`}
                class="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                value="submit"
                className=" btn btn-success w-full max-w-xs"
              />
            </form>
            <p class="py-4">{}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
