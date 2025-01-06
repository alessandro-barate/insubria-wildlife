<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { sanitizeHTML } from "../utils/sanitize";
import { parseTranslationText } from "../utils/textParser";

export default {
  name: "TranslatedText",
  props: {
    textKey: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { t } = useI18n();

    const translatedText = computed(() => {
      const translated = t(props.textKey);
      const parsed = parseTranslationText(translated);
      return sanitizeHTML(parsed);
    });

    return {
      translatedText,
    };
  },
};
</script>

<template>
  <p v-html="translatedText" class="paragraph"></p>
</template>
