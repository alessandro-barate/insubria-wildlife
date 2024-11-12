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
            <a>
              <router-link :to="{ name: 'Home' }">
                <img src="../assets/img/logo/logo-doppio-cerchio.png" alt="" />
              </router-link>
            </a>
          </div>
        </div>
        <!-- END Logo -->

        <div class="col-70 d-flex">
          <nav>
            <ul class="d-flex">
              <li>
                <a>
                  <router-link :to="{ name: 'Insubria' }">
                    Cos'è Insubria
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Team' }">Team</router-link>
                </a>
              </li>
              <li>
                <a>esfewf</a>
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
  width: 70%;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.col-70 {
  width: 70%;
  background-color: aqua;

  li a {
    padding: 20px;
  }
}
</style>
