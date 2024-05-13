<template>
  <div class="form_wrapper">
    <span @click="showPopup = false" class="close">&times;</span>
    <div class="form_container">
      <div class="title_container">
        <h2>Registration Account</h2>
      </div>
      <div class="row clearfix">
        <div class="">
          <form>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-user"></i></span>
              <input type="text" name="useracc" id="useracc" placeholder="Username" required />
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input type="password" name="passwd" id="passwd" placeholder="Password" required />
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input type="password" name="repasswd" id="repasswd" placeholder="Re-type Password" required />
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa-solid fa-phone"></i></span>
              <input type="text" name="callphone" id="callphone" placeholder="Call Phone" required />
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa-solid fa-asterisk"></i></span>
              <input type="text" name="referrall_id" id="referrall_id" placeholder="Referrall" required />
            </div>
            <div class="row clearfix">
              <div class="col_half">
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa fa-user"></i></span>
                  <input type="text" name="firstname" id="firstname" placeholder="First Name" />
                </div>
              </div>
              <div class="col_half">
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa fa-user"></i></span>
                  <input type="text" name="lastname" id="lastname" placeholder="Last Name" required />
                </div>
              </div>
            </div>
            <!-- <div class="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1">
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2">
              <label for="rd2">Female</label>
            </div> -->
            <div class="input_field select_option">
              <span><i aria-hidden="true" class="fa-solid fa-dollar-sign"></i></span>
              <select name="currency" id="currency">
                <option>Select Currency</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="thb">THB</option>
              </select>
              <div class="select_arrow"></div>
            </div>
            <div class="input_field select_option">
              <span><i aria-hidden="true" class="fa-solid fa-building-columns"></i></span>
              <select name="bank" id="bank">
                <option>Select Bank</option>
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
                  <input type="text" name="accbankname" id="accbankname" placeholder="Bank Account Name" />
                </div>
              </div>
              <div class="col_half">
                <div class="input_field">
                  <span><i aria-hidden="true" class="fa-solid fa-building-columns"></i></span>
                  <input type="text" name="accbanknumber" id="accbanknumber" placeholder="Bank Account Number"
                    required />
                </div>
              </div>
            </div>
            <div class="input_field checkbox_option">
              <input type="checkbox" id="cb1">
              <label for="cb1">I agree with terms and conditions</label>
            </div>
            <div class="input_field checkbox_option">
              <input type="checkbox" id="cb2">
              <label for="cb2">I want to receive the newsletter</label>
            </div>
            <input class="button" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>
