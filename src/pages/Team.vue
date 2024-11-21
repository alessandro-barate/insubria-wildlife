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
                class="col-33"
              >
                <div class="member-img">
                  <img :src="member.image" alt="" />
                </div>
                <h2>{{ member.name }}</h2>
                <h3>{{ member.title }}</h3>
                <div class="info-btn">
                  <button>Scopri di più</button>
                </div>
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
  background-size: 100%;
}

.overlay {
  width: 90%;
  background-color: rgba(0, 0, 0, 0.8);

  h1 {
    font-size: 45px;
    padding-top: 30px;
    padding-bottom: 60px;
  }
}

.col-33 {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 50px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  width: calc(100% / 3 - 50px);

  .info-btn {
    width: 100%;
    padding-top: 10px;

    button {
      border: none;
      font-size: 15px;
      font-weight: bold;
      border-radius: 20px;
      padding: 8px 25px 8px 25px;

      &:hover {
        color: white;
        background-color: rgb(94, 94, 94);
      }
    }
  }
}

.cards-container {
  flex-wrap: wrap;

  h2 {
    padding-bottom: 10px;
  }

  h3 {
    padding-bottom: 7px;
  }

  p {
    width: 80%;
  }
}

.member-img {
  width: 100%;
  padding-bottom: 15px;

  img {
    width: 35%;
    height: 35%;
    border: 3px solid #ff6b3a;
    object-fit: cover;
    border-radius: 110px;
  }
}
</style>
