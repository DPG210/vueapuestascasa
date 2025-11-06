<template>
  <div>
    <h1>Apuestas</h1>
    <table>
        <thead>
            <tr>
                <th>Usuario</th>
                <th>Resultado</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="apuesta in apuestas" :key="apuesta">
                <td>{{apuesta.usuario}}</td>
                <td>{{apuesta.resultado}}</td>
                <td>{{apuesta.fecha}}</td>
                <td>
                    <button @click="eliminarApuesta(apuesta.idApuesta)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button @click="crearApuesta()">Crear Apuesta</button>
  </div>
</template>

<script>
import ServiceApuestas from '@/service/ServiceApuestas'
const service= new ServiceApuestas()
export default {
    name:"ApuestasComponent",
    data(){
        return{
            apuestas:[],
        }
    },
    methods:{
        eliminarApuesta(id){
            service.deleteApuesta(id).then(()=>{
                service.getApuestas().then((result)=>{
                this.apuestas=result
        })
            })
        },
        crearApuesta(){
            this.$router.push("/crearapuesta");
        }
    },
    mounted(){
        service.getApuestas().then((result)=>{
            this.apuestas=result
        })
    }
}
</script>

<style>

</style>