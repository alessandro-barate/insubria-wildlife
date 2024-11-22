import { reactive } from "vue";

export const store = reactive({
  visions: [
    {
      description:
        "Diventare un faro nella promozione sociale, creando una comunità vibrante di cittadini consapevoli e attivi nella conservazione di ambiente e fauna.",
      image: "/homepage/carousel/swan.jpg",
    },
    {
      description:
        "Realizzare un centro di recupero per la fauna all'avanguardia, dove gli animali selvatici in difficoltà trovano cura e vengono reimmessi nel territorio di appartenenza, mantenendone le caratteristiche selvatiche.",
      image: "/homepage/carousel/bird-jumbo.jpg",
    },
    {
      description:
        "Creare un luogo nel quale il volontariato può prendere parte in diverse forme, ed è un'attività sempre stimolante e formativa.",
      image: "/homepage/carousel/fox-2.jpg",
    },
    {
      description:
        "Stabilire collaborazioni con università, enti di ricerca e istituzioni, per contribuire attivamente alla conoscenza e alla ricerca scientifica.",
      image: "/homepage/carousel/eagle.jpg",
    },
    {
      description:
        "Creare una rete tra i professionisti del settore, per rendere le nostre azioni trasparenti e omogenee sul territorio, per arricchirci con stimoli provenienti da altre aree italiane e da oltre confine.",
      image: "/homepage/carousel/fox.jpg",
    },
  ],

  members: [
    {
      name: "Ilaria",
      title: "Presidentessa",
      image: "team/grid/ilaria.png",
      description:
        "Naturalista da quando ho memoria. Ho guardato le foto delle piante, degli animali, dei minerali e delle stelle e ho capito qual era la mia strada. La passione per gli animali, però, è nata molto prima, quando un tartufo umido mi ha svegliato nella culla, e non mi ha mai più abbandonata; quando con la nonna passavo il tempo in giardino a imparare nomi di fiori che avrei poi dimenticato, perché impegnata a guardare una lucertola, un’ape o rincorrere un uccellino di passaggio. Oggi parte del mio lavoro è cercare di trasmettere la meraviglia che provo ad ogni piccola scoperta...se non mi ci perdo dentro!",
    },
    {
      name: "Alessia",
      title: "Vice Presidentessa",
      image: "team/grid/alessia.png",
      description:
        "Non potrei immaginare la mia vita lontana dal mondo naturale: per questo ho scelto questo percorso ancora prima di esserne consapevole. Profondamente appassionata e curiosa, appena ho potuto ho viaggiato: per svago e per lavoro, in Italia e all’estero, e facendo parte di progetti di volontariato. Ad ogni  ritorno a casa mi trovavo arricchita da un bagaglio professionale e personale più ampio. Amo da sempre imparare e condividere con le persone che mi stanno intorno e nel tempo libero viaggio, dormo in tenda, leggo e disegno (per lo più pennuti!)",
    },
    {
      name: "Elena",
      title: "Segretaria",
      image: "team/grid/elena.png",
      description:
        "Da sempre appassionata di animali e natura, entro in questo mondo (quasi 20 anni fa) tramite un'associazione operante nel monitoraggio ambientale. Da allora ho collaborato con molte associazioni come divulgatrice scientifica, guida in oasi protette e parchi faunistici, e per didattica nelle scuole. Il volontariato mi ha dato la possibilità di entrare in contatto con la fauna selvatica, e tutt'oggi lavoro in questo ambito. Sono entusiasta del mio percorso e delle innumerevoli possibilità che mi ha donato, ma lo sono ancora di più pensando al supporto che potrò dare a Insubria Wildlife e a tutto ciò che questa nuova avventura riuscirà a darmi!",
    },
    {
      name: "Giulia",
      title: "Consigliera",
      image: "team/grid/giulia.png",
      description:
        "Ricordo ancora nitidamente quando iniziò ad affacciarsi tra i miei pensieri la passione per gli animali. A 7 anni, però, non ne sei ancora pienamente consapevole. Un rapace urtò accidentalmente contro la porta di casa dei miei nonni; lo raccolsi con molta attenzione, scesi in giardino, e quando allentai leggermente la presa, si librò in volo in un attimo. Qualcosa scattò in me quel giorno: un sentimento, un amore verso gli animali selvatici, che però non era ancora pronto a sbocciare completamente. Lo fece durante il mio percorso universitario, insieme alla sicurezza che non mi avrebbe mai più lasciato. Oggi ho fatto della mia passione il mio lavoro. Amo passare il tempo all’aria aperta, in mezzo ai boschi, in compagnia dei miei cani o anche solo in silenzio con la mia macchina fotografica, aspettando che un martin pescatore si posi sul ramo di fronte a me.",
    },
    {
      name: "Maura",
      title: "Consigliera",
      image: "team/grid/maura.png",
      description:
        "Se la prima parola che pronunci quando sei piccola è “cane”, vuol dire che da qualche parte il tuo percorso è già tracciato. Diventare veterinaria è stato un sogno che è realizzato, ma l'incontro con la fauna selvatica si è preso una grossa parte del mio cuore. Durante il progetto Erasmus in una clinica universitaria ebbi come paziente una piccola lontra, seguita poi da rapaci e pipistrelli: queste esperienze non fecero altro che rafforzare il mio amore per gli animali selvatici, culminato con un tirocinio presso un CRAS, dove ho scoperto il mondo della fauna locale e il valore del volontariato.",
    },
    {
      name: "Roberto",
      title: "Consigliere",
      image: "team/grid/roberto.png",
      description:
        "La natura ha sempre avuto un lato attrattivo su di me: un sentimento profondo, difficilmente spiegabile a parole. È la mia passione, la mia valvola di sfogo, il mio porto sicuro. Dove imparare cose nuove e passare il tempo con le persone che amo: ne ho fatto anche un lavoro, diventando guida safari in Africa. Con Insubria Wildlife voglio portare le persone ad esplorare anche la meravigliosa natura locale, spesso poco conosciuta.",
    },
  ],
});
