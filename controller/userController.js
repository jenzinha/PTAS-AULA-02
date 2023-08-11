const { where } = require('sequelize');
const User = require('../model/user');

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    await User.create({
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
}

const findUser = async (req, res) => {
    const users = await User.findAll();
    try{
        return res.json(users);
    } catch (error){
        res.status(404).json("erro na busca");
    };
}
const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await User.destroy({
        where:{
            id:id
        }
    })
}

const updateUser = async (req, res) => {
    const users = await 
     User.update(
        {
        name: name,
        password: password,
        email: email
        },
        {
        where:{
            id: id
        }
        });    
}



module.exports = { createUser, findUser, deleteUser, updateUser };