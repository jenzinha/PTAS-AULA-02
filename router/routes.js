const connectionDataBase = require('./config/connection');
const userController = require('./controller/userController')
const express = require('express');
const routes = require('./router/routes');

const app = express();
const port = 3003;
app.use(express.json(), routes);
app.listen(port, () => { console.log(`Run server...${port}`) });

app.get('/', (req,res) => res.send("API-USER"));

  routes.get ('/user', userController.findUser);
  routes.post ('/user', userController.createUser);
  routes.post ('./user/authenticated', userController.authenticatedUser);

  module.exports = routes;