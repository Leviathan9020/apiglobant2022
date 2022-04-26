//importo el modelo reserva 
import {modeloReserva} from '../models/reservaModelo.js'

class ServicioReserva{
    
    constructor(){}

    async buscarTodos(){
        let reservaciones=await modeloReserva.find()
        return reservaciones
    }

    async buscarPorId(id){
        
    }
}