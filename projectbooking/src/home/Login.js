import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Here you would usually handle the form submission to your server for authentication
        // For demonstration purposes, we'll assume the login is successful if both fields are non-empty

        if (email === '' || password === '') {
            setErrorMessage('Both fields are required');
            return;
        }

        // Clear error message if inputs are valid
        setErrorMessage('');

        // Assuming login is successful, redirect to the home page
        navigate('/app');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Login</h2>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/registerform">Sign up</a></p>
            </form>
            
        </div>
    );
};

export default LoginForm;
