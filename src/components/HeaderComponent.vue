<script>
export default {
  name: "HeaderComponent",

  data() {
    return {};
  },

  created() {
    window.addEventListener("scroll", this.headerFixed);
  },

  methods: {
    // To make the header fixed to the top
    headerFixed() {
      const container = document.querySelector("header");

      if (window.scrollY > 100) {
        container.classList.add("sticky-header");
      } else {
        container.classList.remove("sticky-header");
      }
    },

    // To make the nav list appear when the hamburger menu is clicked
    toggleNavbarHamburger() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    },

    // To make the nav list disappear when a link is clicked
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
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <nav class="navbar d-flex">
            <!-- Logo -->
            <div class="logo">
              <a>
                <router-link :to="{ name: 'Home' }">
                  <img
                    src="../assets/img/logo/logo-doppio-cerchio.png"
                    alt=""
                  />
                </router-link>
              </a>
            </div>
            <!-- END Logo -->
            <ul class="nav-menu d-flex">
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link">
                  <router-link :to="{ name: 'Insubria' }" class="link">
                    INSUBRIA
                  </router-link>
                </a>
              </li>
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link">
                  <router-link :to="{ name: 'Team' }" class="link"
                    >TEAM</router-link
                  >
                </a>
              </li>
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link">
                  <router-link :to="{ name: 'Supportaci' }" class="link"
                    >SUPPORTACI</router-link
                  ></a
                >
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
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #4f674f;
}

.sticky-header {
  z-index: 100;
  top: 0;
  position: sticky;
  background-color: rgb(22, 90, 20);
  transition: all 1s ease-in;
}

.navbar {
  align-items: center;
  justify-content: space-between;

  .nav-menu {
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .nav-item {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.logo {
  width: 35%;
  margin-left: 0;
  text-align: center;

  img {
    width: 25%;
    padding-top: 10px;
    padding-bottom: 10px;

    &:hover {
      transform: scale(1.03);
    }
  }
}

.nav-link {
  transition: 0.7s ease;

  .link {
    color: white;
    font-size: 20px;

    &:hover {
      color: #ff6a3a;
    }
  }
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px auto;
  border-radius: 30%;
  background-color: white;
}

.lang-container {
  line-height: 26px;
}

// Media queries
@media (max-width: 768px) {
  .row {
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
    background-color: black;
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
    transform: translateY(6px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-menu.active {
    left: 0;
  }

  .lang-container {
    padding-left: 20px;
    margin-right: -40px;
    line-height: 26px;
  }
}
</style>
