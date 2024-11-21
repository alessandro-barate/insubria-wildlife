<script>
import { store } from "../store.js";
export default {
  name: "Team",

  data() {
    return {
      store,
      currentIndex: 0,
      intervalTimer: false,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="team-container">
          <div class="overlay">
            <h1>IL NOSTRO TEAM</h1>
            <div class="cards-container d-flex">
              <div
                v-for="(member, index) in store.members"
                :key="index"
                class="col-25"
              >
                <div class="member-img">
                  <img src="" alt="" />
                </div>
                <h2>{{ member.name }}</h2>
                <h3>{{ member.title }}</h3>
                <p>{{ member.description }}</p>
              </div>
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
