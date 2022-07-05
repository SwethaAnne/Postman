import './App.css';
import { useState } from 'react';
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";

function App() {
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  var [profileUsername, setProfileUsername] = useState('');
  var [profileEmail, setProfileEmail] = useState('');
  var [profileUserId, setProfileUserId] = useState('');

  return (
    <div className="h-100">
      <Navbar isLoggedIn={isLoggedIn}></Navbar>
      <Router>
        <Routes>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setProfileUsername={setProfileUsername} setProfileEmail={setProfileEmail} setProfileUserId={setProfileUserId} />}>
            </Route>
            <Route path="register" element={<Register />}>
            </Route>
            <Route path="profile" element={<Profile username={profileUsername} email={profileEmail} userid={profileUserId} />}>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
