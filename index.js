const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res, next) => {});
app.post("/api/v1/register", (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPass = req.body.pass;

  res.json({
    success: true,
    name: userName,
    email: userEmail,
    password: userPass,
  });
});

// app.post("/api/v1/register", (req, res, next) => {
//   res.send(
//     `<h1>Your Name is  </h1> ${req.body.name}
//      with email address ${req.body.email}`
//   );
//   console.log(req.body);
// });

app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});