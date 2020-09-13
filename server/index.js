const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoutes = require('./routes/users');

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    test: 'working',
  });
});

app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});