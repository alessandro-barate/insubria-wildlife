<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",

  data() {
    return {
      visible: false,
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
  methods: {
    windowScroll(event) {
      this.visible = window.scrollY > 300 ? true : false;
    },

    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  created() {
    window.addEventListener("scroll", this.windowScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.windowScroll);
  },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
  <div id="up-button">
    <button aria-label="Torna in alto">
      <img
        v-show="visible"
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
  right: 2%;
  bottom: 6%;
  position: fixed;

  button {
    border: none;
    background-color: transparent;

    img {
      width: 2em;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
}

/* Media queries */
/* Mobile layout */
@media (max-width: 936px) {
  #up-button {
    right: 7px;
    bottom: 53px;
  }
}

/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
</style>
