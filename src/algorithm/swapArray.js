export default function swap(array, a, b) {
    const indexA = array.findIndex(value => value === a);
    const indexB = array.findIndex(value => value === b);

    const arrayClone = [...array];

    arrayClone[indexA] = array[indexB];
    arrayClone[indexB] = array[indexA];

    return arrayClone;
}