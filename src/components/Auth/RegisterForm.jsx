import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaUser } from 'react-icons/fa';
import React, { useState } from 'react';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/login');
    };
    return (
        <div className="contenedor">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Register</h2>

                {/* Nombre */}
                <div className="input-box">
                    <input
                        name="firstName"
                        type="text"
                        placeholder="Nombre"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <FaUser className="icon" />
                </div>

                {/* Apellido */}
                <div className="input-box">
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Apellidos"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <FaUser className="icon" />
                </div>

                {/* Correo */}
                <div className="input-box">
                    <input
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <MdEmail className="icon" />
                </div>

                {/* Género */}
                <div className="input-box">
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                            Seleccionar Genero
                        </option>
                        <option value="male">Mascullo</option>
                        <option value="female">Femenino</option>
                        {/* <option value="other">Other</option> */}
                    </select>
                </div>

                {/* Contraseña */}
                <div className="input-box">
                    <input
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                {/* Botón de registro */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
