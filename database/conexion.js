//importar Mongoose(permite crear base de datos y crear modelos de datos)
import mongoose from 'mongoose'

export async function conectar(){
    try{

        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectandonos A BD")

    }catch(error){
        console.log("Error en la conexion con BD"+error)
    }
}