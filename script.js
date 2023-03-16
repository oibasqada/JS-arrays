//lesson-js07--16-03-2023

// function returnName(names) {
//     const result = names.filter((el) => el.toLowerCase().includes('i'))
//     return result
// }
//
// console.log(returnName(['misha', 'Ivan', 'Petr', 'Niko', 'VaSYA', 'masha', 'AFONYA']))

// function returnName(names) {
//     const result = names.filter((el) => el.toLowerCase().startsWith('m'))
//     return result
// }
//
// console.log(returnName(['misha', 'Ivan', 'Petr', 'Niko', 'VaSYA', 'masha', 'AFONYA']))

// ________________________________________________________________________________________________________________________





//hwjs07--16-03-2023
//___________________


// const array = [1, 2, 3, 0, 4, 5, 6]
// const powerOf = array.map(el => el ** 2)
//
// console.log(powerOf)

//__________________________________________________________map()//

// const array = [1, 2, 3, 0, 4, 5, 6]
// const elCheck = array.map( el => el > 0)
//
// console.log(elCheck)

//__________________________________________________________map()//

// const array = [1, 2, -3, 0, 4, -5, 6]
// const elCheck = array.map( el => el < 0)
//
// console.log(elCheck)

//__________________________________________________________map()//

// const array = [1, 2, -3, 0, 4, 5, -6]
// const negative = array.filter(el => el < 0)
//
// console.log(negative)

//__________________________________________________________filter()//

// const array = [1, 2, -3, 0, 4, 5, -6]
// const evenNum = array.filter(el => el % 2 === 0)
//
// console.log(evenNum)

//__________________________________________________________filter()//

// const array = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
// const lenghtMore = array.filter(el => el.length >= 5)
//
// console.log(lenghtMore)

//__________________________________________________________filter()//

// const array = [1, 2, -3, 0, -4, 5, -6]
// const sumNum = array.filter(el => el < 0)
//
// console.log(sumNum.length)

//__________________________________________________________filter()//

// const array = [1, 2, 3, 33, 4, 5, 6]
// const accumNum = array.reduce((acc, el) => {
//     return acc + el
// })
//
// console.log(accumNum)

//__________________________________________________________reduce()//