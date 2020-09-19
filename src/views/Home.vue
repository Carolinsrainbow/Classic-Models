<template>
  <div id="Dashboard">
    <!-- Incorporación del Navbar  -->
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
  },
};
</script>
