const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRouter");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
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
