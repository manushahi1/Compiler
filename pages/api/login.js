import jwt from "jsonwebtoken";

const KEY = "bwfejhaekjfbeafdas";

export default function (req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }

  const { username, password } = req.body;

  // console.log(req.body)
  // res.end('hey wad up')
  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "admin" && password === "admin",
      },
      KEY
    ),
  });
  res.json({ status: Math.floor(Math.random() * 10) });
}
