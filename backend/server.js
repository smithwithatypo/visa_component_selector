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
    'https://visacomponentselector-production.up.railway.app',
    'https://visacomponentselector-production.up.railway.app/',
    'https://glorious-miracle-production.up.railway.app',
    'https://glorious-miracle-production.up.railway.app/',
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
  console.log("req.body is: ", req.body);
  const searchInput = req.body.searchInput  // String
  const threeOutputs = await getComponentMatch(searchInput);

  const arrayOfOutputs = threeOutputs.split(',').map(output => output.trim());
  const payload = [];

  for (const output of arrayOfOutputs) {
    if (output in data) {
      console.log("Found match:", output);
      payload.push(data[output])
    } else {
      console.log("aiOutput is: ", output);
      return res.json({"data": "server error"})
    }
  }
  return res.json({"data": payload});

})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


