export default function merge(a, b) {
    let i = 0;
    let j = 0;
    let temp = [];
    let count = a.count + b.count;
    let trades = a.trades.concat(b.trades);

    while(i < a.arr.length && j < b.arr.length) {
        if(a.arr[i] > b.arr[j]) {
            temp.push(b.arr[j]);
            for (let z = 0; z < a.arr.length - i; z++) {
                trades.push([a.arr[a.arr.length - i - z - 1], b.arr[j]])
            }
            j++;
            count += a.arr.length - i;
        } else {
            temp.push(a.arr[i]);
            i++;
        }
    }
    temp = [...temp, ...a.arr.slice(i), ...b.arr.slice(j)]
    return { arr: temp, count, trades }
}