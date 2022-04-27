const express = require('express');
const axios = require('axios');
const { randomBytes } = require('crypto');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const comments = [];

app.get('/posts/:id/comments', (req, res) => {
  const commentsByPostId = comments.filter(
    comment => comment.postId === req.params.id
  );
  res.send(commentsByPostId);
});

app.post('/posts/:id/comments', async (req, res) => {
  const { content } = req.body;
  const postId = req.params.id;

  const comment = { postId, id: randomBytes(4).toString('hex'), content };

  comments.push(comment);

  try {
    await axios.post('http://localhost:4005/events', {
      type: 'CommentCreated',
      data: comment,
    });
  } catch (err) {
    console.log('err', err);
    return res.status(500).send({});
  }

  res.status(201).send(comment);
});

app.post('/events', (req, res) => {
  console.log('received event', req.body);
  res.send({});
});

app.listen(4001, () => console.log(`Comments service running on 4001`));
