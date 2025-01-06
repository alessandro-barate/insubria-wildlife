export const parseTranslationText = (text) => {
  if (!text) return "";

  const rules = [
    // Strong tag using *text*
    {
      pattern: /\*(.*?)\*/g,
      replacement: (match, content) => `<strong>${content}</strong>`,
    },

    // Span tag using [text]
    {
      pattern: /\[(.*?)\]/g,
      replacement: (match, content) => `<span>${content}</span>`,
    },
    // Line breaks
    {
      pattern: /\\n\\n/g,
      replacement: "<br><br>",
    },
  ];

  let parsedText = text;
  rules.forEach((rule) => {
    parsedText = parsedText.replace(rule.pattern, rule.replacement);
  });

  return parsedText;
};
