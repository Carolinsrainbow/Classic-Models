<template>
  <div>
    <!-- Incorporación del Navbar -->
    <Navbar></Navbar>

    <!-- Incorporación del Breadcrumb -->
    <b-breadcrumb :items="itemsBreadCrumb"></b-breadcrumb>

    <!-- Incorporación del tabs -->
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="General" active>
          <b-container class="bv-example-row">
            <b-row>
              <b-col class="left-align">Nº Orden</b-col>
              <b-col class="left-align" cols="8">{{detalle.orden.num_orden}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Monto Orden</b-col>
              <b-col class="left-align" cols="8">{{detalle.orden.monto}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Cant. Productos</b-col>
              <b-col class="left-align" cols="8">{{detalle.orden.cant_productos}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Fecha Entrega</b-col>
              <b-col class="left-align" cols="8">
                {{new Date(detalle.orden.fecha_entrega).getDate()}}-
                {{new Date(detalle.orden.fecha_entrega).getMonth()}}-
                {{new Date(detalle.orden.fecha_entrega).getFullYear()}}
              </b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Vendedor</b-col>
              <b-col class="left-align" cols="8">{{detalle.orden.vendedor}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Estado</b-col>
              <b-col class="left-align" cols="8">{{detalle.orden.avance_preparacion}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Avance Preparación</b-col>
              <b-col class="left-align" cols="8">{{detalle.orden.estado}}</b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="Datos Cliente">
          <b-container class="bv-example-row">
            <b-row>
              <b-col class="left-align">Nombre</b-col>
              <b-col class="left-align" cols="8">{{detalle.cliente.nombre}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Rut</b-col>
              <b-col
                class="left-align"
                cols="8"
              >{{detalle.cliente.rut_n}}-{{detalle.cliente.rut_dv}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Dirección Entregada</b-col>
              <b-col class="left-align" cols="8">{{detalle.cliente.direccion_entrega}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Contacto</b-col>
              <b-col class="left-align" cols="8">{{detalle.cliente.contacto}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Fono</b-col>
              <b-col class="left-align" cols="8">{{detalle.cliente.fono}}</b-col>
            </b-row>
            <b-row>
              <b-col class="left-align">Email</b-col>
              <b-col class="left-align" cols="8">{{detalle.cliente.email}}</b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="Productos">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Cod. Producto</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio Unit</th>
                <th scope="col">Cant. Pedido</th>
                <th scope="col">Cumplimiento</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(producto, index) in detalle.productos" :key="index">
                <td>{{ producto.cod_prod }}</td>
                <td>{{ producto.descripcion }}</td>
                <td>{{ producto.precio_unit }}</td>
                <td>{{ producto.cant_pedido }}</td>
                <td>{{ producto.cant_pickeado }}</td>
              </tr>
            </tbody>
          </table>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import detalle_orden from "@/data/detalle_orden.json";
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Detalle",
  components: {
    Navbar,
  },
  data() {
    return {
      itemsBreadCrumb: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Monitor de Órdenes",
          href: "/",
        },
        {
          text: "Detalle Orden",
          href: "/",
        },
      ],
    };
  },
  computed: {
    ...mapState(["detalle"]),
  },
  methods: {
    ...mapActions(["getDetalles"]),
  },
  created() {
    this.getDetalles();
  },
};
</script>
