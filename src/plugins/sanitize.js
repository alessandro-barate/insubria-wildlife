import { sanitizeFormInput, sanitizeHTML } from "../utils/sanitize";

export default {
  install: (app) => {
    app.config.globalProperties.$sanitize = sanitizeHTML;
    app.config.globalProperties.$sanitizeForm = sanitizeFormInput;
  },
};
