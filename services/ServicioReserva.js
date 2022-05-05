//importo el modelo reserva 
import {modeloReserva} from '../models/reservaModelo.js'

export class ServicioReserva{
    
    constructor(){}

    async buscarTodos(){
        let reservaciones=await modeloReserva.find()
        return reservaciones
    }

    async buscarPorId(id){
        let reservacion=await modeloHabitacion.findById(id)
        return reservacion
    }

    async registra(habitacion){
        let reservacionNueva=new modeloHabitacion(habitacion)
        return await reservacionNueva.save()
    }

    async editar(id,habitacion){

        return await modeloReserva.findByIdAndUpdate(id,habitacion)
    }

    async eliminar(id){
        return await modeloHabitacion.findOneAndDelete(id)
    }

}