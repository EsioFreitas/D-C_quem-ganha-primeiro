import shuffleArray from './shuffle';

export default function generateRandomValues() {
    const max = 10;
    const min = 6;
    const randomValue = Math.floor(Math.random() * (max - min)) + min;
    const valuesArray = Array.from({ length: randomValue }, (_, i) => i + 1);
    return shuffleArray(valuesArray);
}