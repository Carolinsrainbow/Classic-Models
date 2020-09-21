import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kpis: [],
    ordenes: [],
    devoluciones: [],
  },
  mutations: {

  },
  actions: {
    getDashboard() {
      axios
        .get("http://157.230.190.251/api/v1/cmodels/secure/dashboard")
        .then((data) => {
          this.kpis = data.data.kpis;
          this.ordenes = data.data.utimas_ordenes;
          this.devoluciones = data.data.ultimas_devoluciones;

          console.log(this.kpis);
          console.log(this.ordenes);
          console.log(this.devoluciones);
        });
    },
  },
  modules: {
  }
})
