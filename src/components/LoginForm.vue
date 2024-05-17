<template>
  <div class="form_wrapper">
    <span @click="$emit('close')" class="close">&times;</span>
    <div class="form_container">
      <div class="title_container">
        <h2>Login Account</h2>
      </div>
      <div class="row clearfix">
        <div class="">
          <form @submit.prevent="login">
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-user"></i></span>
              <input type="text" ref="useraccInput" v-model="useracc" name="useracc" id="useracc" placeholder="Username"
                @focus="focusInput('useracc')" />
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input type="password" ref="passwdInput" v-model="passwd" name="passwd" id="passwd" placeholder="Password"
                @focus="focusInput('passwd')" />
            </div>
            <input class="button login_account" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
    <div class="alert_wrapper">
      <p class="alert" @click="$emit('show-register')">{{ $t('register') }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      useracc: '',
      passwd: '',
    };
  },
  methods: {
    async login() {
      // Useracc Alert
      if (this.useracc == '') {
        this.$swal({
          text: 'Account Name Cannot Be Empty!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        this.$refs.useraccInput.focus();
        return;
      }
      //Password Alert
      if (!this.passwd) {
        this.$swal({
          text: 'Password Cannot Be Empty!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        this.$refs.passwdInput.focus();
        return;
      }
      try {
        console.log('Attempting to log in with:', this.useracc, this.passwd);
        const response = await axios.post('http://localhost:3000/login', {
          useracc: this.useracc,
          passwd: this.passwd
        });
        console.log('Login response:', response.data);
        if (response.data.success) {
          this.$swal({
            text: 'Login Successful!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        } else {
          this.$swal({
            text: 'Login failed: ' + response.data.message,
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      } catch (error) {
        this.$swal({
          text: 'An error occurred while logging in.',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        console.error('Error during login:', error);
      }
    },
    focusInput(input) {
      this.focusedInput = input;
    },
  }
};
</script>
