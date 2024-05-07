<template>
  <form @submit.prevent="login">
    <input type="text" v-model="usernameOrEmail" placeholder="Username or Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <button type="submit">Login</button>
  </form>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      usernameOrEmail: '',
      password: ''
    };
  },
  // methods: {
  //   login() {
  //     axios.post('http://localhost:3000/login', {
  //       usernameOrEmail: this.usernameOrEmail,
  //       password: this.password
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //       // Redirect to dashboard or show success message
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       // Show error message to user
  //     });
  //   }
  // }
};
</script>
