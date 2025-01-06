export const parseTranslationText = (text) => {
  if (!text) return "";

  const rules = [
    // Strong tag using *text*
    {
      pattern: /\*(.*?)\*/g,
      replacement: "<strong>$1</strong>",
    },

    // Italic tag using _text_
    {
      pattern: /_(.*?)_/g,
      replacement: "<em>$1</em>",
    },

    // Span tag using [text]
    {
      pattern: /\[(.*?)\]/g,
      replacement: "<span>$1</span>",
    },
    // Line breaks
    {
      pattern: /\\n/g,
      replacement: "<br>",
    },
  ];

  let parsedText = text;
  rules.forEach((rule) => {
    parsedText = parsedText.replace(rule.pattern, rule.replacement);
  });

  return parsedText;
};
