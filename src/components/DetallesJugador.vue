<template>
  <div>
    <h1>{{jugador.nombre}}</h1>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Posicion</th>
                <th>Pais</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{jugador.nombre}}</td>
                <td>{{jugador.posicion}}</td>
                <td>{{jugador.pais}}</td>
                <td>
                    <img :src="jugador.imagen" style="width:100px; height:100px" alt="">    
                </td>
            </tr>
        </tbody>
    </table>
    <button @click="volverAtras()">Volver</button>
  </div>
</template>

<script>
import ServiceApuestas from '@/service/ServiceApuestas';
const service=new ServiceApuestas();
export default {
    name:"DetallesJugador",
    data(){
        return{
            id:"",
            jugador:[]
        }
    },
    methods:{
        volverAtras(){
            this.$router.push("/jugadores/"+this.jugador.idEquipo)
        }
    },
    mounted(){
        this.id=this.$route.params.idjugador;
        service.getDetalles(this.id).then((result)=>{
            this.jugador=result;
        })
    }
}
</script>

<style>

</style>