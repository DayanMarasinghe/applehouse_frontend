import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
