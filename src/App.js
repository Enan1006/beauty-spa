import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Spinner from './Pages/Shared/Spinner/Spinner';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
