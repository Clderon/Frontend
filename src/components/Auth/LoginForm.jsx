import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { username, password });
        setUsername('');
        setPassword('');
    };
    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/register');
    };

    return (
        <div className="contenedor">
            <form className="login-form" action="" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-box">
                    <input
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <MdEmail className="icon" />
                </div>

                <div className="input-box">
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label htmlFor="password">
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="http://localhost:3000/">Forgot password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>
                        Don't have a count
                        <a href="" onClick={handleRegister}>
                            Register
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}
