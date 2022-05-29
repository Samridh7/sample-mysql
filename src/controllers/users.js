const { Users } = require("../db/models");
const { genRandomUsername } = require("../util/genRandomUser");

async function createAnonUser(){
   const user = await Users.create({
        name: genRandomUsername()
    })
    return user
}

async function getUserById(id){
    return await Users.findOne({where : {id} });
}

async function getUserByName(name){
    return await Users.findOne({where: {name} });
}

module.exports = {
    createAnonUser,
    getUserById,
    getUserByName
}