import DOMPurify from "dompurify";

export const sanitizeHTML = (html) => {
  const config = {
    ALLOWED_TAGS: ["a", "p", "br", "em", "h4", "li", "ul", "span", "strong"],
    ALLOWED_ATTR: ["href", "class", "target"],
    ALLOW_DATA_ATTR: false,
    SAFE_FOR_TEMPLATES: true,
    RETURN_DOM: false,
    RETURN_DOM_FRAGMENT: false,
    RETURN_DOM_IMPORT: false,
    FORCE_BODY: false,
    SANITIZE_DOM: true,
  };

  return DOMPurify.sanitize(html, config);
};

export const sanitizeFormInput = (input) => {
  const formConfig = {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    ALLOW_DATA_ATTR: false,
    SAFE_FOR_TEMPLATES: true,
    RETURN_DOM: false,
    RETURN_DOM_FRAGMENT: false,
    RETURN_DOM_IMPORT: false,
    FORCE_BODY: false,
    SANITIZE_DOM: true,
  };

  return DOMPurify.sanitize(input, formConfig);
};
