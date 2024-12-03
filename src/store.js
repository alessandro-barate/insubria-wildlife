import { reactive } from "vue";

export const store = reactive({
  visions: [
    {
      description:
        "Diventare un faro nella promozione sociale, creando una comunità vibrante di cittadini consapevoli e attivi nella conservazione di ambiente e fauna.",
      image: "/homepage/carousel/1-social-promotion.jpg",
    },
    {
      description:
        "Creare un luogo nel quale il volontariato può prendere parte in diverse forme, ed è un'attività sempre stimolante e formativa.",
      image: "/homepage/carousel/2-volunteering.jpg",
    },
    {
      description:
        "Realizzare un centro di recupero per la fauna all'avanguardia, dove gli animali selvatici in difficoltà trovano cura e vengono reimmessi nel territorio di appartenenza, mantenendone le caratteristiche selvatiche.",
      image: "/homepage/carousel/3-wildlife-rehab.jpg",
    },
    {
      description:
        "Stabilire collaborazioni con università, enti di ricerca e istituzioni, per contribuire attivamente alla conoscenza e alla ricerca scientifica.",
      image: "/homepage/carousel/4-research.png",
    },
    {
      description:
        "Creare una rete tra i professionisti del settore, per rendere le nostre azioni trasparenti e omogenee sul territorio, per arricchirci con stimoli provenienti da altre aree italiane e da oltre confine.",
      image: "/homepage/carousel/5-network.png",
    },
  ],

  members: [
    {
      name: "Ilaria",
      title: "Presidentessa",
      image: "team/grid/ilaria.png",
      description:
        "Naturalista da quando ho memoria. Ho guardato le foto delle piante, degli animali, dei minerali e delle stelle e ho capito qual era la mia strada. La passione per gli animali, però, è nata molto prima, quando un tartufo umido mi ha svegliato nella culla, e non mi ha mai più abbandonata; quando con la nonna passavo il tempo in giardino a imparare nomi di fiori che avrei poi dimenticato, perché impegnata a guardare una lucertola, un'ape o rincorrere un uccellino di passaggio. Oggi parte del mio lavoro è cercare di trasmettere la meraviglia che provo ad ogni piccola scoperta...se non mi ci perdo dentro!",
    },
    {
      name: "Alessia",
      title: "Vice Presidentessa",
      image: "team/grid/alessia.png",
      description:
        "Non potrei immaginare la mia vita lontana dal mondo naturale: per questo ho scelto questo percorso ancora prima di esserne consapevole. Profondamente appassionata e curiosa, appena ho potuto ho viaggiato: per svago e per lavoro, in Italia e all'estero, facendo parte di progetti di volontariato. Ad ogni  ritorno a casa mi trovavo arricchita di un bagaglio professionale e personale più ampio. Amo da sempre imparare e condividere con le persone che mi stanno intorno e nel tempo libero viaggio, dormo in tenda, leggo e disegno (per lo più pennuti!)",
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
        "Ricordo ancora nitidamente quando iniziò ad affacciarsi tra i miei pensieri la passione per gli animali. A 7 anni, però, non ne sei ancora pienamente consapevole. Un rapace urtò accidentalmente contro la porta di casa dei miei nonni: lo raccolsi con molta attenzione, scesi in giardino, e quando allentai leggermente la presa, si librò in volo in un attimo. Qualcosa scattò in me quel giorno: un sentimento, un amore verso gli animali selvatici, che però non era ancora pronto a sbocciare completamente. Lo fece durante il mio percorso universitario, insieme alla sicurezza che non mi avrebbe mai più lasciato. Oggi ho fatto della mia passione il mio lavoro. Amo passare il tempo all'aria aperta, in mezzo ai boschi, in compagnia dei miei cani o anche solo in silenzio con la mia macchina fotografica, aspettando che un martin pescatore si posi sul ramo di fronte a me.",
    },
    {
      name: "Maura",
      title: "Consigliera",
      image: "team/grid/maura.png",
      description:
        "Se la prima parola che pronunci quando sei piccola è “cane”, vuol dire che da qualche parte il tuo percorso è già tracciato. Diventare veterinaria è stato un sogno che si è realizzato, ma l'incontro con la fauna selvatica si è preso una grossa parte del mio cuore. Durante il progetto Erasmus in una clinica universitaria ebbi come paziente una piccola lontra, seguita poi da rapaci e pipistrelli: queste esperienze non fecero altro che rafforzare il mio amore per gli animali selvatici, culminato con un tirocinio presso un CRAS, dove ho scoperto il mondo della fauna locale e il valore del volontariato.",
    },
    {
      name: "Roberto",
      title: "Consigliere",
      image: "team/grid/roberto.png",
      description:
        "La natura ha sempre avuto un lato attrattivo su di me: un sentimento profondo, difficilmente spiegabile a parole. È la mia passione, la mia valvola di sfogo, il mio porto sicuro. Dove imparare cose nuove e passare il tempo con le persone che amo: ne ho fatto anche un lavoro, diventando guida safari in Africa. Con Insubria Wildlife voglio portare le persone ad esplorare anche la meravigliosa natura locale, spesso poco conosciuta.",
    },
  ],

  characteristics: [
    {
      intro: "Piccolo ma determinato",
      description:
        "Con i suoi 9-10 cm, il fiorrancino è uno degli uccelli più piccoli d'Europa. Nonostante le dimensioni, però, riesce ad affrontare delle migrazioni, adattandosi a diversi habitat. Proprio come noi, che ci siamo spostate e adattate in diversi contesti professionali, sempre guidate dalla passione per la natura.",
    },
    {
      intro: "Nascosto ma diffuso",
      description:
        "Il fiorrancino, volatile veloce e agile, spesso passa inosservato ai non esperti: analogamente le ricchezze naturalistiche dell'Insubria sono presenti ma talvolta nascoste e poco note.",
    },
    {
      intro: "Adattabile ma sensibile",
      description:
        "Pur adattandosi a vari ambienti, dal livello del mare fino a 2400 metri di altitudine, il fiorrancino è sensibile ai cambiamenti ambientali. Questa caratteristica riflette la nostra missione di promuovere la consapevolezza ecologica in un territorio fortemente antropizzato.",
    },
    {
      intro: "Sociale e curioso",
      description:
        "I fiorrancini spesso si uniscono a volatili di altre specie formando così stormi misti, mostrando una natura sociale e curiosa. Allo stesso modo, noi di Insubria Wildlife puntiamo a creare connessioni, stimolare la curiosità e promuovere lo scambio di conoscenze tra persone con diversi background.",
    },
    {
      intro: "La cresta arancione",
      description:
        "Infine la sua cresta arancione brillante rappresenta quel guizzo di estro e creatività che contraddistingue il nostro entusiasmo, le nostre idee e i numerosi progetti che abbiamo in mente per Insubria Wildlife.",
    },
  ],

  events: [
    {
      title: "notizie da geed deeble",
      date: "27/11/2024",
      poster: "27-11-2024.png",
    },
    {
      title: "bird gardening",
      date: "30/11/2024",
      poster: "30-11-2024.png",
    },
  ],
  sosCards: [
    {
      title: "Trasporto",
      image: "sos-animal/cards/1-box.png",
      description:
        "Il trasporto corretto è fondamentale per evitare ulteriore stress o ferite: scegli una scatola della giusta misura per limitare i movimenti eccessivi, che permetta però all'animale di poter stare in stazionamento eretto. Sul fondo usa carta assorbente o un panno morbido, assicurandoti che non ci siano fili che possano intrecciarsi attorno a zampe e ali. In caso di shock, animale privo di pelo o piume o evidentemente ipotermico, aggiungi una fonte di calore, come ad esempio una bottiglia d'acqua calda: è IMPORTANTISSIMO però che l'animale NON VI SIA MAI a diretto contatto, quindi bisogna avvolgere intorno alla fonte di calore un panno o della carta assorbente, e che abbia sempre la possibilità di allontanarsi da questa, se necessario. Infine chiudere la scatola con un COPERCHIO FORATO per garantire la ventilazione.",
    },
    {
      title: "Cibo e acqua",
      image: "sos-animal/cards/2-food-water.png",
      description:
        "La fauna selvatica, soprattutto quella in difficoltà, è particolarmente suscettibile ad un alimento non adatto, che può causargli molti problemi, portandola persino alla morte. Per questo motivo, bisognerebbe sempre evitare di alimentare gli animali. Cibi da evitare assolutamente: LATTE VACCINO e latticini in generale, pane, biscotti, dolciumi, alimenti processati. Contatta subito il C.R.A.S. e chiedi consigli specifici, se non puoi portarlo immediatamente.L'acqua si può dare solo in caso di animali vigili e reattivi; è importante evitare contenitori non adatti che, con i movimenti dell'animale, potrebbero rovesciarsi bagnando scatola e animale. Un tappo di barattolo è di solito sufficiente.",
    },
    {
      title: "Chi chiamare",
      image: "sos-animal/cards/3-who-to-call.jpg",
      description:
        "Sul territorio, ci sono i Centri di Recupero Animali Selvatici. Qui trovi l'elenco per regione https://elencocras.it/. Per il recupero sul territorio, non tutti i C.R.A.S. hanno la possibilità di effettuarlo. La competenza sul recupero territoriale è della Polizia Provinciale.",
    },
    {
      title: "Mammiferi nudi",
      image: "sos-animal/cards/4-naked-mammals.png",
      description:
        "Se nudi e con occhi chiusi, fuori dal nido, necessitano sempre di intervento. Un reinserimento nel nido è possibile e consigliabile se non feriti e vitali (quando manipolati reagiscono, si muovono e sono caldi) e il nido accessibile e integro. Usa guanti o un panno per evitare di lasciare il tuo odore, altrimenti il genitore potrebbe abbandonarli. Una volta riposizionato nella tana, bisogna allontanarsi (mai rimanere in vista) e mantenere monitorata l'attività di cuccioli e genitori nelle successive 4-6 ore e, nel frattempo, contattare il C.R.A.S.",
    },
    {
      title: "Mammiferi con pelo",
      image: "sos-animal/cards/5-furry-mammals.png",
      description:
        "Non sempre gli animali giovani sono abbandonati. È parte del loro ciclo di vita. I cuccioli con il mantello sviluppato e gli occhi ben aperti, iniziano ad esplorare il territorio. Non capita di rado di trovare giovani minilepri, conigli o scoiattoli da soli.  È tutto normale ed è una fase fondamentale per la loro crescita, perciò NON VANNO RECUPERATI. Se in zona con pericoli, contattare il C.R.A.S. per farsi consigliare. Emblematici sono i cuccioli di CAPRIOLO e CERVO: essi nascono senza odore e per diverso tempo rimangono nascosti nella vegetazione mentre le madri si nutrono. Se toccati, verranno abbandonati dalle madri.",
    },
    {
      title: "Uccelli fuori dal nido",
      image: "sos-animal/cards/6-no-nest-bird.jpg",
      description:
        "Molti uccelli giovani passano del tempo a terra durante l'apprendimento del volo. È normale. Uccelli che nascono privi di piume (merli, passeri, cornacchie..): se trovati fuori dal nido e senza un piumaggio completo, necessitano un nostro intervento. Se possibile, vanno rimessi nel nido e monitorati da lontano (per vedere se i genitori si avvicinano, anche 4-5 ore). Se completamente ricoperti di piume e penne, sono nella fase di esplorazione e apprendimento: stanno facendo le prove di volo,  non vanno prelevati dal territorio e sottratti alle cure dei genitori, che li controllano e li alimentano ancora di tanto in tanto. Uccelli che nascono ricoperti di piumino (civette, gheppi, allocchi, colombacci…): se trovati in questa fase, vanno ricollocati o messi in un nido artificiale protetto (es. scatola) in un punto accessibile per i genitori, che continueranno a prendersi cura del pullo (contattare il C.R.A.S. per chiedere consigli specifici).  Una volta sviluppato il piumaggio, invece, vale il discorso come sopra. Questa è una fase fondamentale per la crescita dell'animale che, se privato di essa, avrà minori possibilità di sopravvivere in futuro.",
    },
    {
      title: "Rondoni, Rondini e Balestrucci",
      image: "sos-animal/cards/7-swift.png",
      description:
        "Solitamente, i nidi di rondini e balestrucci sono ben visibili e, se troviamo un pulcino in buone condizioni, va ricollocato nel nido. Questi animali sono caratterizzati da zampe estremamente corte (in particolare, i rondoni) poiché sono estremamente specializzati nella vita in volo. Per questo motivo, potrebbero far fatica a spiccare il volo da terra, (questo vale anche per gli esemplari adulti!). Un rondone a terra, va sempre soccorso. Si può contattare il C.R.A.S. e richiedere assistenza tramite invio di foto per valutare se tentare una reimmissione in natura o se necessario un ricovero.",
    },
  ],
});
