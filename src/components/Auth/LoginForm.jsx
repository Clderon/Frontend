import './LoginForm.css';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

export default function LoginForm() {
    return (
        <div className="contenedor">
            <form className="login-form" action="">
                <h2>Login</h2>
                <div className="input-box">
                    <MdEmail className="icon" />
                    <input
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        required
                    />
                </div>

                <div className="input-box">
                    <FaLock className="icon" />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
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
                        <a href="http://localhost:3000/">Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
}
