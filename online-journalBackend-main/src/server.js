import express from 'express';
import cors from 'cors';
import upload from 'express-fileupload';
import formdata from 'express-form-data';

const PORT = process.env.PORT || 4040;

const app = express();

app.use(express.json());
app.use(formdata.union());
app.use(upload());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// file-upload qismi

app.post("/upload", (req, res) => {
  const file = req.body.userName;
  console.log(file);

  res.send("okay")
})

app.listen(PORT, () => console.log("Server is running http://localhost:" + PORT));