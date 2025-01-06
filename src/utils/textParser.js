export const parseTranslationText = (text) => {
  if (!text) return "";

  const rules = [
    // Tag strong usando *testo*
    {
      pattern: /\*(.*?)\*/g,
      replacement: "<strong>$1</strong>",
    },

    // Tag em (italico) usando _testo_
    {
      pattern: /_(.*?)_/g,
      replacement: "<em>$1</em>",
    },

    // Tag span usando [testo]
    {
      pattern: /\[(.*?)\]/g,
      replacement: "<span>$1</span>",
    },
  ];

  return rules.reduce((parsedText, rule) => {
    return parsedText.replace(rule.pattern, rule.replacement);
  }, text);
};
