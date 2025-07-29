import express from 'express';
import cors from 'cors';
import data from './data/data.js'

const app = express();
const PORT = 3000;

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/search', (req, res) => {
  // res.send('here is some data');
  res.json(data)
})

app.post('/search', (req, res) => {
  // build prompt here
  // call AI API here
  const searchInput = req.body.searchInput  // String
  if (searchInput in data) {
    return res.json({"data": data[searchInput]});
  } else {
    return res.json({"data": "no data"})
  }
  console.log(searchInput) 
  res.json({"data": "this is data from post request", "status": "200"})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


