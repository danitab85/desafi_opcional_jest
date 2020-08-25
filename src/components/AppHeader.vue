<template>
  <div>
    <button data-test="button" v-show="loggedIn">Logout</button>
    <button data-test="button2" @click="showMessage">Mostrar mensaje</button>
    <p>{{secretMessage}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loggedIn: false,
      secretMessage: ""
    };
  },
  props: {
    msg: {
      type: String,
      default: "Hola Inmundo"
    }
  },
  methods: {
    showMessage() {
      this.secretMessage = `Este es el mensaje ${this.msg}`;
    }
  }
};
</script>