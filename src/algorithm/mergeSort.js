import merge from "./merge";

export default function mergeSort(obj) {
  if (obj.arr.length === 1) {
    return obj;
  }
  let middle = Math.floor(obj.arr.length / 2);
  let left = {
    arr: obj.arr.slice(0, middle),
    count: obj.count,
    trades: obj.trades,
  };
  let right = {
    arr: obj.arr.slice(middle),
    count: obj.count,
    trades: obj.trades,
  };
  let result = merge(mergeSort(left), mergeSort(right));
  return result;
}
