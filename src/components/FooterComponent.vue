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
              <div class="address">
                <h4>Insubria</h4>
                <span>ddf</span>
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
  background-color: black;
  margin-top: 20px;
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

.col-left {
  background-color: red;

  .logo-footer-container img {
    width: 10%;
    object-fit: contain;
  }
}

.col-right {
  background-color: blue;
}
</style>
