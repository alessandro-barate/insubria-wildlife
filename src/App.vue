<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
  methods: {
    windowScroll(e) {
      if (window.scrollY > 200) {
        store.scroll = true;
      }
      if (window.scrollY < 200) {
        store.scroll = false;
      }
    },
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log("click up");
    },
  },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
  <div id="up-button">
    <button>
      <img
        src="../src/assets/img/homepage/chevron/chevron-up.svg"
        alt="Freccia in alto per scorrere la pagina in su"
        @click="scrollUp()"
      />
    </button>
  </div>
  <FooterComponent></FooterComponent>
</template>

<style scoped>
#up-button {
  right: 20px;
  bottom: 30px;
  position: fixed;

  button {
    border: none;
    background-color: transparent;

    img {
      width: 2em;
    }
  }
}
</style>
