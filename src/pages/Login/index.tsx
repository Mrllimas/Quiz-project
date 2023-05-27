import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, signIn, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user]);

  const handleLogin = () => {
    signIn(email, password);
  };

  return (
    <div className="form-container">
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}            
          />
        
          
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <Link to="/signup" className="create-account-button">Create an Account</Link>
          
        </>
      )}
      <footer className="footer">Av2 - Desenvolvimento Web</footer>
    </div>
  );
};

export default Login;
