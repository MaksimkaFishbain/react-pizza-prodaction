import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="form-wrapper">
            <div className="form-content">
                <h1>Зарегистрироваться</h1>
                <div className="form-inputs">
                    <div className="input login">
                        <input type="email" placeholder="Почтовый адрес" maxLength="30" />
                    </div>
                    <div className="confirm-wrapper">
                        <div className="confirm-button">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                 width="25.000000pt" height="28.000000pt" viewBox="0 0 25.000000 28.000000"
                                 preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,28.000000) scale(0.100000,-0.100000)"
                                   stroke="none">
                                    <path d="M0 140 l0 -139 115 66 c63 36 115 68 115 72 0 3 -52 36 -115 73 l-115 66 0 -138z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="input password">
                        <input type="password" placeholder="Пароль" maxLength="30" />
                    </div>
                    <p>Уже есть аккаунт? <span><Link to="/login" className="link">Зарегистрироваться</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;