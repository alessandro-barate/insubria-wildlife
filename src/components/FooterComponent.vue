<script>
export default {
  name: "FooterComponent",
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col d-flex">
          <div class="logo-footer-container d-flex">
            <img
              class="footer-logo"
              src="/logo/bird-only.png"
              alt="Insubria logo"
            />
          </div>
          <div class="right-details">
            <div class="upper-section d-flex">
              <div class="col-50 address d-flex">
                <div class="location-container d-flex">
                  <img
                    src="../assets/img/footer-img/location-icon.png"
                    alt="Logo GPS"
                  />
                </div>
                <div class="address-container">
                  <h3>Insubria</h3>
                  <a href=""> Via Roma 20, 20004, Arluno </a>
                  <h3 id="cf">Codice Fiscale</h3>
                  <span>93054540153</span>
                </div>
              </div>
              <div class="col-50 contacts-socials">
                <div class="socials">
                  <h3>Seguici sui nostri social</h3>
                  <div class="buttons-container d-flex">
                    <div class="fb-container">
                      <a href="">
                        <img
                          src="../assets/img/footer-img/facebook-icon.svg"
                          alt="Facebook logo"
                          id="fb-logo"
                        />
                      </a>
                    </div>
                    <div class="ig-container">
                      <a href="">
                        <img
                          src="../assets/img/footer-img/instagram-icon.svg"
                          alt="Instagram logo"
                          id="ig-logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lower-section d-flex">
              <div class="contacts">
                <h3>Contattaci</h3>
                <div class="phone-container d-flex">
                  <img
                    src="../assets/img/footer-img/phone-icon.png"
                    alt="Icona telefono"
                  />
                  <a href="">0230256512</a>
                </div>
                <div class="mail-container d-flex">
                  <img
                    src="../assets/img/footer-img/mail-icon.png"
                    alt="Immagine email"
                  />
                  <a href=""> insubriawildlifeaps@pec.insubriawildlife.com </a>
                </div>
              </div>
            </div>
          </div>
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

a {
  text-decoration: none;
  color: white;

  &:hover {
    color: #ff6a3a;
  }
}

.col {
  width: 87%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.753);
  border-bottom: 1px solid rgba(255, 255, 255, 0.753);

  .right-details {
    width: 70%;

    .upper-section {
      margin-bottom: 20px;
    }
  }
}

.lower-section {
  justify-content: center;
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

.address,
.contacts-socials {
  margin-left: 0;
  margin-right: 0;

  .address-container {
    margin-left: 10px;
  }
}

#cf {
  padding-top: 10px;
}

.location-container {
  align-items: center;
  width: 10%;
  margin: 0;

  img {
    width: 30px;
    height: 30px;
    margin: 0;
  }
}

.contacts h3 {
  margin-left: -10px;
}

.contacts img {
  width: 25px;
  padding-top: 10px;
  margin-left: -10px;
  margin-right: 0;
}

.contacts a {
  padding-top: 10px;
  padding-left: 10px;
  margin-left: 0;
  margin-right: 0;
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

  .phone-container,
  .mail-container {
    justify-content: center;
  }
}

// Media queries
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
    width: 45%;
  }
}

@media (min-width: 1000px) {
  #fb-logo,
  #ig-logo {
    width: 25%;
  }
}
</style>
