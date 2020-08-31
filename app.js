const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const User = require('./models/User');
const { sequelize } = require('./models/User');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
})

app.post('/register', async (req, res) => {
    try {
    await sequelize.sync();
    const user = User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age
    });
    res.json(user.firstName);
} catch(err) {
    res.json({
        message: err
    });
}



})

app.listen(port, () => {
  console.log(`app started on http://localhost:${port}`);
})