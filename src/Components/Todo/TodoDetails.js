import React from "react";

const TodoDetails = ({ list, setEdit }) => {
  return (
    <tr>
      <td>{list.title}</td>
      <td>{list.date}</td>
      <td>{list.place}</td>
      <td>
        <label
          onClick={() => setEdit(list)}
          for="my-modal-6"
          className="btn btn-warning"
        >
          Edit
        </label>
      </td>
    </tr>
  );
};

export default TodoDetails;
