require('dotenv').config();
const express = require('express');
const userRouter = require('./router/user');
const app = express();
const { port } = require('./config');
const cors = require('cors')
const bodyParser = require('body-parser');
const { sequelize } = require('./data/index'); 

(async () => {
    await sequelize?.sync({ force: false });
});

app.use(express.json()) 
app.use(cors())
app.use('/api/user', userRouter)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4000, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;