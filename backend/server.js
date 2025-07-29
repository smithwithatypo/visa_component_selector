import express from 'express';
import cors from 'cors';
import data from './data/data.js'
import { getComponentMatch } from './ai.js';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://visacomponentselector-production.up.railway.app/',
    'https://visacomponentselector-production.up.railway.app',
  ]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/search', (req, res) => {
  res.json(data)
})

app.post('/search', async (req, res) => {
  const searchInput = req.body.searchInput  // String
  const aiOutput = await getComponentMatch(searchInput)

  if (aiOutput in data) {
    console.log("aiOutput is in data  ", aiOutput)
    return res.json({"data": data[aiOutput]});
  } else {
    console.log("aiOutput is: ", aiOutput);
    return res.json({"data": "server error"})
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


