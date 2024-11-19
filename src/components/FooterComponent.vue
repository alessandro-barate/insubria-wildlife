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
          <div class="col-50 col-left">
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
                  <span> Via Roma 20, 20004, Arluno </span>
                </div>
              </div>
              <div class="contacts">
                <h4>fdf</h4>
              </div>
            </div>
          </div>
          <div class="col-50 col-right">
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

.col {
  width: 80%;
  border-top: 1px solid rgba(255, 255, 255, 0.753);
  border-bottom: 1px solid rgba(255, 255, 255, 0.753);
}

.col-50 {
  width: 50%;
}

.logo-footer-container img {
  width: 12%;
  object-fit: contain;
}

.address {
  width: 30%;
  padding-top: 20px;
  padding-bottom: 20px;

  img {
    width: 30px;
    margin-right: 10px;
  }
}

.col-right {
  background-color: blue;
}
</style>
