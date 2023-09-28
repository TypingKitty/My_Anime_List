import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State variable for error message


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3002/api/login', { email, username, password });

      if (response.status === 200) {
        // Login successful
        const userId = response.data.user_id;
        console.log(response.data.message);
        // Perform any necessary actions after successful login
        navigate(`/main/${userId}`);
      } else {
        // Login failed
        setErrorMessage('Invalid credentials'); // Set the error message
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Invalid credentials'); // Set the error message
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h1 className="form-title">Sign in</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Render the error message if it exists */}
        <div className="form-input">
          
        </div>
        <div className="form-input">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-input">
          <button onClick={handleLogin} className="button">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
