// const numbers = [1,2,3,4,5];
//
// const newArrNumbers = numbers.map(number => {
//     return {age: number}
// });
//
// console.log(newArrNumbers)

const worlds = ['hello', 'my', 'dear', 'men'];

const worldInfo = worlds.map((word, index, array) => {
    return {
        originArr: array,
        orderNumber: index + 1,
        lettersCount: word.length
    }
});

console.log( worldInfo)