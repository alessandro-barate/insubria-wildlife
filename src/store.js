import { reactive } from "vue";

export const store = reactive({
  visions: [
    {
      description:
        "Diventare un faro nella promozione sociale, creando una comunità vibrante di cittadini consapevoli e attivi nella conservazione di ambiente e fauna.",
      image: "1",
    },
    {
      description:
        "Realizzare un centro di recupero per la fauna all'avanguardia, dove gli animali selvatici in difficoltà trovano cura e vengono reimmessi nel territorio di appartenenza, mantenendone le caratteristiche selvatiche.",
      image: "2",
    },
    {
      description:
        "Creare un luogo nel quale il volontariato può prendere parte in diverse forme, ed è un'attività sempre stimolante e formativa.",
      image: "3",
    },
    {
      description:
        "Stabilire collaborazioni con università, enti di ricerca e istituzioni, per contribuire attivamente alla conoscenza e alla ricerca scientifica.",
      image: "4",
    },
    {
      description:
        "Creare una rete tra i professionisti del settore, per rendere le nostre azioni trasparenti e omogenee sul territorio, per arricchirci con stimoli provenienti da altre aree italiane e da oltre confine.",
      image: "5",
    },
  ],
});