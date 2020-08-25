<template>
  <div>
    <h1 :style="{'background-color': compColor}">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    compColor: String
  }
};
</script>

<style>
</style>