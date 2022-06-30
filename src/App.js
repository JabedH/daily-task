import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/navbar/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import CompleteTask from "./Components/CompleteTask/CompleteTask";
import ToDo from "./Components/Todo/ToDo";
import Calendar from "./Components/Calendar/Calendar";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/Signup";
import Footer from "./Components/navbar/Footer";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="completetask" element={<CompleteTask />}></Route>
        <Route path="todo" element={<ToDo />} />
        <Route path="calender" element={<Calendar />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
