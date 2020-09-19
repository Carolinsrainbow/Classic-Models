<template>
  <div class="login">
  
    <h1>Login Usuario</h1>
    <br />
    <h3>Email</h3>
    <input type="text" v-model="email" />
    <br />
    <h3>Contraseña</h3>
    <input type="text" v-model="pass" />
    <br />
    <h5>Ingrese sus credenciales de usuario</h5>
    <br />
    <button class="btn btn-info" @click="login">Ingresar</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "hola@classicmodels.cl",
      pass: "hola123",
    };
  },
  methods: {
    login() {
      alert("aloja hawai");
    },
  },
};
</script>





