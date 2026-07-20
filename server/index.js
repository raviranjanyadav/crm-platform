const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Dummy auth
app.post('/api/auth/login', (req, res) => {
  const { email } = req.body;
  return res.json({ token: 'dummy-token', user: { id: 1, name: 'Demo User', email } });
});

// Dummy user
app.get('/api/user', (req, res) => {
  return res.json({ id: 1, name: 'Demo User', email: 'demo@example.com' });
});

// Dummy leads
app.get('/api/leads', (req, res) => {
  const leads = [
    { id: 1, name: 'Acme Corp', contact: 'alice@acme.com', status: 'New' },
    { id: 2, name: 'Beta LLC', contact: 'bob@beta.com', status: 'Contacted' },
    { id: 3, name: 'Gamma Inc', contact: 'carol@gamma.com', status: 'Qualified' },
  ];
  return res.json(leads);
});

// Contact form (dummy)
app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;
  // In a real app you'd persist or send an email. Here we just echo back.
  return res.json({ ok: true, received: { name, email, company, message } });
});

app.listen(port, () => console.log(`Dummy API listening on http://localhost:${port}`));
