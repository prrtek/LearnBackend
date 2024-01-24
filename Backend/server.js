import express from "express"; //module.js

const app = express();
const port = 1000;
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programming Joke",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Dad Joke",
      content: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 3,
      title: "Animal Joke",
      content:
        "Why did the chicken join a band? Because it had the drumsticks!",
    },
    {
      id: 4,
      title: "Pun Joke",
      content:
        "I used to play piano by ear, but now I use my hands and fingers.",
    },
    {
      id: 5,
      title: "Science Joke",
      content:
        "Why do biologists look forward to casual Fridays? They're allowed to wear genes to work!",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//learn about module js and common js
