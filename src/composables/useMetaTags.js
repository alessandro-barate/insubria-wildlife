import { createMetaManager } from "vue-meta";

export const useMetaTags = (description) => {
  useMeta({
    title: "Insubria WildLife",
    meta: [
      {
        name: "description",
        content: description,
      },
    ],
  });
};
