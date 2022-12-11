import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Profile" element={<Home />}></Route>
        <Route path="/editProfile" element={<Home />}></Route>
        <Route path="/Messages" element={<Home />}></Route>
        <Route path="/PrivateMessage" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);