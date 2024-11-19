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
          <div class="col-70 col-left">
            <div class="logo-footer-container d-flex">
              <img
                class="footer-logo"
                src="../assets/img/logo/bird-only.png"
                alt="Insubria logo"
              />
              <div class="address d-flex">
                <div class="location-container d-flex">
                  <img
                    src="../assets/img/footer-img/location-icon.png"
                    alt="GPS icon"
                  />
                </div>
                <div class="address-container">
                  <h3>Insubria</h3>
                  <a href=""> Via Roma 20, 20004, Arluno </a>
                </div>
              </div>
              <div class="contacts">
                <h3>Contattaci</h3>
                <div class="phone-container d-flex">
                  <img
                    src="../assets/img/footer-img/phone-icon.png"
                    alt="Icona del telefono"
                  />
                  <a href="">0230256512</a>
                </div>
                <div class="mail-container d-flex">
                  <img
                    src="../assets/img/footer-img/mail-icon.png"
                    alt="Immagine email"
                  />
                  <a href="">fewfew@fewf.com</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-30 col-right d-flex">
            <!--<div class="col-50">
              <div class="button-container">
                <p>Hai trovato un esemplare di animale e non sai cosa fare?</p>
                <button>Ti aiutiamo noi!</button>
              </div>
            </div> -->
            <div class="">CIAO</div>
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
  width: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.753);
  border-bottom: 1px solid rgba(255, 255, 255, 0.753);
}

.col-30 {
  width: 30%;
}

.col-50 {
  width: 50%;
}

.col-70 {
  width: 70%;
}

.logo-footer-container img {
  width: 12%;
  object-fit: contain;
}

.address {
  width: 30%;

  img {
    width: 30px;
    margin-right: 10px;
  }
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
    margin-left: -20px;
  }

  .footer-logo {
    display: none;
  }
}
</style>
