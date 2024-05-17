<!-- Modal.vue -->
<template>
      <div class="modal_alert" v-if="visible">
            <div class="modal-content">
                  <p>{{ message }}</p>
                  <button type="button" @click="close" class="btn btn-outline-primary btn_close">Close</button>
            </div>
      </div>
</template>

<script>
export default {
      props: {
            visible: {
                  type: Boolean,
                  default: false
            },
            message: {
                  type: String,
                  default: ''
            }
      },
      methods: {
            close() {
                  this.$emit('close');
            }
      }
};
</script>

<style>
.modal_alert {
      display: block;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      /* overflow: auto; */
      /* background-color: rgba(0, 0, 0, 0.4); */
}

.modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 40px;
      border: 1px solid goldenrod;
      width: 80%;
      text-align: center;
      justify-content: center;
      display: grid;
}

.modal-content p {
      text-align: center;
      font-size: 20px;
}
</style>
