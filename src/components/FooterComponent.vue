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
          <div class="logo-footer-container">
            <img
              class="footer-logo"
              src="../assets/img/logo/bird-only.png"
              alt="Insubria logo"
            />
          </div>
          <div class="address d-flex">
            <div class="location-container d-flex">
              <img
                src="../assets/img/footer-img/location-icon.png"
                alt="Logo GPS"
              />
            </div>
            <div class="address-container">
              <h3>Insubria</h3>
              <a href=""> Via Roma 20, 20004, Arluno </a>
              <div>
                <h3>Codice Fiscale</h3>
                <span>01234567890</span>
              </div>
            </div>
          </div>
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
              <a href=""> fewfew@fewf.com </a>
            </div>
          </div>
          <div class="socials d-flex">4</div>
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
  width: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.753);
  border-bottom: 1px solid rgba(255, 255, 255, 0.753);
}

.logo-footer-container,
.address,
.contacts,
.socials {
  width: 25%;
}

.logo-footer-container img {
  width: 30%;
  margin-left: 60px;
}

.address img {
  width: 30px;
  height: 30px;
  margin: 0;
}

.address-container {
  margin-left: 20px;
}

.location-container {
  align-items: center;
  width: 10%;
  margin: 0;
}

.contacts {
  margin-right: 0;

  h3 {
    margin-left: -10px;
  }

  img {
    width: 25px;
    padding-top: 10px;
    margin-left: -10px;
    margin-right: 0;
  }

  a {
    padding-top: 10px;
    padding-left: 10px;
    margin-left: 0;
    margin-right: 0;
  }
}

.button-container {
  text-align: center;

  p {
    width: 80%;
    font-size: 14px;
    padding-bottom: 10px;
  }

  button {
    width: 70%;
    border: none;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 20px;
    background-color: #ff6a3a;

    &:hover {
      transform: scale(1.1);
      background-color: #f8460a;
    }
  }
}

// Media queries
@media (max-width: 768px) {
  .logo-footer-container {
    width: 0%;
    margin: 0;
  }

  .location-container {
    margin-right: 25px;
  }

  .footer-logo {
    display: none;
  }
}
</style>
