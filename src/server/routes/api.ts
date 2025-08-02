import { Router } from 'express';

const router = Router();

// GET /api/hello
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// GET /api/users
router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);
});

// POST /api/users
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // In a real app, you would save to a database
  res.status(201).json({ 
    id: Date.now(), 
    name, 
    email,
    message: 'User created successfully' 
  });
});

export default router; 