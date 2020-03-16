const express = require("express");
const app = express();
app.use(express.json());

const posts = [];
let currentId = 1;

app.get("/v1/posts", (req, res) => {
  res.json(posts);
});

app.post("/v1/posts", (req, res) => {
  const { author, content } = req.body;
  const newPost = { author, content, id: currentId++ };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get("/v1/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(i => i.id === Number(id));
  if (!post) {
    return res.sendStatus(404);
  }
  res.json(post);
});

app.put("/v1/posts/:id", (req, res) => {
  const { id } = req.params;
  const { author, content } = req.body;
  const post = posts.find(i => i.id === Number(id));
  if (!post) {
    return res.sendStatus(404);
  }
  post.author = author;
  post.content = content;
  res.json(post);
});

app.delete("/v1/posts/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex(i => i.id === Number(id));
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedPost = posts.splice(index, 1);
  res.json(deletedPost);
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
