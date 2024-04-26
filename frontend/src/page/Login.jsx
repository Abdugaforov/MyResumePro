// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apicall from "../apicall/apicall.js";
function Login() {
    const [user, setUser] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    function loginUser() {
        axios({
            url: 'http://localhost:8080/login',
            method: 'post',
            data: user,
        })
            .then((res) => {
                if (res.data) {
                    console.log(res.data);
                    localStorage.setItem('access_token', res.data.access_token);
                    localStorage.setItem('refresh_token', res.data.refresh_token);
                    setUser({ username: '', password: '' });
                    apicall("/user/getId","GET", {}, {refreshToken:localStorage.getItem("refresh_token")}).then(({data})=>{
                        localStorage.setItem("userId", data);
                    })
                    navigate("/")
                }else {
                    alert("err")
                }
            }).catch(()=>alert("parol xato"))
    }

    return (
        <div className="row" style={{width:'1310px'}}>
            <div className="card">
                <h2>Login</h2>
                <input
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    value={user.username}
                    className="form-control"
                    placeholder="Email..."
                    type="text"
                />
                <input
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                    className="form-control"
                    placeholder="Password..."
                    type="password"
                />
                <button onClick={loginUser} className="buttonS">
                    Login
                </button>
                <button onClick={() => navigate('/register')} className="button">Register</button>
            </div>
        </div>
    );
}

export default Login;
