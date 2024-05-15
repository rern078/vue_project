<template>
      <div class="modal-overlay" v-if="visible">
            <div class="modal">
                  <div class="modal-header">
                        <h3>{{ title }}</h3>
                        <button @click="close">&times;</button>
                  </div>
                  <div class="modal-body">
                        <p>{{ message }}</p>
                  </div>
                  <div class="modal-footer">
                        <button @click="close">OK</button>
                  </div>
            </div>
      </div>
</template>
<script>
export default {
      props: {
            title: String,
            message: String,
            visible: Boolean
      },
      methods: {
            close() {
                  this.$emit('close');
            }
      }
}
</script>
<style scoped>
.modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
}

.modal {
      background: white;
      padding: 20px;
      border-radius: 5px;
      width: 300px;
}

.modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
}

.modal-body {
      margin: 20px 0;
}

.modal-footer {
      text-align: right;
}

button {
      background: #007bff;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
}

button:hover {
      background: #0056b3;
}
</style>