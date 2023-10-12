function decodeHtmlEntities(str) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
}

export function formatForMarkdown(text) {
  if (!text) return "";
  let decodedText = decodeHtmlEntities(text);
  // Replace #, ##, ### immediately followed by text with a space
  decodedText = decodedText.replace(/(^|\s)(#{1,3})(\S)/g, "$1$2 $3");

  // Replace > immediately followed by text with a space
  decodedText = decodedText.replace(/(^|\s)(>)(\S)/g, "$1$2 $3");

  return decodedText;
}
