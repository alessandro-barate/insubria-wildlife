import { sanitizeHTML } from "../utils/sanitize";

export default {
  install: (app) => {
    app.config.globalProperties.$sanitize = sanitizeHTML;
  },
};
