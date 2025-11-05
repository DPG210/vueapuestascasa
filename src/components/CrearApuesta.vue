<template>
  <div>
    <h1>Crear</h1>
    <form action="" v-on:submit.prevent="crearApuesta">
        <label for="">Usuario</label>
        <input type="text" v-model="apuesta.usuario"><br>
        <label for="">Resultado</label>
        <input type="text" v-model="apuesta.resultado"><br>
        <label for="">Fecha</label>
        <input type="text" v-model="apuesta.fecha"><br>
        <button class="btn btn-info">Crear</button>
    </form>
  </div>
</template>

<script>
import ServiceApuestas from '@/service/ServiceApuestas';
const service= new ServiceApuestas();
export default {
    name:"CrearApuesta",
    data(){
        return{
            apuesta:{
                idApuesta:0
            }
            
        }
    },
    methods:{
        crearApuesta(){
            service.insertApuesta(this.apuesta).then(()=>{
                this.$router.push("/apuestas");
            })
        }
    }
}
</script>

<style>

</style>