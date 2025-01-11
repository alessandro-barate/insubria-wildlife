import { it } from "@formkit/i18n";

const config = {
  locales: { it },
  locale: "it",
  config: {
    classes: {
      input: {
        outer: "formkit-outer",
        label: "formkit-label",
        inner: "formkit-inner",
        input: "formkit-input",
        help: "formkit-help",
        messages: "formkit-messages",
        message: "formkit-message",
      },
      textarea: {
        outer: "formkit-outer",
        label: "formkit-label",
        inner: "formkit-inner",
        input: "formkit-textarea",
        help: "formkit-help",
        messages: "formkit-messages",
        message: "formkit-message",
      },
    },
  },
};

export default config;
