const express = require('express');
const notes = require("./data/notes");
const app = express();
const dotenv = require('dotenv');
const connectdb = require('./config/db');

dotenv.config();

connectdb();
app.get("/", (req, res) => {
    res.send("API IS RUNNING");
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
});

const PORT = process.env.PORT || 8000;

//get is used to get the data from backend to the frontend 
app.listen(PORT, console.log(`server started at ${PORT}`));