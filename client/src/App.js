import './App.css';
import Navbar from './components/navbar';
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="h-100">
      <Router>
        <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="register" element={<Register />}>
            </Route>
            <Route path="profile" element={<Profile />}>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
