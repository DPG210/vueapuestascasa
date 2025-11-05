<template>
  <div>
    <h1>Equipo {{id}}</h1>
    <div>
        <img :src="equipo.imagen" style="width:50px; height:50px">
        <p>{{equipo.descripcion}}</p>
        <button @click="volverHome()">Volver</button>
        <button @click="verJugadores(equipo.idEquipo)">Jugadores</button>
    </div>
  </div>
</template>

<script>
import ServiceApuestas from '@/service/ServiceApuestas';
const service= new ServiceApuestas();
export default {
    name:"EquipoComponent",
    data(){
        return{
            equipo:[],
            id:""
        }
    },
    methods:{
        volverHome(){
            this.$router.push("/");
        },
        verJugadores(id){
            this.$router.push("/jugadores/"+id);
        }
    },
    mounted(){
        this.id=this.$route.params.idequipo
    service.getEquipo(this.id).then((result)=>{
        this.equipo=result
    })
    },
    watch:{
        '$route.params.idequipo' (nextVal,oldVal){
            if(nextVal!= oldVal){
                this.id=this.$route.params.idequipo
            }
        }
    }
}
</script>

<style>

</style>