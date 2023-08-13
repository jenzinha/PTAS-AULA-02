const connectionDataBase = require('./config/connection');
const express = require('express');
const routes = require('./router/routes');
const app = express();
const port = 3003;
app.use(express.json(), routes);
app.listen(port, () => { console.log(`Run server...${port}`) });


app.get('/', (req,res) => res.send("API-USER"));

//app.post('/user', userController.createUser);
//pp.get('/user', userController.findUser);

//app.delete('/user', userController.deleteUser);

//app.put('/user', userController.updateUser);



