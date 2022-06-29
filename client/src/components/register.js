import { useState } from 'react';
import Navbar from './navbar';
var services = require('../services');

function Register() {
    var [username, setUsername] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    return (
      <div>
        <Navbar></Navbar>
        <div className="container" style={{height: '80vh', paddingTop: '10vh'}}>
        <div className="row g-0 h-100 d-flex justify-content-center align-items-center">
            <div className="col-6 bg-white shadow-sm rounded p-3">
                <div className="text-center fs-3">
                    Register
                </div>
                <div>
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <input type="text" className="form-control" id="username" onChange={(e) => {
                        setUsername(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="email@example.com" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </div>
                <div className="text-center mt-3">
                    <button className="btn btn-success" onClick={() => {
                        services.register(username, email, password);
                    }}>Register</button>
                </div>
            </div>
        </div>
      </div>
      </div>
    );
}

export default Register;
