<template>
  <div>
    <!-- Incorporación del Navbar -->
    <Navbar></Navbar>

    <!-- Incorporación del Breadcrum -->
    <b-breadcrumb :items="items"></b-breadcrumb>

    <!-- Incorporación de caja de opciones  -->
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h3>Oficina</h3>
          <select>
            <option v-for="(oficina,index) in ordenes.oficinas" :key="index">{{oficina.name}}</option>
          </select>
        </div>
        <div class="col-3">
          <h3>Estado</h3>
          <select>
            <option v-for="(estado,index) in ordenes.estados" :key="index">{{estado.name}}</option>
          </select>
        </div>
        <div class="col-3">
          <h3>Fecha de Entrada</h3>
        </div>
        <div class="col-3">
          <b-button variant="info">Info</b-button>
        </div>
      </div>
    </div>

    <!-- Incorporación de tabla -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">N° Orden</th>
          <th scope="col">Cliente</th>
          <th scope="col">Monto Orden</th>
          <th scope="col">Cant. Productos</th>
          <th scope="col">Fecha Entrega</th>
          <th scope="col">Avance Preparación</th>
          <th scope="col">Estado</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(orden,index) in ordenes.ordenes" :key="index">
          <td>{{orden.num_orden}}</td>
          <td>{{orden.cliente}}</td>
          <td>{{orden.monto}}</td>
          <td>{{orden.cant_productos}}</td>
          <td>
            {{new Date(orden.fecha_entrega).getDate()}}/
            {{new Date(orden.fecha_entrega).getMonth()}}/
            {{new Date(orden.fecha_entrega).getFullYear()}}
          </td>
          <td>{{orden.avance_preparacion}}</td>
          <td>{{orden.estado}}</td>
          <td>the Bird</td>
          <td>
            <button type="button" class="btn btn-outline-info" @click="detalles">Ver Detalle</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
// import oficinas from "@/data/oficinas.json";
// import estados from "@/data/estados.json";
// import ordenes from "@/data/ordenes.json";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Ordenes",
  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Monitor de Órdenes",
          href: "/ordenes",
        },
      ],
    };
  },
  computed: {
    ...mapState(["ordenes"]),
  },

  methods: {
    ...mapActions(["getOficinas", "getEstados", "getOrdenes"]),
    detalles() {
      this.$router.push({ name: "Detalle" });
    },
    // getOficinas() {
    //   axios
    //     .get("http://157.230.190.251/api/v1/cmodels/secure/oficinas")
    //     .then((data) => {
    //       this.oficinas = data.data.oficinas;
    //       //   console.log(oficinas);
    //     });
    // },
    // getEstados() {
    //   axios
    //     .get("http://157.230.190.251/api/v1/cmodels/secure/ordenes/estados")
    //     .then((data) => {
    //       this.estados = data.data["estados"]; // data.data.estados
    //       //   console.log(estados);
    //     });
    // },
    // getOrdenes() {
    //   axios
    //     .get("http://157.230.190.251/api/v1/cmodels/secure/ordenes")
    //     .then((data) => {
    //       this.ordenes = data.data["ordenes:"];
    //       console.log(data.data);
    //     });
    // },
  },
  created() {
    this.getOficinas();
    this.getEstados();
    this.getOrdenes();
  },
};
</script>