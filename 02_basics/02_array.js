const marvel = ["thor", "Ironman", "spiderman"]

const dc = ["superman", "flash", "batman" ]

marvel.push(dc)

// console.log(marvel)
// console.log(marvel[3][1])  not good to practice

// const hero = marvel.concat(dc)
// console.log(hero) not mostly used but many people use it 

const all_new_heros = [...marvel, ...dc]
console.log(all_new_heros)

const another_array = [1, 2 ,3, [2,4,6,7, [5,7,3]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)