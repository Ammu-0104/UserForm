// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate(); // Corrected import

  const handleLogin = () => {
    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else if (role === 'employee') {
      navigate('/employee/dashboard');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Select Role:
        <select onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
