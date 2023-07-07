const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Jenkins works');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/users', (req, res) => {
  res.send('Users webhook');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
