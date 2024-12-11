<script>
import { store } from "../../store.js";
export default {
  name: "NewsEnglish",

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>NEWS</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: rgb(0, 136, 255);
}
</style>
