<template>
  <div id="Dashboard">
    <!-- Incorporación del Navbar  -->
    <Navbar></Navbar>

    <!-- Incorporación de Breadcrum -->
    <b-breadcrumb :items="itemsBreadcrumb"></b-breadcrumb>

    <!-- Incorporación del Jumbotron -->
    <div>
      <b-jumbotron lead="Vitrina"></b-jumbotron>
    </div>
    <div id="texto">
      <h5>Bienvenido</h5>
      <h6>Bienvenido al sistema de Órdenes e Inventario de ClassicModels</h6>
    </div>

    <!-- Incorporación resumen gráfico -->
    <div clas="container">
      <div class="row">
        <div class="col-6">
          <h4>{{dashboard.kpis[0].nombre}}</h4>
          <table class="table">
            <thead>
              <tr>
                <th>{{dashboard.kpis[0].entregadas}}</th>
                <th>{{dashboard.kpis[0].pendientes}}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Órdenes Entregadas</th>
                <td>Órdenes Pendientes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="col-6">
          <h4>{{dashboard.kpis[1].nombre}}</h4>
          <table class="table">
            <thead>
              <tr>
                <th>{{dashboard.kpis[1].totales}}</th>
                <th>{{dashboard.kpis[1].atrasadas}}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Órdenes Totales</th>
                <td>Órdenes Atrasadas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Incorporación de últimos pedidos -->
    <div clas="container">
      <div class="row">
        <div class="col-6">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">N° Orden</th>
                <th scope="col">Cliente</th>
                <th scope="col">Fecha Entrega</th>
                <th scope="col">Estado</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(orden,index) in dashboard.ordenes" :key="index">
                <td>{{orden.num_orden}}</td>
                <td>{{orden.cliente}}</td>
                <td>{{orden.fecha_entrega}}</td>
                <td>{{orden.estado}}</td>
                <td>
                  <b-button variant="outline-primary" @click="detalles">Ver detalle</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-6">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">N° Orden</th>
                <th scope="col">Cliente</th>
                <th scope="col">Fecha Devolución</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(devolucion,index) in dashboard.devoluciones" :key="index">
                <td>{{devolucion.num_orden}}</td>
                <td>{{devolucion.cliente}}</td>
                <td>{{devolucion.fecha_entrega}}</td>
                <td>
                  <b-button variant="outline-primary">Ver Detalle</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
import Navbar from "@/components/Navbar.vue";
import dashboard from "@/data/dashboard.json";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    Navbar,
  },
  data() {
    return {
      itemsBreadcrumb: [
        {
          text: "Home",
          href: "/",
        },
      ],
    };
  },
  computed:{
    ...mapState(["dashboard"])
  },

  methods: {
...mapActions(["getDashboard"]),
    detalles() {
      this.$router.push({ name: "Detalle" });
    },
  },
  created() {
    this.getDashboard();
  },
};
</script>

<style>
#texto {
  text-align: left;
}

#grafico {
  display: grid;
}
</style>
