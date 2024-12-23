<script>
import { store } from "../store.js";
export default {
  name: "Supportaci",

  data() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col overlay">
        <section>
          <h1 class="uppercase">supportaci</h1>

          <!-- Top paragraphs -->
          <div class="top-paragraphs">
            <h2>Vuoi aiutarci a realizzare il nostro sogno?</h2>
            <p>Sostieni la nostra missione con una donazione</p>
          </div>
          <!-- END top paragraphs -->

          <!-- Payment methods section -->
          <div class="payments-list">
            <ul>
              <li>
                <strong>Bonifico bancario - IBAN:</strong>
                <br />
                <span id="iban">IT02S0623022808000047552608</span>
              </li>
              <li>
                <strong>PayPal:</strong>
                <br />
                <span>disponibile a breve</span>
              </li>
            </ul>
            <p>
              Ogni contributo, piccolo o grande, ci aiuta a proteggere la fauna
              selvatica e a preservare il nostro territorio per le future
              generazioni.
            </p>
          </div>
          <!-- END payment methods section -->

          <!-- Bottom paragraphs -->
          <div class="bottom-paragraphs">
            <h2>Condividi la nostra visione e i nostri valori?</h2>
            <p>
              Hai idee, passione e voglia di metterti in gioco? Unisciti a noi
              <!-- </p> -->
              <!-- <p class="link-paragraph">
              Compila il
              <a
                ><router-link :to="{ name: 'Contattaci' }" class="link"
                  >modulo di contatto</router-link
                ></a
              > -->
              e diventa parte di <strong>Insubria WildLife</strong>: siamo
              sempre alla ricerca di
              <strong>voci libere, innovative ed entusiaste</strong> per
              costruire insieme un futuro migliore per la natura.
            </p>
          </div>
          <!-- END bottom paragraphs -->
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../assets/img/support/background/squirrel.jpg);
}

.row {
  padding-top: 50px;
  padding-bottom: 50px;
}

.overlay {
  width: 80%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
    transform: scale(1.01);
  }
}

section {
  width: 80%;
}

p {
  padding-top: 30px;
}

ul {
  width: 50%;
  padding-top: 12px;
  text-align: start;

  li {
    font-size: 18px;
    padding-top: 6px;
    list-style-type: disc;
  }
}

.bottom-paragraphs {
  padding-top: 50px;
  padding-bottom: 10px;

  .link-paragraph {
    margin-top: -28px;

    a {
      color: #ff6a3a;

      &:hover {
        color: #ff0000;
      }
    }
  }
}

// Media queries
@media (max-width: 500px) {
  h1 {
    font-size: 40px;
  }

  #iban {
    font-size: 15px;
  }
}

@media (max-width: 999px) {
  section {
    width: 90%;
  }

  ul {
    width: 80%;
  }
}
</style>
