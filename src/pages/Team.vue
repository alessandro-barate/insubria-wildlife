<script></script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="team-container">
          <div class="overlay">
            <h1>IL NOSTRO TEAM</h1>
            <div class="cards-container d-flex">
              <div class="col-25">Alessia</div>
              <div class="col-25">Giulia</div>
              <div class="col-25">Elena</div>
              <div class="col-25">Maura</div>
              <div class="col-25">Oriana</div>
              <div class="col-25">Ilaria</div>
              <div class="col-25">Roberto</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.team-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  background-image: url(/team/background/team-group.jpg);
  background-size: cover;
}

.overlay {
  width: 90%;
  background-color: rgba(0, 0, 0, 0.8);
}

.col-25 {
  width: 25%;
}

.cards-container {
  flex-wrap: wrap;
}
</style>
