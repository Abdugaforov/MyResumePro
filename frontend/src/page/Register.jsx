// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import apicalEazy from '../apicall/apicall';

function Register() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    function submit() {
        if (fullName && email && password && age) {
            apicalEazy('/register', 'post', { fullName, email, password, age }).then(() => navigate('/login'));
        } else {
            alert('Iltimos, barcha maydonlarni to\'ldiring!');
        }
    }

    return (
        <div className="container " style={{width:'1310px'}}>
            <br/><br/><br/><br/><br/>
            <div className="row my-5">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className='card-header display-5' style={{textAlign:"center"}}>Register</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="name" style={{textAlign:"center"}}>To'liq ism</label>
                                <input
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="form-control"
                                    type="text"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    type="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Yosh</label>
                                <input
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="form-control"
                                    type="number"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Parol</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={submit} className="btn btn-success w-100">Ro'yxatdan o'tish</button>
                            <p className="mt-3 text-center">
                                Accountga ega misiz? <Link to="/login">Kirish</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
