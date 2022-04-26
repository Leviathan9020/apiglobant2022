//importar Mongoose(permite crear base de datos y crear modelos de datos)
import mongoose from 'mongoose'

//Constante para crear el modelo de datos
const Schema = mongoose.Schema

//Construyo mi modelo o esquema Habitacion
const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)