<template>
  <header>
    <Navbar />
    <Contacts />
  </header>
</template>

<script>
import Navbar from './components/Navbar';
import Contacts from './components/Contacts.vue';

export default {
  name: 'App',
  components: {
     Navbar,
     Contacts
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

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
