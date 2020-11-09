import shuffleArray from "./shuffle";

export default function generateRandomValues() {
  const max = 15;
  const min = 15;
  const randomValue = Math.floor(Math.random() * (max - min)) + min;
  const valuesArray = Array.from({ length: randomValue }, (_, i) => i + 1);
  return shuffleArray(valuesArray);
}
