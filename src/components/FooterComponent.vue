<script>
export default {
  name: "FooterComponent",
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row d-flex">
        <div class="col">
          <div class="col-60">
            <h2>Ciao</h2>
          </div>
          <div class="col-40">Ciao</div>
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

.col-60 {
  width: 60%;
}

.col-40 {
  width: 40%;
}
</style>
