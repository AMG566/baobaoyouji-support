(() => {
  const requested = new URLSearchParams(location.search).get("lang");
  if (requested && /^zh-(hans|cn|sg)$/i.test(requested)) return;
  const language = (requested || navigator.languages?.[0] || navigator.language || "").toLowerCase();
  const target = language.startsWith("ja") ? "ja" : /^zh-(hant|tw|hk|mo)/.test(language) ? "zh-Hant" : /^zh($|-(hans|cn|sg))/.test(language) ? "" : "en";
  if (target) location.replace(target + "/" + location.pathname.split("/").pop() + location.hash);
})();
