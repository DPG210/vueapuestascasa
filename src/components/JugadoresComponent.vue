<template>
  <div>
    <h1>{{id}}</h1>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Posicion</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="jugador in jugadores" :key="jugador">
                <td>{{jugador.nombre}}</td>
                <td>{{jugador.posicion}}</td>
                <td>
                    <img :src="jugador.imagen" alt="">
                </td>
                <td>
                    <router-link :to="'/jugador/'+jugador.idJugador" class="btn btn-info">Detalles</router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceApuestas from '@/service/ServiceApuestas';
const service= new ServiceApuestas();
export default {
    name:"JugadoresComponent",
    data(){
        return{
            id:"",
            jugadores:[]
        }
    },
    mounted(){
        this.id=this.$route.params.idequipo;
        service.getJugadores(this.id).then((result)=>{
            this.jugadores=result;
        })
    }
}
</script>

<style>

</style>