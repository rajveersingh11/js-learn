const marval_heros = ["Ironman", "Thor", "Loki"]
const dc_heros = ["Batman", "Flash", "Superman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros);
// console.log(marval_heros[3][3]);

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marval_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("rajveer"));
console.log(Array.from("rajveer"));
console.log(Array.from({name: "rajveer"})); // intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



