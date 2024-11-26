import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Input, Button } from '../../components/common';

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
                <h2>Iniciar sesión</h2>
                <div className="input-box">
                    <Input placeholder={'E-mail'} type="email" />
                    <MdEmail className="icon" />
                </div>

                <div className="input-box">
                    <Input placeholder={'Contraseña'} type="password" />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label>
                        <Input type="checkbox" />
                        Recuérdame
                    </label>

                    <a href="http://localhost:3000/">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
                <Button>Iniciar sesión</Button>

                <div className="register-link">
                    <p>
                        ¿No tienes una cuenta?
                        <a href="/" onClick={handleRegister}>
                            Regístrate
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}
