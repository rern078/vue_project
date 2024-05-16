<template>
  <div class="form_wrapper">
    <span @click="$emit('close')" class="close">&times;</span>
    <div class="form_container">
      <div class="title_container">
        <h2>Registration Account</h2>
      </div>
      <div class="row clearfix">
        <div class="">
          <form @submit.prevent="register">
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-user"></i></span>
              <input type="text" ref="useraccInput" v-model="useracc" name="useracc" id="useracc" placeholder="Username"
                @focus="focusInput('useracc')" />
              <em class="validation-message" v-show="focusedInput === 'useracc'">{{ useraccMessage
                }}</em>
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input type="password" ref="passwdInput" v-model="passwd" name="passwd" id="passwd" placeholder="Password"
                @focus="focusInput('passwd')" />
              <em class="validation-message" v-show="focusedInput === 'passwd'">{{ passwdMessage
                }}</em>
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input type="password" ref="repasswdInput" v-model="repasswd" name="repasswd" id="repasswd"
                placeholder="Re-type Password" />
              <em class="validation-message">{{ repasswdMessage }}</em>
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
              <input type="email" ref="emailInput" v-model="email" name="email" id="email" placeholder="Email"
                @focus="focusInput('email')" />
              <em class="validation-message" v-show="focusedInput === 'email'">{{ emailMessage }}</em>
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa-solid fa-phone"></i></span>
              <input type="text" ref="callphoneInput" v-model="callphone" name="callphone" id="callphone"
                placeholder="Call Phone" @focus="focusInput('callphone')" />
              <em class="validation-message" v-show="focusedInput === 'callphone'">{{
                callphoneMessage }}</em>
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa-solid fa-asterisk"></i></span>
              <input type="text" ref="referrall_idInput" v-model="referrall_id" name="referrall_id" id="referrall_id"
                placeholder="Referrall" @focus="focusInput('referrall_id')" />
              <em class="validation-message" v-show="focusedInput === 'referrall_id'">{{
                referrall_idMessage }}</em>
            </div>
            <div class="row clearfix">
              <div class="col_half">
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa fa-user"></i></span>
                  <input type="text" ref="firstnameInput" v-model="firstname" name="firstname" id="firstname"
                    placeholder="First Name" @focus="focusInput('firstname')" />
                  <em class="validation-message" v-show="focusedInput === 'firstname'">{{
                    firstnameMessage }}</em>
                </div>
              </div>
              <div class="col_half">
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa fa-user"></i></span>
                  <input type="text" ref="lastnameInput" v-model="lastname" name="lastname" id="lastname"
                    placeholder="Last Name" @focus="focusInput('lastname')" />
                  <em class="validation-message" v-show="focusedInput === 'lastname'">{{
                    lastnameMessage }}</em>
                </div>
              </div>
            </div>
            <div class="input_field select_option">
              <span><i aria-hidden="true" class="fa-solid fa-dollar-sign"></i></span>
              <select v-model="currency" ref="currencyInput" name="currency" id="currency">
                <option value="0" disabled>Select Currency</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="thb">THB</option>
              </select>
              <div class="select_arrow"></div>
            </div>
            <div class="input_field select_option">
              <span><i aria-hidden="true" class="fa-solid fa-building-columns"></i></span>
              <select v-model="bank" ref="bankInput" name="bank" id="bank">
                <option value="0" selected>Select Bank</option>
                <option value="aba">ABA</option>
                <option value="acleda">ACLEDA</option>
                <option value="wing">WING</option>
                <option value="cimb">CIMB</option>
              </select>
              <div class="select_arrow"></div>
            </div>
            <div class="row clearfix">
              <div class="col_half">
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa-solid fa-building-columns"></i></span>
                  <input type="text" ref="accbanknameInput" v-model="accbankname" name="accbankname" id="accbankname"
                    placeholder="Bank Account Name" @focus="focusInput('accbankname')" />
                  <em class="validation-message" v-show="focusedInput === 'accbankname'">{{
                    accbanknameMessage }}</em>
                </div>
              </div>
              <div class="col_half">
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa-solid fa-building-columns"></i></span>
                  <input type="text" ref="accbanknumberInput" v-model="accbanknumber" name="accbanknumber"
                    id="accbanknumber" placeholder="Bank Account Number" @focus="focusInput('accbanknumber')" />
                  <em class="validation-message" v-show="focusedInput === 'accbanknumber'">{{
                    accbanknumberMessage }}</em>
                </div>
              </div>
            </div>
            <div class="input_field checkbox_option">
              <input type="checkbox" id="cb1">
              <label for="cb1">I agree with terms and conditions</label>
            </div>
            <input class="button register_account" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
    <div class="alert_wrapper">
      <p class="alert" @click="$emit('show-login')">{{ $t('login') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useracc: '', passwd: '', repasswd: '', email: '', callphone: '', referrall_id: '',
      firstname: '', lastname: '', currency: '', bank: '', accbankname: '', accbanknumber: '',
    };
  },

  methods: {
    async register() {
      this.validateInput();
      // Useracc Alert
      if (this.useracc == '') {
        alert('Account Name Can not Empty! ');
        this.$refs.useraccInput.focus();
        return;
      } else if (this.useraccMessage) {
        alert("Account name should contain letter or number, length 6 to 16");
        this.$refs.useraccInput.focus();
        return;
      }
      //Password Alert
      if (!this.passwd) {
        alert('Password Can not Empty! ');
        this.$refs.passwdInput.focus();
        return;
      } else if (this.passwdMessage) {
        alert("Password should contain at least one letter, one number, and one symbol, and be at least 8 characters long.");
        this.$refs.passwdInput.focus();
        return;
      }
      // Repassword Alert
      if (!this.repasswd) {
        alert('Repassword Can not Empty! ');
        this.$refs.repasswdInput.focus();
        return;
      } if (this.repasswd !== this.passwd) {
        alert('Password do not match! ');
        this.$refs.repasswdInput.focus();
        return;
      }
      // Email Alert
      if (!this.email) {
        alert('Email Can not Empty! ');
        this.$refs.emailInput.focus();
        return;
      } else if (this.emailMessage) {
        alert('Invalid email format.xxxxxx@gmail.com');
        this.$refs.emailInput.focus();
        return;
      }
      // Callphone Alert
      if (!this.callphone) {
        alert('CallPhone Can not Empty! ');
        this.$refs.callphoneInput.focus();
        return;
      } else if (this.callphoneMessage) {
        alert('Invalid phone number format 8 to 15, contain number.');
        this.$refs.callphoneInput.focus();
        return;
      }
      // Referrall Id Alert
      if (!this.referrall_id) {
        alert('Referrall Id Can not Empty! ');
        this.$refs.referrall_idInput.focus();
        return;
      } else if (this.referrall_idMessage) {
        alert('Invalid referrall id format, length, 4 to 6, contain number.');
        this.$refs.referrall_idInput.focus();
        return;
      }
      // First name and Last name Alert
      if (!this.firstname) {
        alert('First Name Can not Empty! ');
        this.$refs.firstnameInput.focus();
        return;
      } else if (this.firstnameMessage) {
        alert('First name should contain letter or number, length 2 to 16');
        this.$refs.firstnameInput.focus();
        return;
      }
      if (!this.lastname) {
        alert('Last Name Can not Empty! ');
        this.$refs.lastnameInput.focus();
        return;
      } else if (this.lastnameMessage) {
        alert('Last name should contain letter or number, length 2 to 16');
        this.$refs.lastnameInput.focus();
        return;
      }
      // Alert Currency and Bank
      if (!this.currency) {
        alert('Please Select Currency!');
        this.$refs.currencyInput.focus();
        return;
      } if (!this.bank) {
        alert('Please Select Bank');
        this.$refs.bankInput.focus();
        return;
      }
      //Alert Acccount Name and Number
      if (!this.accbankname) {
        alert('Bank Account Name Can not Empty!');
        this.$refs.accbanknameInput.focus();
        return;
      } else if (this.accbanknameMessage) { 
        alert('Bank name should contain only letters.length is 6 to 20!.');
        this.$refs.accbanknameInput.focus();
        return;
      }if (!this.accbanknumber) {
        alert('Bank Account Number Can not Empty!');
        this.$refs.accbanknumberInput.focus();
        return;
      } else if (this.accbanknumberMessage) {
        alert('Bank number should contain exactly 16 digits.');
        this.$refs.accbanknumberInput.focus();
        return;
      }
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            useracc: this.useracc,
            email: this.email,
            passwd: this.passwd,
            repasswd: this.repasswd,
            callphone: this.callphone,
            referrall_id: this.referrall_id,
            firstname: this.firstname,
            lastname: this.lastname,
            currency: this.currency,
            bank: this.bank,
            accbankname: this.accbankname,
            accbanknumber: this.accbanknumber
          })
        });
        const data = await response.json();
        if (data.success) {
          alert('Registration successful!');
          this.clearForm();
          this.$router.push({ name: 'DashboardIndex' });
        } else {
          alert('Registration failed: ' + data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while registering.');
      }
    },
    focusInput(input) {
      this.focusedInput = input;
    },
    clearForm() {
      this.useracc = '',
        this.email = '',
        this.passwd = '',
        this.repasswd = '',
        this.callphone = '',
        this.referrall_id = '',
        this.firstname = '',
        this.lastname = '',
        this.currency = '',
        this.bank = '',
        this.accbankname = '',
        this.accbanknumber = ''
    },
    validateInput() {
      //Validate useracc
      if (/^[a-zA-Z0-9]{6,16}$/.test(this.useracc)) {
        this.useraccMessage = '';
      } else {
        this.useraccMessage = 'Account name should contain letter or number, length 6 to 16.';
      }
      //Validate passwd
      if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.passwd)) {
        this.passwdMessage = '';
      } else {
        this.passwdMessage = 'Password should contain at least one letter, one number, and one symbol, and be at least 8 characters long.';
      }
      // Validate email
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.emailMessage = '';
      } else {
        this.emailMessage = 'Invalid email format.xxxxxx@gmail.com';
      }
      // Validate callphone
      if (/^\d{8,15}$/.test(this.callphone)) {
        this.callphoneMessage = '';
      } else {
        this.callphoneMessage = 'Invalid phone number format 8 to 15, contain number.';
      }
      // Validate Referrall Id
      if (/^\d{4,6}$/.test(this.referrall_id)) {
        this.referrall_idMessage = '';
      } else {
        this.referrall_idMessage = 'Invalid referrall id format, length, 4 to 6, contain number.';
      }
      //Validate first name
      if (/^[a-zA-Z0-9]{2,16}$/.test(this.firstname)) {
        this.firstnameMessage = '';
      } else {
        this.firstnameMessage = 'First name should contain letter or number, length 2 to 16';
      }
      //Validate last name
      // /^(?=.*[a-zA-Z])(?=.*\d).*$/
      if (/^[a-zA-Z0-9]{2,16}$/.test(this.lastname)) {
        this.lastnameMessage = '';
      } else {
        this.lastnameMessage = 'Account name should contain letter or number, length 2 to 16.';
      }
      // Validate bank name (letters only)
      if (/^[a-zA-Z\s]{6,20}$/.test(this.accbankname)) {
        this.accbanknameMessage = '';
      } else {
        this.accbanknameMessage = 'Bank name should contain only letters.length is 6 to 20!.';
      }
      // Validate bank number
      if (/^\d{16}$/.test(this.accbanknumber)) {
        this.accbanknumberMessage = '';
      } else {
        this.accbanknumberMessage = 'Bank number should contain exactly 16 digits.';
      }
    }
  },
  watch: {
    useracc: 'validateInput',
    passwd: 'validateInput',
    repasswd: 'validateInput',
    email: 'validateInput',
    callphone: 'validateInput',
    referrall_id: 'validateInput',
    firstname: 'validateInput',
    lastname: 'validateInput',
    currency: 'validateInput',
    bank: 'validateInput',
    accbankname: 'validateInput',
    accbanknumber: 'validateInput',
  },
};
</script>
