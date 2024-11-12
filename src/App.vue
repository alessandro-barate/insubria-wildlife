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
  methods: {},
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>
