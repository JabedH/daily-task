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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route
          path="completetask"
          element={
            <RequireAuth>
              {" "}
              <CompleteTask />{" "}
            </RequireAuth>
          }
        ></Route>
        <Route
          path="todo"
          element={
            <RequireAuth>
              {" "}
              <ToDo />{" "}
            </RequireAuth>
          }
        />
        <Route path="calender" element={<Calendar />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
