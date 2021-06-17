import { random } from "../utils.ts";

type Country = "United States" | "Spain" | "United Kingdom" | "Germany" | "Canada";
type Languages = string | string[];

function getLanguaje(c: Country): Languages {
  const languajes: Record<string, string> = {
    es: "Spanish",
    de: "German",
    en: "English",
    fr: "French"
  }

  const countriesAndLanguages: Record<Country, Languages> = {
    "United States": languajes.en,
    "Spain": languajes.es,
    "United Kingdom": languajes.en,
    "Germany": languajes.de,
    "Canada": random(2) ? languajes.en : languajes.fr
  }

  return countriesAndLanguages[c];
}

console.log(getLanguaje("Canada"));