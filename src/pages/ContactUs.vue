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
.col {
  padding-top: 50px;
  padding-bottom: 60px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../assets/img/contact/background/flying-bird.webp);
}

.contact {
  width: 60%;
  text-align: center;

  h2 {
    padding-bottom: 35px;
  }
}

.overlay {
  width: 80%;
}

.form-container {
  text-align: center;
  color: rgba(255, 255, 255, 0.753);

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
    transform: scale(1.01);
  }
}

// Media queries
@media (max-width: 500px) {
  .contact {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;

    h1 {
      font-size: 40px;
    }
  }
}

@media (max-width: 609px) {
  .col {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
