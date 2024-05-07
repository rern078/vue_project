<template>
  <form @submit.prevent="register">
    <input type="text" v-model="username" placeholder="Username" required>
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <button type="submit">Register</button>
  </form>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    // register() {
    //   axios.post('http://localhost:3000/api/register', {
    //     username: this.username,
    //     email: this.email,
    //     password: this.password
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //     // Redirect to login page or show success message
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     // Show error message to user
    //   });
    // }
  }
};
</script>
