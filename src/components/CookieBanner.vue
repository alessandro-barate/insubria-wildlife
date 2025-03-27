<script>
export default {
  name: "CookieBanner",

  data() {
    return {
      showCookieBanner: false,
    };
  },

  created() {
    // Check if the user has already accepted the cookie
    const cookieAccepted = sessionStorage.getItem("cookieAccepted");
    if (cookieAccepted !== "true") {
      setTimeout(() => {
        this.showCookieBanner = true;
      }, 1000);
    }
  },

  methods: {
    // Function to accept the cookie
    acceptCookies() {
      // Save the acceptance in sessionStorage
      sessionStorage.setItem("cookieAccepted", "true");
      // Hide the banner
      this.showCookieBanner = false;
    },
  },
};
</script>

<template>
  <!-- Cookie panel -->
  <Transition name="fade-scale">
    <div class="cookie-zoomed-container" v-if="showCookieBanner">
      <div class="cookie-banner overlay">
        <!-- Cookie banner title -->
        <div class="cookie-banner-title">
          <h3>I cookie migliori sono quelli che restano tra noi</h3>
        </div>
        <!-- END cookie banner title -->

        <!-- Cookie banner description -->
        <div class="cookie-banner-description">
          <p>
            Come la flora e la fauna che resta nel loro habitat, i cookie che
            usiamo restano tra di noi: non collezioniamo nè cediamo a terzi
            alcun vostro dato. Usiamo solo un cookie strettamente necessario al
            funzionamento del sito, nello specifico per permettere la
            navigazione nella lingua da te selezionata.<br /><br />Continuando a
            navigare ne accetti l'utilizzo.
          </p>
        </div>
        <!-- END cookie banner description -->

        <!-- Cookie banner button -->
        <div class="cookie-banner-button">
          <button @click="acceptCookies">Ho capito</button>
        </div>
        <!-- END cookie banner button -->
      </div>
    </div>
  </Transition>
  <!-- END cookie panel -->
</template>

<style scoped lang="scss">
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.cookie-zoomed-container {
  width: 100%;
  position: fixed;
  bottom: 4%;
  left: 30%;
  z-index: 1000; /* Assicura che il banner sia sopra gli altri elementi */

  .overlay {
    background-color: rgba(0, 0, 0, 1);
  }
}

.cookie-banner {
  width: 35%;
  padding: 20px;

  &.overlay {
    width: 35%;
    padding: 40px;
    transform: none;
  }

  .cookie-banner-title,
  .cookie-banner-description {
    margin-bottom: 10px;
  }

  h3 {
    font-size: 22px;
    color: white;
  }

  p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
  }

  .cookie-banner-button {
    text-align: center;
    margin-top: 20px;

    button {
      border: none;
      color: #ff6a3a;
      font-size: 16px;
      font-weight: bold;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        color: #ff2701;
        transform: scale(1.1);
      }
    }
  }
}

/* Media queries for mobile layout */
@media (max-width: 936px) {
  .cookie-zoomed-container {
    width: 100%;
    left: 0;
    bottom: 0;
    position: fixed;

    .cookie-banner.overlay {
      width: 100%;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    .cookie-banner-title {
      text-align: center;
    }
  }
}
</style>
