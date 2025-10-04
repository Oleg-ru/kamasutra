console.log('***********Задача 1**********')
const numbers = [1, 15, 3, 42, 8, 19, 7, 25, 11, 33];

//Четные числа
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Найди числа больше 10
const bigNumbers = numbers.filter(num => num > 10);
console.log(bigNumbers);

// Найди первое число больше 20
const firstBig = numbers.find(num => num > 20);
console.log(firstBig);


console.log('***********Задача 2**********')
const students = [
    { name: "Анна", age: 19, grade: 7, course: 2 },
    { name: "Диана", age: 17, grade: 8, course: 1 },
    { name: "Виктория", age: 21, grade: 5, course: 3 },
    { name: "Григорий", age: 18, grade: 9, course: 2 },
    { name: "Борис", age: 20, grade: 4, course: 3 },
    { name: "Евгений", age: 16, grade: 6, course: 1 },
]

// Найди студентов 18+ лет
const adults = students.filter(student => student.age >= 18);
console.log(adults);


// Найди студентов с оценкой 8+
const excellentStudents = students.filter(student => student.grade >= 8);
console.log(excellentStudents);

// Найди студентов 2 курса
// const secondCourse = students.filter(student => student.course === 2);
// console.log(secondCourse);


// Найди взрослых студентов с оценкой выше 6
const adultGoodStudents = students.filter(student => student.age >= 18 && student.grade > 6);
console.log(adultGoodStudents);

// Найди студента по имени 'Виктория'
const victoria = students.find(student => student.name === 'Виктория');
console.log(victoria);

// Найди первого студента с оценкой 8+
// const firstExcellent = students.find(student => student.grade >= 8);
// console.log(firstExcellent);

// Попытайся найти студента младше 16 лет
const tooYoung = students.find(student => student.age < 16);
console.log(tooYoung) // должно быть undefined


// 1. Функция для проверки совершеннолетия
function isAdult(person) {
    return person.age >= 18;
}

// 2. Функция для проверки отличника (8+)
function isExcellent(student) {
    return student.grade >= 8;
}

// 3. Функция для проверки курса
function isSecondCourse(student) {
    return student.course === 2;
}

console.log('***********Задача 3**********')
// Используй эти функции с методами filter и find
const adultStudents = students.filter((student) => isAdult(student));
const firstExcellent = students.find(student => isExcellent(student));
const secondCourse = students.filter(student => isSecondCourse(student));
const firstSecondCourse = students.find(student => isSecondCourse(student));

console.log(adultStudents)
console.log(firstExcellent)
console.log(secondCourse)
console.log(firstSecondCourse)


console.log('***********Задача 4**********')

const colors = ["красный", "синий", "зелёный", "жёлтый", "фиолетовый"]

// 1. Найди цвета с четными индексами (0, 2, 4...)
const evenIndexColors = colors.filter((color, index) => index % 2 === 0);
console.log(evenIndexColors)

// 2. Найди первый цвет, индекс которого больше 2
const colorAfterIndex2 = colors.find((color, index) => index > 2);
console.log(colorAfterIndex2)


console.log('***********Задача 5**********')
/*
Анализ сложности (теоретическая)
Ответь на вопросы:
Если в массиве 1000 элементов, сколько раз максимально может выполниться предикат в методе filter?
    1000 раз т.к предикат пройдется всегда по всем элементам в массиве.
Сколько раз максимально может выполниться предикат в методе find для того же массива?
    1000 при условии что в массиве не будет искомого элемента
В каком случае метод find будет работать быстрее всего?
    Если искомый элемент будет первым (0 Index)
Почему сложность обоих методов считается O(n)?
    Т.к у них линейно изменяется сложность, при увеличении кл-ва объектов в массиве растет предсказуемо скорость выполнения
 */