<script></script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>INSUBRIA</h1>
        <div class="history-old d-flex">
          <div class="insubria-description">
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
            <img src="/insubria/maps/insubria-immagini.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="col">
        <div class="history-nowaday d-flex">
          <div class="img-container">
            <img src="/insubria/maps/insubria-territorio.png" alt="">
          </div>
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
  </div>
</template>

<style scoped lang="scss">

.container {
  padding-top: 50px;
}

.col {
  width: 90%;

  h1 {
    font-size: 50px;
    text-align: center;
    padding-bottom: 50px;
    color: rgba(255, 255, 255, 0.753);
  }
}

.insubria-description {
  width: 40%;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color:rgb(141, 141, 141);
  color: rgba(255, 255, 255, 0.753);

  h2 {
    padding-bottom: 10px;
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

.history-nowaday {
  margin-top: 40px;
}

.img-container {
  width: 60%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
