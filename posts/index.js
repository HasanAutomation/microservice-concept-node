const express = require('express');
const axios = require('axios');
const { randomBytes } = require('crypto');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const posts = [];
app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const { title } = req.body;

  const post = { id: randomBytes(4).toString('hex'), title };

  posts.push(post);

  try {
    await axios.post('http://localhost:4005/events', {
      type: 'PostCreated',
      data: post,
    });
  } catch (err) {
    console.log('err', err);
    return res.send({});
  }

  res.status(201).send(post);
});

app.post('/events', (req, res) => {
  res.send({});
});

app.listen(4000, () => console.log(`Posts service running on 4000`));
