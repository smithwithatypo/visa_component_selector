import express from 'express';
import cors from 'cors';
import data from './data/data.js'

const app = express();
const PORT = 3000;

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/search', (req, res) => {
  // res.send('here is some data');
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


