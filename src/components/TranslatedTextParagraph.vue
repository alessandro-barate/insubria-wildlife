<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { sanitizeHTML } from "../utils/sanitize";
import { parseTranslationText } from "../utils/textParser";

export default {
  name: "TranslatedTextParagraph",
  props: {
    textKey: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { t } = useI18n();

    const translatedTextParagraph = computed(() => {
      const translated = t(props.textKey);
      const parsed = parseTranslationText(translated);
      const sanitized = sanitizeHTML(parsed);

      return sanitized;
    });

    return {
      translatedTextParagraph,
    };
  },
};
</script>

<template>
  <p v-html="translatedTextParagraph"></p>
</template>
