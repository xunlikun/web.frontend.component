import cartesianProduct from '../src/index';

let set1 = [1, 2],
    set2 = ['+', '-'],
    set3 = [8, 9],
    sets = [set1, set2, set3];

console.log(JSON.stringify(sets));
console.log(JSON.stringify(cartesianProduct(sets)));