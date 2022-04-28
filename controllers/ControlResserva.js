import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReservacion{

    constructor(){}

    async insertar(request,response){    

        let reservacion=new ServicioReserva()
        let datosPeticion=request.body //Recibo datos BODY

        try{
            await reservacion.insertar(datosPeticion)
        
            response.status(200).json({
            mensaje:"exito en el ingreso de datos",
            datosIngresados:[],
            estado:true
        })

        }catch(error){
                response.status(400).json({
                mensaje:"fallo en el ingreso de datos",
                datosIngresados:[],
                estado:false
            })
        }       
    }

    async buscarTodos(request,response){
        let reservacion=new ServicioReserva()
        try{
                response.status(200).json({
                mensaje:"exito buscando la información",
                datos:await reservacion.buscarTodos(),
                estado:true
            })
        }catch(error){
                response.status(400).json({
                mensaje:"fallo buscando la información",
                datos:[],
                estado:false
            })
        }       
    }

    async buscarPorId(request,response){
            let reservacion=new ServicioReserva()
            let id=request.params.id //El id que llega por la URL

            try{
                    response.status(200).json({
                    mensaje:"exito buscando reservacion por id",
                    datos:await reservacion.buscarPorId(id),
                    estado:true
                })

            }catch(error){
                    response.status(400).json({
                    mensaje:"fallo buscando reservacion por id",
                    datos:[],
                    estado:false
                })
            }           
            
    }

    async editar(request,response){
            let reservacion=new ServicioReserva()
            let id=request.params.id //El id que llega por la URL
            let datosPeticion=request.body //Recibo datos BODY

            try{                
            await reservacion.editar(id.datosPeticion)

            response.status(200).json({
            mensaje:"exito editando reservacion por id",
            datos:"Datos del id: "+id,
            estado:true
        })

            }catch(error){
                response.status(200).json({
                mensaje:"fallo editando reservacion por id",
                datos:[],
                estado:false
                })       
            }
   }

    async eliminar(request,response){
            let reservacion=new ServicioReserva()
            let id=request.params.id //El id que llega por la URL

            try{
            await reservacion.eliminar(id)

            response.status(200).json({
            mensaje:"exito eliminando reservacion por id",
            datos:"Datos del id: "+id,
            estado:true
        })

            }catch(error){
                    response.status(400).json({
                    mensaje:"fallo eliminado de reservacion por id",
                    datos:[],
                    estado:false
                })
            }

            

    }

}