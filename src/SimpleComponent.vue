<template>
  <div class="simple-component-wrapper">
    <button class="simple-component-button" @click="onClick">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: 'SimpleComponent',
  props: {
    text: String,
    message: String
  },
  methods: {
      onClick: function () {
          alert(this.message);
      },
  }
};
</script>

<style scoped>
.simple-component-wrapper {
    display: inline-block;
}
.simple-component-button {
    line-break: 2rem;
    border-radius: 0.5rem;
    border: 2px solid black;
    background-color: white;
    color: black;
}
</style>