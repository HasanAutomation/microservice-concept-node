const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let posts = [];

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    posts.push({
      ...data,
      comments: [],
    });
  }
  if (type === 'CommentCreated') {
    const { postId, status } = data;

    const post = posts.find((post) => post.id === postId);

    post.comments.push({ ...data, status });
  }
  if (type === 'CommentUpdated') {
    const { postId, status, id } = data;
    const post = posts.find((post) => post.id === postId);
    const comment = post.comments.find((cmt) => cmt.id === id);
    comment.status = status;
  }

  res.send({ ok: true });
});

app.listen(4002, () => console.log('Query service is running on 4002'));
