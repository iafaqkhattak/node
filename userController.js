const registerUser = (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPass = req.body.password;

  res.json({
    success: true,
    name: userName,
    email: userEmail,
    password: userPass,
  });
};

module.exports = registerUser;
