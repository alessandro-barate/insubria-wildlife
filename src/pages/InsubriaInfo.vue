<script></script>

<template>
  <div class="container">
    <div class="row">

      <!-- History old description -->
      <div class="col upper-bg">
        <h1>INSUBRIA</h1>
        <div class="history-old overlay">
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
                  <li><h4>dell'Isolino (5060 a.C.)</h4>
                  <p>chiamata così perché gli abitanti costruirono un villaggio di
                  palafitte sull'Isolino Virginia del lago di Varese, lago ritenuto essere
                  il più antico dell'arco alpino</p></li>
                  <li><h4>di Canegrate<span>, a partire dal XIII secolo
                  a.C</span></h4></li>
                  <li><h4>di Golasecca<span>, a partire dal IX secolo a.C.</span></h4></li>
                </ul> 
              </p>
            </div>
            <div class="img-container">
              <img src="/insubria/maps/insubria-immagini.png" alt="">
            </div>
          </div>
          <div class="history-nowaday">
          <div class="insubria-description">
            <h2>L'insubria oggi</h2>
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
      <!-- END history old description -->

      <div class="col lower-bg">
        <div class="why-insubria overlay">
          <h2>Perchè l'Insubria?</h2>
          <div class="why-description">
            <p>Abbiamo scelto di focalizzarci su questo territorio proprio perché ne riconosciamo il valore naturale e anche le criticità dell'incontro tra i due mondi - quello naturale e quello urbanizzato/industrializzato.
            Crediamo profondamente che una corretta valorizzazione e gestione del territorio possa dare vita ad una proficua coesistenza tra uomo e natura, e portare di conseguenza anche la comunità ad apprezzare le bellezze del proprio territorio.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container {
  color: rgba(255, 255, 255, 0.753);
}

.col {
  margin-bottom: 10px;
  padding: 60px 30px 60px 30px;
}

h1 {
  color: white;
  font-size: 50px;
  text-align: center;
  padding-bottom: 50px;
}

h2 {
  padding-bottom: 10px;
}

.history-old {
  width: 80%;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 30px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }
}

.insubria-description {
  padding-top: 30px;

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

.img-container img {
    width: 90%;
}

.history-nowaday {
  padding-top: 40px;
}

.why-insubria {
  width: 60%;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }
}

.upper-bg {
  background-image: url(/homepage/carousel/fox-2.jpg);
  background-size: cover;
  background-position: center;
}

.middle-bg {
  background-image: url(/insubria/background/deer.png);
  background-size: cover;
  background-position: center;
}

.lower-bg {
  background-image: url(/insubria/background/orange-bird.jpg);
  background-size: cover;
  background-position: center;
}
</style>
