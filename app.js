const { default: mongoose } = require('mongoose');
const moongose =require('mongoose');
const url_db="mongodb://localhost:27017"


moongose.connect(url_db)
.them(()=>{
    console.log("hola")  
})
.catch((error)=>{
    console.log("no jala")
})

const esquema = new mongoose.Schema({
    name: {
        type:String
    },
    apepat: {
        type:String
    },
    apemat: {
        type:String
    },
    numerotel: {
        type:Number
    }
})

const modelo = new mongoose.model('tabla de alumnos', esquema)
const modelop = new mongoose.model('tabla de maestros', esquema)

modelo.create({
    name: "ana",
    apepat: "salazar",
    apemat: "montiel",
    numerotel:1673828
})