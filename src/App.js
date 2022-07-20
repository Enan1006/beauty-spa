import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
