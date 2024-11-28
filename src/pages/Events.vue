<script>
import { store } from "../store.js";
export default {
  name: "Eventi",

  data() {
    return {
      store,
      currentIndex: null,
    };
  },
};
</script>

<template>
  <h1>ABRA</h1>
</template>

<style scoped lang="scss">
h1 {
  color: rgb(0, 136, 255);
}
</style>
