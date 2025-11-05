import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import EquipoComponent from './components/EquipoComponent.vue';
import JugadoresComponent from './components/JugadoresComponent.vue';
import DetallesJugador from './components/DetallesJugador.vue';
import ApuestasComponent from './components/ApuestasComponent.vue';
import CrearApuestas from './components/CrearApuesta.vue';



const myRouter=[
    {path:"/", component:HomeComponent},
    {path:"/equipo/:idequipo?", component:EquipoComponent},
    {path:"/jugadores/:idequipo", component:JugadoresComponent},
    {path:"/jugador/:idjugador", component:DetallesJugador},
    {path:"/apuestas", component:ApuestasComponent},
    {path:"/crearapuesta", component:CrearApuestas}
]

const router= createRouter({
    history:createWebHistory(),
    routes:myRouter
})
export default router;