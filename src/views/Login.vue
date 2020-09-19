<template>
  <div class="login">
    <h1>Ingresa tus datos</h1>
<input type="text" v-model="email">
<br>
<input type="text" v-model="pass">
<br>
<button>Ingresa </button>
    </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      email:"hola@classicmodels.cl",
      pass:"hola123"
    }
  }
}
</script>
