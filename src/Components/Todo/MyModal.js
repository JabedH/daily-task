import React from "react";

const MyModal = ({ todoEdit }) => {
  return (
    <div>
      <div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p class="py-4">{todoEdit?.title}</p>
            <div class="modal-action">
              <label for="my-modal-6" class="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
