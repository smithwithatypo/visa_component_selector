import express from 'express';
const app = express();
const PORT = 3000;
import data from './data/data.js'


app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/get-data', (req, res) => {
  // res.send('here is some data');
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});