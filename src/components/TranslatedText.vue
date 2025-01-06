<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
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
      return parseTranslationText(t(props.textKey));
    });

    return {
      translatedText,
    };
  },
};
</script>
