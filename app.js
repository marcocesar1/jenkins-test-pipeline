const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Jenkins works');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
