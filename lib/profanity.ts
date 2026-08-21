// Filtro básico, solo como primer aviso al usuario antes de enviar.
// No es la protección real — esa la da la revisión manual en Firebase
// (toda reseña entra con approved:false hasta que tú la apruebas).
const BLOCKED_WORDS = [
  "puta",
  "puto",
  "mierda",
  "pendejo",
  "pendeja",
  "cabron",
  "cabrón",
  "verga",
  "chinga",
  "idiota",
  "estupido",
  "estúpido",
  "fuck",
  "shit",
  "bitch",
  "asshole",
];

export function containsProfanity(text: string): boolean {
  const normalized = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  return BLOCKED_WORDS.some((word) => normalized.includes(word));
}
