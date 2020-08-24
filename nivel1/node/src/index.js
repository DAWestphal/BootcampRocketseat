const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const users = ["Daniel", "Vitor", "Tadashi"];

app.use((req, res, next) => {
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd("Request");
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" });
  }

  return next();
}

const searchByName = (filter) => {
 
  return users.find((user) => user === filter);
};

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }

  req.user = user;

  return next();
}

app.get("/users", (req, res) => {
  const { filter } = req.query;
  if (filter) {
    const result = searchByName(filter);
    if (!result) res.status(404).json("I don't have that");

    return res.json(result);
  }
  return res.json(users);
});

app.get("/users/:index", checkUserInArray, (req, res) => {
  return res.json(req.user);
});

app.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(name);
});

app.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

app.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.status(202).json({ msg: "Deleted!" });
});

app.listen(3333, () => {
  console.log("🚨️ Bug-end started!");
});