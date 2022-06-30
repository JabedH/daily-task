import React from "react";

const AddTdoModal = () => {
  return (
    <div>
      <label for="my-modal-6" class="btn modal-button my-5">
        Add List
      </label>

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTdoModal;
