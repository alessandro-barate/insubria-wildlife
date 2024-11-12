<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex">
        <!-- Logo -->
        <div class="col-30">
          <div class="logo">
            <a href="https://www.gazzetta.it/">
              <router-link :to="{ name: 'Home' }">
                <img src="../assets/img/logo/logo-doppio-cerchio.png" alt="" />
              </router-link>
            </a>
          </div>
        </div>
        <!-- END Logo -->

        <div class="col-70">
          <nav>
            <ul class="d-flex">
              <li>
                <button>esfewf</button>
              </li>
              <li>
                <button>esfewf</button>
              </li>
              <li>
                <button>esfewf</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: red;
}

.col-30 {
  width: 30%;
  background-color: yellow;
}

.logo img {
  width: 30%;
}

.col-70 {
  width: 70%;
  background-color: aqua;
}

li {
  background-color: black;
}
</style>
