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

    // Span tag using [text]
    {
      pattern: /\_(.*?)\_/g,
      replacement: (match, content) => `<em>${content}</em>`,
    },

    // Double line breaks
    {
      pattern: /\u000A\u000A/g,
      replacement: "<br><br>",
    },

    // Single line break
    {
      pattern: /\u000A/g,
      replacement: "<br>",
    },
  ];

  let parsedText = text;
  rules.forEach((rule) => {
    parsedText = parsedText.replace(rule.pattern, rule.replacement);
  });

  return parsedText;
};
