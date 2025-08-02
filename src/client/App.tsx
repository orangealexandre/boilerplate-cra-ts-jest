import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse {
  status: string;
  message: string;
}

function App() {
  const [healthStatus, setHealthStatus] = useState<ApiResponse | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    // Check server health on component mount
    fetchHealthStatus();
    fetchUsers();
  }, []);

  const fetchHealthStatus = async () => {
    try {
      const response = await fetch('/api/health');
      const data = await response.json();
      setHealthStatus(data);
    } catch (error) {
      console.error('Error fetching health status:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      
      if (response.ok) {
        const createdUser = await response.json();
        setUsers([...users, createdUser]);
        setNewUser({ name: '', email: '' });
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React + Express + TypeScript</h1>
        
        {/* Server Health Status */}
        {healthStatus && (
          <div className="health-status">
            <h3>Server Status: {healthStatus.status}</h3>
            <p>{healthStatus.message}</p>
          </div>
        )}

        {/* User Form */}
        <div className="user-form">
          <h3>Add New User</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add User'}
            </button>
          </form>
        </div>

        {/* Users List */}
        <div className="users-list">
          <h3>Users ({users.length})</h3>
          {users.map((user) => (
            <div key={user.id} className="user-item">
              <strong>{user.name}</strong> - {user.email}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
