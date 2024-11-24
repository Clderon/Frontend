export default function RegisterForm() {
    return (
        <div className="register-form">
            <h2>Register</h2>
            <form>
                <label>
                    Email
                    <input type="email" />
                </label>
                <label>
                    Password
                    <input type="password" />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
