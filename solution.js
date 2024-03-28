import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "cprogram",
  password: "Mounika@0801",
  port: 5432,
});

const app = express();
const port = 3000;

db.connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error connecting to the database", err));

let quiz = [];
let totalCorrect = 0;
let currentQuestion = {};

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // Set EJS as the template engine
app.use(express.static("public"));

// GET home page
app.get("/", async (req, res) => {
  res.render("main.ejs");
});

// GET quiz page
app.get("/basic", async (req, res) => {
  res.render("basic.ejs");
});
app.get("/medium", async (req, res) => {
  res.render("medium.ejs");
});
app.get("/hard", async (req, res) => {
  res.render("hard.ejs");
});
app.get("/quiz/c", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM c", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});

app.get("/quiz/python", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM python", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});

app.get("/quiz/javascript", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM javascript", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/cplus", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM cplus", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/css", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM css", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/html", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM html", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/nodejs", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM nodejs", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/sql", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM sql", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/java", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM java", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/numpy", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM numpy", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/pandas", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM pandas", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});

app.get("/quiz/mediumc", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM cmedium", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/mediumcplus", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM cplusmedium", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/mediumcss", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM cssmedium", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/meidumhtml", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM htmlmedium", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/mediumnodejs", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM nodejsmedium", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/mediumsql", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM sqlmedium", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/mediumjava", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM javamedium", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/mediumnumpy", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM numpymedium", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/mediumpandas", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM pandasmedium", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/hardc", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM chard", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/hardcplus", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM cplushard", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/hardcss", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM csshard", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/hardhtml", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM htmlhard", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/hardnodejs", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM nodejshard", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/hardsql", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM sqlhard", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/hardjava", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM javahard", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/hardnumpy", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM numpyhard", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
app.get("/quiz/hardpandas", async (req, res, next) => {
  totalCorrect = 0;
  db.query("SELECT * FROM pandashard", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      return next(err);
    }
    quiz = result.rows;
    nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });
});
// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.ans.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomIndex = Math.floor(Math.random() * quiz.length);
  currentQuestion = quiz[randomIndex];
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
