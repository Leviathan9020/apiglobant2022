import mongoose from 'mongoose';

const Schema = mongoose.Schema

const Reserva=new Schema({
    fechain:{
        type:Date,
        required:true
    },
    fechasalida:{
        type:Date,
        required:true
    },
    nombrecliente:{
        type:String,
        required:true
    },
    cedulacliente:{
        type:String,
        required:true
    },
    costo:{
        type:Number,
        reqired:true
    }   
    
   
})
export const modelReserva=mongoose.model('reserva',Reserva)