
import React, { useState } from 'react';   // Login failed
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      if (response.ok) {
        const { success, token, msg } = await response.json();
        if (success) {
          // Login successful
          // Store the token in a secure manner (e.g., cookie or local storage)
          localStorage.setItem('token', token);

          // Redirect the user to the desired page
          // Replace '/dashboard' with the actual URL of your dashboard page
          window.location.href = '/dashboard';
        } else {
          // Login failed
          const { error } = await response.json();
          console.error(error);
          // Handle the error (e.g., display an error message to the user)
        }
      } else {
        // Handle network or server errors
        console.error('Failed to login');
      }
    } catch (error) {
      console.error(error);
      // Handle network or server errors
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        Remember me
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
