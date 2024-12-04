import DOMPurify from "dompurify";

export const sanitizeHTML = (html) => {
  const config = {
    ALLOWED_TAGS: ["br", "strong", "a", "ul", "li", "p", "span", "h4"],
    ALLOWED_ATTR: ["href", "target", "class"],
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
