<script>
export default {
  name: "FooterComponent",
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
  <footer>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="main-container d-flex">
            <!-- Logo footer -->
            <div class="logo-footer-container d-flex">
              <img
                class="footer-logo"
                src="../assets/img/logo/bird-only.webp"
                alt="Insubria logo"
              />
            </div>
            <!-- END logo footer -->

            <!-- Upper right section -->
            <div class="right-details d-flex">
              <!-- Upper section -->
              <div class="upper-section d-flex">
                <!-- Address section -->
                <div class="col-50 address d-flex">
                  <!-- GPS image -->
                  <div class="location-container d-flex">
                    <img
                      src="../assets/img/footer/location-icon.webp"
                      alt="Logo GPS"
                    />
                  </div>
                  <!-- END GPS image -->

                  <!-- Address container -->
                  <address class="address-container">
                    <h3>Insubria</h3>
                    <a id="address" href=""> Via Roma 20, 20004, Arluno </a>
                    <h3 id="pi">{{ t("footer.vat") }}</h3>
                    <span>93054540153</span>
                  </address>
                  <!-- END address container -->
                </div>
                <!-- END address section -->

                <!-- Socials container -->
                <div class="col-50 contacts-socials">
                  <div class="socials">
                    <h3>{{ t("footer.followUs") }}</h3>
                    <div class="buttons-container d-flex">
                      <!-- Facebook link -->
                      <div class="fb-container">
                        <a
                          href="https://www.facebook.com/people/Insubria-Wildlife-APS/61568161029341/"
                          target="_blank"
                        >
                          <img
                            src="../assets/img/footer/facebook-icon.svg"
                            alt="Facebook logo"
                            id="fb-logo"
                          />
                        </a>
                      </div>
                      <!-- END Facebook link -->

                      <!-- Instagram link -->
                      <div class="ig-container">
                        <a
                          href="https://www.instagram.com/insubria_wildlife/"
                          target="_blank"
                        >
                          <img
                            src="../assets/img/footer/instagram-icon.svg"
                            alt="Instagram logo"
                            id="ig-logo"
                          />
                        </a>
                      </div>
                      <!-- END Instagram link -->
                    </div>
                  </div>
                </div>
                <!-- END socials container -->
              </div>
              <!-- END upper section -->
            </div>
            <!-- END upper right section -->
          </div>

          <!-- Copyright container -->
          <div class="copyright-container">
            <p>&copy; 2024 Insubria WildLife APS</p>
          </div>
          <!-- END copyright container -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  width: 100%;
  color: white;
  background-color: black;
  padding-top: 40px;
  padding-bottom: 40px;
}

.main-container {
  width: 87%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.753);
  border-bottom: 1px solid rgba(255, 255, 255, 0.753);

  .right-details {
    width: 70%;
    align-items: center;
  }
}

.logo-footer-container {
  width: 30%;
  margin-left: 0;
  margin-right: 0;
  align-items: center;

  img {
    width: 35%;
    vertical-align: middle;
  }
}

address h3:first-child,
address a,
#address {
  display: none;
}

.address,
.contacts-socials {
  margin-left: 0;
  margin-right: 0;

  .address-container {
    font-style: normal;
    margin-left: 10px;
  }
}

.location-container {
  display: none;
  align-items: center;
  width: 10%;
  margin: 0;

  img {
    width: 30px;
    height: 30px;
    margin: 0;
  }
}

.socials {
  align-items: center;
  text-align: center;
  margin-right: 60px;

  h3 {
    padding-bottom: 15px;
  }
}

.buttons-container {
  width: 100%;

  .fb-container {
    width: 50%;
    text-align: end;
    padding-right: 10px;

    img {
      width: 40%;

      &:hover {
        transform: scale(1.07);
      }
    }
  }

  .ig-container {
    width: 50%;
    text-align: start;
    padding-left: 10px;

    img {
      width: 40%;

      &:hover {
        transform: scale(1.07);
      }
    }
  }
}

.contacts {
  width: 100%;
  text-align: center;

  .phone-container {
    justify-content: center;
    align-items: center;
  }
}

.copyright-container {
  width: 87%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.753);
}

// Media queries
@media (max-width: 500px) {
  .upper-section {
    justify-content: space-between;

    .address-container,
    .socials {
      width: 90%;
      margin-left: 0;
      margin-right: 0;
    }

    .socials {
      width: 100%;
    }
  }
}

@media (max-width: 800px) {
  .col-flexible {
    width: calc(100% / 2);
  }
  .logo-footer-container {
    width: 0%;
    margin: 0;
  }

  .location-container {
    display: none;
  }

  .footer-logo {
    display: none;
  }

  .socials {
    margin-right: 10px;
  }

  #fb-logo,
  #ig-logo {
    width: 50%;
  }
}

@media only screen and (min-width: 500px) and (max-width: 800px) {
  #fb-logo,
  #ig-logo {
    width: 40%;
  }
}

@media (min-width: 1000px) {
  #fb-logo,
  #ig-logo {
    width: 25%;
  }
}
</style>
