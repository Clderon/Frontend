import LoginForm from './features/Auth/LoginForm';
import RegisterForm from './features/Auth/RegisterForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                {/* <Route path="/home" element={<HomePage />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
