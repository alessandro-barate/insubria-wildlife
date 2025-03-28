<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "Contattaci",
};
</script>

<script setup>
const AsyncComponent = defineAsyncComponent({
  loader: () => import("../components/ContactForm.vue"),
  loadingComponent: () =>
    "<template><h3>Caricamento in corso...</h3></template>",
});
</script>

<template>
  <Suspense>
    <AsyncComponent />
    <template #fallback>
      <h3>Caricamento in corso...</h3>
    </template>
  </Suspense>
</template>

<style scoped lang="scss">
h3 {
  text-align: center;
  margin: 50px 0;
  color: #333;
}
</style>
