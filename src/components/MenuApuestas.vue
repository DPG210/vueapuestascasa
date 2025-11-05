<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light m-0 p-2 fixed-top">
    <div class="container-fluid">
      <!-- Marca o título -->
      <a class="navbar-brand" href="#">Navbar</a>

      <!-- 🔹 Botón hamburguesa -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 🔹 Contenido colapsable -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/apuestas">Apuestas</router-link>
          </li>

          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Equipos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
              <li v-for="equipo in equipos" :key="equipo">
                <router-link :to="'/equipo/'+equipo.idEquipo">{{equipo.nombre}}</router-link>
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceApuestas from './../service/ServiceApuestas';
const service=new ServiceApuestas();
    export default{
        name:"MenuDepartamentos",
        data(){
            return{
                equipos:[]
            }
        },
        mounted(){
            service.getEquipos().then((result)=>{
                this.equipos=result
            })
        }
    }
</script>