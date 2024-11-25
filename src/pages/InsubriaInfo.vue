<script></script>

<template>
  <div class="container">
    <div class="row">

      <!-- History description -->
      <div class="col upper-bg">
        <div class="history-old overlay">
          <h1>INSUBRIA</h1>
          <div class="insubria-description d-flex">
            <div class="description">
              <h2>Un pò di Storia</h2>
              <p>
                Gli antichi romani chiamavano Insubri il popolo che abitava alcune
                aree settentrionali dell'odierna Italia.
                <br />
                <br />Sono stati trovati reperti archeologici risalenti a 9000 anni
                fa che ci raccontano di uomini vissuti nei territori compresi tra il
                Serio e il Sesia, a nord delle vallate del Toce, dei cantoni
                svizzeri Ticino e Grigioni, e a sud del Po. Successivamente si sono
                poi distinte tre diverse culture:
                <ul id="insubria-list">
                  <li><h4>dell'Isolino<span>, attorno al 5060 a.C.</span></h4>
                  <p>chiamata così perché gli abitanti costruirono un villaggio di
                  palafitte sull'Isolino Virginia del lago di Varese, lago ritenuto essere
                  il più antico dell'arco alpino</p></li>
                  <li><h4>di Canegrate<span>, a partire dal XIII secolo
                  a.C</span></h4></li>
                  <li><h4>di Golasecca<span>, a partire dal IX secolo a.C.</span></h4></li>
                </ul> 
              </p>
            </div>
            <div class="img-container d-flex">
              <div class="img-container-2">
                <img src="/insubria/maps/insubria-immagini.png" alt="">
              </div>
            </div>
          </div>
          <div class="history-nowaday">
          <div class="insubria-description">
            <h2>L'Insubria oggi</h2>
            <p>La regione insubrica, pur non essendo ben definita, ricalca le orme della presenza degli antichi Insubri, e le popolazioni odierne ne condividono alcuni aspetti culturali e dialettali.
            <br>
            <br>
            Rimane caratterizzata da una ricchissima biodiversità, tra le più alte della regione Lombardia, ma anche una altissima urbanizzazione, grazie proprio alle numerose risorse che vi sono presenti.
            <br>
            <br>
            Grazie alla complessa storia geologica e alla varietà geomorfologica del territorio, possiamo distinguere, specialmente nelle Prealpi Varesine e Comasche, differenti habitat forestali e molti altri legati alle aree umide. Anche la regione biogeografica continentale racchiude diversi habitat peculiari ricchi di specie vegetali e animali.
            </p>
          </div>
        </div>
        </div>
        
      </div>
      <!-- END history description -->

      <!-- Why Insubria description -->
      <div class="col middle-bg">
        <div class="why-insubria overlay">
          <h2>Perchè l'Insubria?</h2>
          <div class="why-description">
            <p>Abbiamo scelto di focalizzarci su questo territorio proprio perché ne riconosciamo il valore naturale e anche le criticità dell'incontro tra i due mondi, ovvero quello naturale e quello urbanizzato e industrializzato.
              <br>
              <br>
            Crediamo profondamente che una corretta valorizzazione e gestione del territorio possa dare vita ad una proficua coesistenza tra uomo e natura, e portare di conseguenza anche la comunità ad apprezzare le bellezze del proprio territorio.</p>
          </div>
        </div>
      </div>
      <!-- END why Insubria description -->

      <!-- Logo explanation -->
      <div class="col lower-bg">
        <div class="logo-container overlay">
          <h2>Il nostro Logo</h2>
          <div class="images-container d-flex">
            <div class="logo-img">
              <img src="/logo/double-circle.png" alt="">
            </div>
            <div class="real-image">
              <img src="/insubria/fiorrancino.png" alt="">
            </div>
          </div>
          <p>Il nostro logo è un Fiorrancino - <span>Regulus Ignicapilla</span> - e qui vi spieghiamo perchè ci rappresenta:</p>
        </div>
      </div>
      <!-- END logo explanation -->
    </div>
  </div>
</template>

<style scoped lang="scss">

.container {
  color: rgba(255, 255, 255, 0.753);

  p, span {
    font-size: 20px;
  }
}

.col {
  margin-bottom: 10px;
  padding: 60px 30px 60px 30px;
}

h1 {
  font-size: 50px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
}

h2 {
  font-size: 28px;
  padding-bottom: 10px;
}

h4 {
  font-size: 20px;
}

.history-old {
  width: 80%;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }

  img:hover {
    transform: scale(1.4);
  }
}

.insubria-description {
  width: 90%;
  padding-top: 30px;

  .description {
    width: 200%;
  }

  #insubria-list li {
    width: 80%;
    padding-top: 15px;
    list-style-type: circle;
    
    &::marker {
      color: rgba(255, 255, 255, 0.753);
    }
  }

  span {
    font-weight: 400;
  }
}

.img-container {
  align-items: center;

  .img-container-2 {
  text-align: center;
  }

  img {
    width: 65%;
  }
}

.history-nowaday {
  padding-top: 40px;
}

.why-insubria {
  width: 60%;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }

  .why-description {
    padding: 10px 20px 10px 20px;
  }
}

.logo-container {
  width: 70%;
  text-align: center;

  span {
    font-style: italic;
  }

  .images-container {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .logo-img {
    width: 50%;
    text-align: end;
    padding-right: 30px;

    img {
      width: 50%;
    }
  }

  .real-image {
    width: 50%;
    text-align: start;
    padding-left: 30px;

    img {
      width: 48%;
      border-radius: 50%;
    }
  }
}

.upper-bg {
  background-size: cover;
  background-position: center;
  background-image: url(/homepage/carousel/fox-2.jpg);
}

.middle-bg {
  background-size: cover;
  background-position: center;
  background-image: url(/insubria/background/orange-bird.jpg);
}

.lower-bg {
  background-size: cover;
  background-position: center;
  background-image: url(/insubria/background/deer.png);
}

@media (max-width: 980px) {
  .insubria-description {
    display: block;

    .description {
      width: 100%;
      padding-bottom: 50px;
    }
  }

  .img-container-2 img {
    width: 50%;

    &:hover {
    transform: scale(1.2);
  }
  }
}
</style>
