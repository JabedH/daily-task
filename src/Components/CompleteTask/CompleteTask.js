import React from "react";

const CompleteTask = () => {
  const [complete, setComplete] = useState([]);
  useEffect(() => {
    fetch("https://quiet-mountain-32735.herokuapp.com/complete")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <div>
      <h1>complete tasks</h1>
    </div>
  );
};

export default CompleteTask;
