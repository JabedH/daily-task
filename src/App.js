import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/navbar/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import CompleteTask from "./Components/CompleteTask/CompleteTask";
import ToDo from "./Components/Todo/ToDo";
import Calendar from "./Components/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="completetask" element={<CompleteTask />}></Route>
        <Route path="todo" element={<ToDo />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
