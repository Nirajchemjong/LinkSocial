import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Signin from "./pages/User/signin/Signin";
import { ToastContainer } from "react-toastify";
import Register from "./pages/User/register/Register";
import Check from "./pages/User/register/check";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Signin />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/check'
          element={<Check />}
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
