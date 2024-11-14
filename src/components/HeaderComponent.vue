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
      <div class="col">
        <nav class="navbar d-flex">
          <!-- Logo -->
          <div class="logo">
            <a>
              <router-link :to="{ name: 'Home' }">
                <img src="../assets/img/logo/logo-doppio-cerchio.png" alt="" />
              </router-link>
            </a>
          </div>
          <!-- END Logo -->
          <ul class="nav-menu">
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
          <div class="right-container d-flex">
            <div @click="toggleNavbarHamburger()" class="hamburger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <div class="lang-container">
              <button>Language</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 40%;
  margin-left: 0;
  text-align: center;
  background-color: yellow;

  img {
    width: 35%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
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
  -webkit-transition: all 0.3s ease-in-out;
}

// Media queries
@media (max-width: 768px) {
  .container {
    position: relative;
  }

  .nav-menu {
    position: absolute;
    left: -100%;
    top: 100%;
    flex-direction: column;
    width: 100%;
    text-align: center;
    transition: 1s;
    background-color: red;
  }

  .hamburger {
    display: block;
    margin-left: 0;
    margin-right: 0;
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
