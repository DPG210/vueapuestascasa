import Global from "@/Global";
import axios from "axios";

export default class ServiceApuestas{
    getEquipos(){
        return new Promise(function (resolve){
            var request="api/equipos";

            axios.get(Global.urlApuestas+request).then(response=>{
                resolve(response.data)
            })
        })
    }
    getEquipo(id){
        return new Promise (function (resolve){
            var request="api/equipos/"+id

            axios.get(Global.urlApuestas+request).then(response=>{
                resolve(response.data)
            })
        })
    }
    getJugadores(idequipo){
        return new Promise (function(resolve){
            var request= "api/jugadores/jugadoresequipos/"+idequipo;

            axios.get(Global.urlApuestas+request).then(response=>{
                resolve(response.data)
            })
        })
    }
    getDetalles(id){
        return new Promise (function(resolve){
            var request="api/jugadores/"+id;

            axios.get(Global.urlApuestas+request).then(response=>{
                resolve(response.data)
            })
        })
    }
    getApuestas(){
        return new Promise(function(resolve){
            var request="api/apuestas";

            axios.get(Global.urlApuestas+request).then(response=>{
                resolve(response.data)
            })
        })
    }
    insertApuesta(apuesta){
        return new Promise (function(resolve){
            var request="api/jugadores";

            axios.post(Global.urlApuestas+request,apuesta).then(response=>{
                resolve(response)
            })
        })
    }
    deleteApuesta(id){
        return new Promise(function(resolve){
            var request="api/apuestas/"+id;

            axios.delete(Global.urlApuestas+request).then(response=>{
                resolve(response);
            })
        })
    }
}