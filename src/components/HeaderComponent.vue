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

      if (
        window.innerWidth < 1000 ||
        (window.scrollY > 50 && window.innerWidth >= 1000)
      ) {
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

    // To make the events and news container appear when a link is clicked
    containerAppearance() {
      const newsEvents = document.getElementById("news-events-container");

      newsEvents.classList.remove("display-none");
      newsEvents.classList.add("display-block");
    },

    // To make the events and news container disappear when a link is clicked
    containerDisappearance() {
      const newsEvents = document.getElementById("news-events-container");

      newsEvents.classList.remove("display-block");
      newsEvents.classList.add("display-none");
    },
  },
};
</script>

<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

// Defaulf language to Italian if no other language is selected
if (!localStorage.getItem("language")) {
  localStorage.setItem("language", "it");
}

// Loading the saved language
const savedLanguage = localStorage.getItem("language");
if (savedLanguage) {
  locale.value = savedLanguage;
}

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("language", lang);
};
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <nav class="navbar d-flex uppercase">
            <!-- Logo -->
            <div class="logo">
              <a>
                <router-link :to="{ name: 'Homepage' }">
                  <img src="/./src/assets/img/logo/double-circle.webp" alt="" />
                </router-link>
              </a>
            </div>
            <!-- END Logo -->

            <!-- Nav menu -->
            <ul class="nav-menu d-flex">
              <!-- Insubria link -->
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link">
                  <router-link :to="{ name: 'InsubriaInfo' }" class="link">
                    insubria
                  </router-link>
                </a>
              </li>
              <!-- END Insubria link -->

              <!-- Team link -->
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link">
                  <router-link :to="{ name: 'Team' }" class="link"
                    >team</router-link
                  >
                </a>
              </li>
              <!-- END team link -->

              <!-- News and events link -->
              <li
                class="nav-item container-bg"
                @mouseleave="containerDisappearance"
              >
                <div id="chevron-down">
                  <p>{{ t("nav.whatsNew") }}</p>
                  <img
                    src="../assets/img/header/nav-menu/chevron-down.svg"
                    alt=""
                    @mouseenter="containerAppearance"
                  />
                </div>
                <div
                  @mouseleave="containerDisappearance"
                  id="news-events-container"
                  class="display-none"
                >
                  <div class="events-container">
                    <a
                      @click="listDisappearance()"
                      class="nav-link"
                      id="events"
                    >
                      <router-link :to="{ name: 'Eventi' }" class="link">{{
                        t("nav.events")
                      }}</router-link>
                    </a>
                  </div>
                  <div class="news-container">
                    <a @click="listDisappearance()" class="nav-link" id="news">
                      <router-link :to="{ name: 'News' }" class="link">{{
                        t("nav.news")
                      }}</router-link>
                    </a>
                  </div>
                </div>
              </li>
              <!-- END news and events link -->

              <!-- SOS animals link -->
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link">
                  <router-link :to="{ name: 'SosAnimali' }" class="link">{{
                    t("nav.sosAnimal")
                  }}</router-link>
                </a>
              </li>
              <!-- END SOS animals link -->

              <!-- Contact us link -->
              <!-- <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link" id="contact">
                  <router-link :to="{ name: 'Contattaci' }" class="link">{{
                    t("nav.contactUs")
                  }}</router-link>
                </a>
              </li> -->
              <!-- END contact us link -->

              <!-- Support us link -->
              <li class="nav-item">
                <a @click="listDisappearance()" class="nav-link" id="support">
                  <router-link :to="{ name: 'Supportaci' }" class="link">{{
                    t("nav.supportUs")
                  }}</router-link></a
                >
              </li>
              <!-- END support us link -->
            </ul>
            <!-- END nav menu -->

            <!-- Right container -->
            <div class="right-container d-flex">
              <!-- Hamburger menu -->
              <div @click="toggleNavbarHamburger()" class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
              <!-- END hamburger menu -->

              <!-- Language container -->
              <div class="lang-container">
                <button
                  id="italian"
                  @click="changeLanguage('it')"
                  :class="{ 'active-lang': locale === 'it' }"
                >
                  <img
                    src="../assets/img/header/flags/italy-flag-round.webp"
                    alt="Bandiera italiana"
                  />
                </button>
                <button
                  id="english"
                  @click="changeLanguage('en')"
                  :class="{ 'active-lang': locale === 'en' }"
                >
                  <img
                    src="../assets/img/header/flags/uk-flag-round.webp"
                    alt="English flag"
                  />
                </button>
              </div>
              <!-- END language container -->
            </div>
            <!-- END right container -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.active-lang {
  opacity: 0.6;
  transform: scale(0.95);
}

header {
  z-index: 1000;
  position: sticky;
  background-color: #000000;
}

.container {
  position: relative;
}

.sticky-header {
  top: 0;
  z-index: 1000;
  position: sticky;
  -webkit-transition: all 0.2s ease-in-out;

  .logo {
    width: 6%;
  }
}

.navbar {
  align-items: center;
  justify-content: space-between;

  .nav-menu {
    gap: 35px;
    text-align: center;
    align-items: center;
    margin-right: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
  }

  .nav-item {
    // width: 70%;

    p {
      color: white;
      font-size: 20px;
    }
  }
}

.container-bg {
  width: 10%;
  padding-top: 23px;
  padding-bottom: 4px;
  position: relative;

  #news-events-container {
    padding: 15px;
    margin-top: 2px;
    position: absolute;
    border-radius: 10px;
    transform: translate(-13%, -5%);
    background-color: rgba(0, 0, 0, 0.85);
  }
}

.events-container {
  padding-bottom: 5px;
}

#chevron-down p:hover {
  color: #ff6a3a;
}

#chevron-down img {
  width: 19%;
  color: white;

  &:hover {
    transform: scale(1.2);
  }
}

.logo {
  width: 8%;
  margin-left: 120px;
  margin-right: 30px;

  img {
    width: 80%;
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

.right-container {
  width: 10%;
  margin-left: 0;
  margin-right: 35px;
  justify-content: end;
}

.lang-container {
  width: 100%;
  text-align: end;
  margin-left: 0px;
  margin-right: 0px;
  line-height: 26px;

  #italian,
  #english {
    width: 40%;
    border: none;
    border-radius: 50%;
    background-color: transparent;
  }

  #italian img,
  #english img {
    width: 60%;
  }

  #italian {
    margin-right: -4px;
  }

  #english {
    margin-left: -4px;
  }
}

#events,
#news,
.container-bg {
  display: none;
}

// Media queries
@media (max-width: 1156px) {
  .container-bg #news-events-container {
    transform: translate(-2vh, -0.7vh);
  }
}
@media (max-width: 500px) {
  .logo {
    margin-left: 30px;
  }
}

@media (max-width: 936px) {
  .sticky-header .logo {
    width: 10%;
  }
}

@media (max-width: 999px) {
  .row {
    position: relative;
  }

  .logo {
    width: 10%;
    margin-left: 2.4em;
  }

  .navbar .nav-menu {
    gap: 10px;
  }

  .nav-menu {
    position: absolute;
    left: -100%;
    top: 100%;
    flex-direction: column;
    width: 100%;
    text-align: center;
    transition: 1s;
    z-index: 1000;
    background-color: rgb(0, 0, 0);
  }

  #chevron-down {
    display: none;
  }

  .container-bg {
    padding-top: 0;

    #news-events-container {
      display: block;
      position: relative;
      top: 0;
      left: 0;
      padding: 0;
      margin-top: 0;
      border-radius: 0;
      background-color: transparent;
    }
  }

  .events-container {
    padding-bottom: 10px;
  }

  .news-container {
    margin-bottom: -4px;
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
    width: 100%;
    z-index: 1000;
  }

  .right-container {
    width: 17%;
    align-items: center;
    margin-right: 0;
  }

  .lang-container {
    display: flex;
    padding-left: 20px;
    align-items: center;
    margin-right: 0;

    #italian {
      margin-right: -5px;
    }

    #english {
      margin-left: -5px;
    }
  }
}

@media (max-width: 600px) {
  .right-container {
    width: 35%;
  }

  .lang-container {
    width: 100%;
    margin-left: -5px;
    margin-right: 1.5em;

    #italian,
    #english {
      width: 100%;
    }

    #italian {
      padding-right: 5px;
    }
  }
}

@media only screen and (min-width: 601px) and (max-width: 999px) {
  .right-container {
    width: 23%;
  }

  .lang-container {
    width: 100%;
    margin-left: -5px;
    margin-right: 1.5em;

    #italian,
    #english {
      width: 100%;
    }

    #italian {
      padding-right: 5px;
    }
  }
}
</style>
