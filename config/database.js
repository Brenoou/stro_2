const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://coone:Mobile45@fiaptecnico.f3tko.mongodb.net/test')
}

module.exports = conn 
