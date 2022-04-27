const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/events', async (req, res) => {
  const event = req.body;

  await axios.post('http://localhost:4000/events', event);
  await axios.post('http://localhost:4001/events', event);
  await axios.post('http://localhost:4002/events', event);
  await axios.post('http://localhost:4003/events', event);

  res.send({ ok: true });
});

app.listen(4005, () => {
  console.log('Event Bus Listening on 4005');
});
