<script>
import { store } from "../store.js";
export default {
  name: "Eventi",

  data() {
    return {
      store,
      showZoom: false,
      currentIndex: null,
      // showDescription: false,
    };
  },

  methods: {
    toggleZoom(index) {
      this.showZoom = !this.showZoom;
      this.currentIndex = index;
      document.body.style.overflow = this.showZoom ? "hidden" : "";
    },
  },

  // if (!this.store.events.description) {
  //   this.showDescription = true;
  // }
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
  <div class="container">
    <div class="row">
      <div class="col overlay">
        <section>
          <h1 class="uppercase">{{ t("nav.events") }}</h1>
          <p>
            {{ t("events.firstParagraph") }}
          </p>
          <div class="big-events-container d-flex">
            <div
              v-for="(event, index) in store.events"
              :key="index"
              class="events-container"
            >
              <div class="event-card">
                <h2 class="capitalize">{{ event.title }}</h2>
                <p>{{ event.date }}</p>
                <figure @click="toggleZoom(index)">
                  <img
                    :src="event.poster"
                    :alt="t('events.' + index + '.alt')"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <!-- Zoomed poster container -->
  <div v-if="showZoom" class="zoomed-container">
    <div class="zoom-close-btn" @click.stop="toggleZoom">✕</div>
    <div class="zoomed-event-container">
      <div class="image-column">
        <figure>
          <img
            :src="store.events[currentIndex].poster"
            :alt="t('events.' + currentIndex + '.alt')"
            loading="lazy"
            @click.stop
          />
        </figure>
      </div>
      <div class="event-description">
        <p v-html="$sanitize(store.events[currentIndex].description)"></p>
      </div>
    </div>
  </div>
  <!-- END zoomed poster container -->
</template>

<style scoped lang="scss">
.container {
  text-align: center;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/img/events/background/little-birds.webp);
}

.row {
  padding-top: 50px;
  padding-bottom: 50px;
}

.col {
  padding-bottom: 60px;
}

.overlay {
  width: 80%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
    transform: scale(1.01);
  }
}

section {
  width: 80%;
}

.events-container {
  width: 50%;
  margin-top: 40px;
}

.image-column {
  width: 50%;
}

.event-card {
  width: 100%;
  margin: 0;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  figure img {
    width: 60%;
    cursor: url(../assets/img/cursor/binoculars-icon.svg), zoom-in;
  }
}

.zoomed-container img {
  width: 80%;
  max-height: 80vh;
  object-fit: contain;
}

.zoomed-container .zoom-close-btn {
  position: absolute;
  top: 20px;
  left: 30px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    transform: scale(1.2);
  }
}

.zoomed-event-container {
  width: 85%;
  display: flex;
}

.event-description {
  width: 50%;
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
}

@media (max-width: 936px) {
  .big-events-container {
    display: block;

    .events-container {
      width: 90%;
    }

    figure img {
      width: 100%;
    }
  }

  .image-column {
    width: 100%;
  }

  .zoomed-event-container {
    width: 85%;
    display: block;
    padding-top: 150px;

    .event-description {
      width: 100%;
      padding-top: 20px;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .zoomed-container {
    text-align: center;
    overflow: auto;

    img {
      width: 100%;
    }

    .zoom-close-btn {
      top: 10px;
      left: 10px;
    }
  }
}
</style>
