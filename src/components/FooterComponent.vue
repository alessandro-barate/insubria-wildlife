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
          <div class="col-60 col-left">
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
          <div class="col-40 col-right">
            <h2>CIAO</h2>
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

.col-40 {
  width: 40%;
}

.col-60 {
  width: 60%;
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
  width: 30%;
  margin-left: 20px;

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

.col-right {
  background-color: blue;
}
</style>
