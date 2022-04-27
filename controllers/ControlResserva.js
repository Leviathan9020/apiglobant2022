export class ControladorReservacion{

    constructor(){}

    insertar(request,response){ 
        let datosPeticion=request.body //Recibo datos BODY
        response.status(200).json({
            mensaje:"exito en el ingreso de datos",
            datosIngresados:datosPeticion,
            estado:true
        })

    }

    buscarTodos(request,response){
        let datosPrueba=[{nombre:"hab1",precio:300000},{nombre:"hab2",precio:400000}] //quitar cuando tenagngomos BD
        response.status(200).json({
            mensaje:"exito buscando la información",
            datos:datosPrueba,
            estado:true
        })
    }

    buscarPorId(request,response){
        let id=request.params.id //El id que llega por la URL
        response.status(200).json({
            mensaje:"exito buscando reservacion por id",
            datos:"Datos del id: "+id,
            estado:true
        })
    }

    editar(request,response){
        let id=request.params.id //El id que llega por la URL
        let datosPeticion=request.body //Recibo datos BODY
        response.status(200).json({
            mensaje:"exito editando reservacion por id",
            datos:"Datos del id: "+id,
            estado:true
        })
    }

    eliminar(request,response){
        let id=request.params.id //El id que llega por la URL
        response.status(200).json({
            mensaje:"exito eliminando reservacion por id",
            datos:"Datos del id: "+id,
            estado:true
        })

    }

}