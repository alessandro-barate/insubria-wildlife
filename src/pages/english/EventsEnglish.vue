<script>
import { store } from "../../store.js";
export default {
  name: "EventsEnglish",

  data() {
    return {
      store,
      currentIndex: null,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>EVENTI</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: rgb(0, 136, 255);
}
</style>
