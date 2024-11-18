<script>
export default {
  name: "Homepage",

  data() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="jumbo">
          <h1 class="padding-l-60">Insubria <span>Wild</span>Life</h1>
          <p class="padding-l-60">
            Il mondo selvatico è più vicino di quanto pensi: unisciti a noi
            nella sua scoperta!
          </p>
        </div>
        <div class="video-container">
          <video
            src="../assets/video/background-video.mp4"
            autoplay
            loop
            muted
            type="video/mp4"
            class="back-video"
          ></video>
          <div class="mission">
            <h2>La nostra Mission</h2>
            <p>
              Insubria Wildlife APS è la voce giovane e dinamica della
              divulgazione scientifica sulla fauna selvatica e gli ambienti
              insubrici. Attraverso i nostri social portiamo la biodiversità
              insubrica sotto i riflettori, rendendola accessibile e
              interessante per tutti. Il nostro obiettivo è ispirare curiosità e
              consapevolezza, mostrando come la tutela delle risorse naturali
              possa arricchire la vita di ciascuno e come il nostro territorio
              ne sia ricchissimo. Con eventi in programma e collaborazioni con
              esperti del settore, ci impegniamo a diventare un punto di
              riferimento per chi desidera scoprire, proteggere e vivere appieno
              il patrimonio naturale che ci circonda. Vogliamo creare un luogo
              di incontro per appassionati, addetti ai lavori e curiosi,
              stimolando dibattiti e scambi tra persone con diverso background,
              offrendo opportunità di crescita e formazione in un ambiente
              giovane, innovativo, internazionale. Unisciti a noi in questa
              avventura di scoperta e azione!
            </p>
          </div>
          <div class="vision">
            <h2>VISION: Un futuro dove natura e comunità prosperano insieme</h2>
            <p>
              Immaginiamo un'Insubria dove la fauna selvatica e gli ambienti
              coesistono in sinergia con la comunità locale, dove ognuno può
              avere un ruolo attivo. La nostra visione si estende oltre
              l'orizzonte, mirando a: 1 - Diventare un faro nella promozione
              sociale, creando una comunità vibrante di cittadini consapevoli e
              attivi nella conservazione di ambiente e fauna. 2 - Realizzare un
              centro di recupero per la fauna all'avanguardia, dove gli animali
              selvatici in difficoltà trovano cura e vengono reimmessi nel
              territorio di appartenenza, mantenendone le caratteristiche
              selvatiche. 3 - Creare un luogo nel quale il volontariato può
              prendere parte in diverse forme, ed è un'attività sempre
              stimolante e formativa. 4 - Stabilire collaborazioni con
              università, enti di ricerca e istituzioni, per contribuire
              attivamente alla conoscenza e alla ricerca scientifica. 5 - Creare
              una rete tra i professionisti del settore, per rendere le nostre
              azioni trasparenti e omogenee sul territorio, per arricchirci con
              stimoli provenienti da altre aree italiane e da oltre confine.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding-top: 100px;
  font-size: 80px;

  span {
    color: #ff6a3a;
  }
}

.jumbo {
  background-image: url(../assets/img/bird-jumbo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 200px;

  p {
    padding-top: 15px;
    color: white;
  }
}

.back-video {
  width: 100%;
  position: absolute;
  z-index: -1;
}

.mission {
  width: 60%;
  padding-top: 50px;
  padding-bottom: 70px;
}

/* Media queries */
@media (max-width: 768px) {
  h1 {
    padding-left: 0;
    text-align: center;
  }

  .jumbo p {
    width: 70%;
    padding-left: 0;
    text-align: center;
  }
}
</style>
