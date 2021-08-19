<template>
  <form>
    <label>First name:</label>
    <input type="first_name" required />
    <label>Last name:</label>
    <input type="last_name" required v-model="lastname" />
    <label>Email:</label>
    <input type="email" required v-model="email" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      lastname: "",
    };
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(218, 185, 136);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #333;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  background-color: #848484;
  border-bottom: 1px solid #ddd;
  color: #333;
}
</style>
