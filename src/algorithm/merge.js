export default function merge(a, b) {
    let i = 0;
    let j = 0;
    let temp = [];
    let count = a.count + b.count;
    let trades = a.trades.concat(b.trades);

    while(i < a.arr.length && j < b.arr.length) {
        if(a.arr[i] > b.arr[j]) {
            temp.push(b.arr[j]);
            const qtdTrades = a.arr.length - i;
            count += qtdTrades;
            if (qtdTrades > 1) {
                for(let z = 0; z < qtdTrades; z++) {
                    trades.push([a.arr[a.arr.length - 1 - z], b.arr[j]])
                }
            } else {
                trades.push([a.arr[a.arr.length - 1], b.arr[j]])
            }
            j++;
        } else {
            temp.push(a.arr[i]);
            i++;
        }
    }
    temp = [...temp, ...a.arr.slice(i), ...b.arr.slice(j)]
    return { arr: temp, count, trades }
}