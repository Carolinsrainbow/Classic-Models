import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dashboard: {
      kpis: [],
      ordenes: [],
      devoluciones: [],
    },

    ordenes: {
      oficinas: [],
      estados: [],
      ordenes: [],
    },

    detalle: {
      orden: [],
      cliente: [],
      productos: [],
    },
  },
  mutations: {
    GET_DASHBOARD(state, data) {
      state.dashboard.kpis = data.kpis
      state.dashboard.ordenes = data.utimas_ordenes
      state.dashboard.devoluciones = data["ultimas_devoluciones:"]
    },
    GET_OFICINAS(state, oficinas) {
      state.ordenes.oficinas = oficinas
    },
    GET_ESTADOS(state, estados) {
      state.ordenes.estados = estados
    },
    GET_ORDENES(state, ordenes) {
      state.ordenes.ordenes = ordenes
    },
    GET_DETALLE(state, data) {
      state.detalle.orden = data.orden
      state.detalle.cliente = data.cliente
      state.detalle.productos = data.productos
    }
  },
  actions: {
    getDashboard({
      commit
    }) {
      axios
        .get("http://157.230.190.251/api/v1/cmodels/secure/dashboard")
        .then((res) => {
          console.log(res.data)
          commit("GET_DASHBOARD", res.data)

        });
    },
    getOficinas({
      commit
    }) {
      axios
        .get("http://157.230.190.251/api/v1/cmodels/secure/oficinas")
        .then((res) => {
          console.log(res.data.oficinas)
          commit("GET_OFICINAS", res.data.oficinas)
        });
    },
    getEstados({
      commit
    }) {
      axios
        .get("http://157.230.190.251/api/v1/cmodels/secure/ordenes/estados")
        .then((res) => {
          commit("GET_ESTADOS", res.data.estados)
        });
    },
    getOrdenes({
      commit
    }) {
      axios
        .get("http://157.230.190.251/api/v1/cmodels/secure/ordenes")
        .then((res) => {
          commit("GET_ORDENES", res.data["ordenes:"])
        });
    },
    getDetalles({
      commit
    }) {
      axios
        .get("http://157.230.190.251/api/v1/cmodels/secure/ordenes/12345")
        .then((res) => {
          commit("GET_DETALLE", res.data)
        });
    },

  },
  modules: {}
})