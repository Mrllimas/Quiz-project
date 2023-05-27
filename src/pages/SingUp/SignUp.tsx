import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import './style.css';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signUp = (e: React.FormEvent) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                // Exibir a mensagem de conta criada com sucesso
                alert('Account created successfully. You are being redirected to the dashboard.');
                // Redirecionar para o dashboard
                navigate('/dashboard');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="sign-up-container">
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>                
                <button type="submit">Sign Up</button>
               
            </form>
             
            <p>Already have an account? <Link className="login" to="/login">Login</Link></p>
            
            <footer className="footer">Av2 - Desenvolvimento Web</footer>
        </div>
    );
};

export default SignUp;
