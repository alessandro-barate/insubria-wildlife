<script>
export default {
  name: "HeaderComponent",

  data() {
    return {};
  },

  methods: {
    // To make the list appear when the hamburger menu is clicked
    toggleNavbarHamburger() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    },

    // To make the list disappear when a link is clicked
    listDisappearance() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    },
  },
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
          <nav class="navbar d-flex">
            <ul class="nav-menu d-flex">
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link">
                  <router-link :to="{ name: 'Insubria' }" class="link">
                    Insubria
                  </router-link>
                </a>
              </li>
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link">
                  <router-link :to="{ name: 'Team' }" class="link"
                    >Team</router-link
                  >
                </a>
              </li>
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link">esfewf</a>
              </li>
            </ul>
            <div @click="toggleNavbarHamburger()" class="hamburger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <div>
              <button>Language</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.col-30 {
  width: 30%;
  text-align: center;
  background-color: yellow;
}

.logo img {
  width: 45%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.col-70 {
  width: 70%;
  background-color: aqua;
}

.navbar {
  align-items: center;

  .nav-item {
    padding-left: 20px;
    padding-right: 20px;
  }

  .link {
    text-decoration: none;
  }
}

.nav-link {
  transition: 0.7s ease;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: black;
  -webkit-transition: all 0.7s ease-in-out;
}

// Media queries
@media (max-width: 768px) {
  .navbar {
    position: relative;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 146px;
    flex-direction: column;
    width: 100%;
    text-align: center;
    transition: 1.3s;
    background-color: red;
  }

  .hamburger {
    display: block;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-menu.active {
    left: 0;
  }
}
</style>
