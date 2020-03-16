const express = require("express");
const app = express();

app.use(express.json());

const posts = [];
let currentId = 1;

function getAllpost(){
    return JSON.parse(JSON.stringify(posts));
}
function addPost(post){
    const newPost = {...post,id:currentId++ }
    posts.push(newPost);
    return newPost;
}
function getPostById(){
    return posts.find(i => i.id ===id )
}

function updatePostById(id, newPost) {
    const postIndex = getPostIndexById(id);
    const updatePost = {...newPost, id};
    posts[postIndex] = updatePost;
    return updatePost;

}


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
