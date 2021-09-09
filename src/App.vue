<template>
  <header>
    <Navbar />
    <router-link to="/Drum Book"></router-link>
    <router-link to="/"></router-link>
    <router-link to="/"></router-link>
    <router-link to="/Contact"></router-link>
  <Footer />
  </header>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Dropdown from "./views/Dropdown";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(92, 105, 105);
}

header {
  width: 100vw;
  background-color: rgb(218, 185, 136);
  color: #000000;
  padding: 15px;
}
</style>
