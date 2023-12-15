const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3000;
const taskController = require('./controllers/taskController')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/task', taskController.getTasks, (req,res) => {
    res.status(200).json(res.locals.task);
})

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/

module.exports = app;