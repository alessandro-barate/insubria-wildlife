<script>
export default {
  name: "ContactUsEnglish",

  data() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- Form section -->
        <div class="form-container overlay">
          <div class="contact">
            <h1 class="uppercase">contattaci</h1>
            <h2>
              Hai bisogno di contattarci? Compila il form sottostante, ti
              risponderemo il prima possibile
            </h2>
          </div>
          <form action="" method="POST">
            <label for="name"><strong>Nome</strong></label>
            <input type="text" name="name" id="name" />
            <br />
            <label for="surname"><strong>Cognome</strong></label>
            <input type="text" name="surname" />
            <br />
            <label for="mail"><strong>Email</strong></label>
            <input type="mail" />
            <br />
            <label for="message"
              ><strong>Scrivi qui il tuo messaggio</strong></label
            >
            <textarea name="message" id="" rows="8" cols="50"></textarea>
            <br />
            <button type="submit">Invia</button>
          </form>
        </div>
        <!-- END form section -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.col {
  padding-top: 50px;
  padding-bottom: 50px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../assets/img/contact/background/flying-bird.png);
}

.contact {
  width: 60%;

  h1 {
    font-size: 50px;
    margin-bottom: 60px;
  }

  h2 {
    padding-bottom: 35px;
  }
}

.overlay {
  width: 80%;
}

.form-container {
  padding-top: 50px;
  text-align: center;
  color: rgba(255, 255, 255, 0.753);

  label {
    font-size: 20px;
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 300px;
    height: 3vh;
    font-size: 18px;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 17px 20px 17px 20px;
  }

  textarea {
    font-size: 18px;
    padding-top: 10px;
    margin-top: 5px;
    padding-left: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
    transform: scale(1.01);
  }
}

button {
  border: none;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px 30px 10px 30px;
  border-radius: 20px;
  background-color: #ff6b3ad8;

  &:hover {
    background-color: #ff6b3a;
    box-shadow: 0 -1px 10px #ff6b3ad8;
    transform: scale(1.05);
  }
}

// Media queries
@media (max-width: 609px) {
  .col {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

@media (max-width: 730px) {
  textarea {
    width: 80%;
  }

  .form-container input {
    width: 250px;
  }
}
</style>
