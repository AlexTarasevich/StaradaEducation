// МЕТОДЫ МАССИВОВ


//forEach 
// – (буквально переводится как “для каждого”) - метод массивов, который проходит по всем его элементам и выполняет для каждого из них функцию, переданную в качестве аргумента.

const users = ['Ivan', 'Petr', 'Anna'];
users.forEach(user => {
  console.log(user);
});

// Ivan
// Petr
// Anna


// Поиск
// Поиск по массиву - одна из самых популярных операций, для этого есть несколько методов и способов. Сегодня мы рассмотрим базовые

// find
// Метод find ищет первый элемент, удовлетворяющий условию, переданному в качестве функции. Он возвращает значение этого элемента не меняя исходный массив.
// Находим первое отрицательное число в массиве и получаем его значение.
const numbers = [1, 11, -2, 3, -10, 4];
const firstNegativeNumber = numbers.find(number => number < 0);
console.log(firstNegativeNumber); // -2
 
// Этот метод можно использовать для поиска объектов в массиве. Ищем пользователя с именем Petr и получаем его объект.
const newUsers = [
  { name: 'Ivan', age: 18 },
  { name: 'Petr', age: 25 },
  { name: 'Anna', age: 20 }
];

const user = newUsers.find(user => user.name === 'Petr');
console.log(user); // { name: 'Petr', age: 25 }

// findIndex
// Аналогично методу find, метод findIndex ищет первый элемент, удовлетворяющий условию, переданному в качестве функции, но возвращает индекс этого элемента вместо значения.
// Находим индекс первого отрицательного числа в массиве и получаем его значение.
const superNumbers = [1, 11, -2, 3, -10, 4];
const firstNegativeNumberIndex = superNumbers.findIndex(number => number < 0);
console.log(firstNegativeNumberIndex); // 2

numbers[firstNegativeNumberIndex]; // -2

// indexOf
// Метод indexOf возвращает позицию первого вхождения элемента в массив. Он принимает два аргумента - элемент для поиска и начальная позиция.
// Находим индекс первого вхождения строки lion и получаем его значение.
const newAnimals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const lionIndex = newAnimals.indexOf('lion');
console.log(lionIndex); // 4
 
// Используя начальную позицию, мы можем найти индекс второго вхождения строки lion.
const superAnimals = ['cat', 'dog', 'elephant', 'lion', 'tiger', 'lion'];
const secondLionIndex = superAnimals.indexOf('lion', 4);
console.log(secondLionIndex); // 5
 
// includes
// Метод includes проверяет наличие элемента в массиве и возвращает true или false. Принимает два аргумента - элемент для поиска и начальная позиция.
const ultraAnimals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const isElephantIncluded = ultraAnimals.includes('elephant');
console.log(isElephantIncluded); // true

// filter
// Метод filter позволяет фильтровать элементы массива по заданному условию. Он принимает в качестве аргумента функцию, которая в каждой итерации выполняет проверку элемента массива и возвращает true или false. Те элементы, которые прошли проверку, сохраняются в новый массив, который и возвращает метод filter
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const longWords = animals.filter(word => word.length > 5);
console.log(longWords); // ['elephant']
 
// Также метод filter можно использовать для поиска объектов в массиве. Например, мы хотим получить массив пользователей старше 18 лет из массива users.
const allUsers = [
  { name: 'Ivan', age: 18 },
  { name: 'Petr', age: 25 },
  { name: 'Anna', age: 20 }
];

const adults = allUsers.filter(user => user.age > 18);
console.log(adults); // [{ name: 'Petr', age: 25 }, { name: 'Anna', age: 20 }]


// map
// Метод map принимает в качестве аргумента функцию и применяет ее к каждому элементу массива. Функция принимает два аргумента - текущий элемент массива и его индекс, и возвращает новое значение, которое затем добавляется в новый массив.
// Например, мы хотим получить новый массив строк с большими буквами.
const allAnimals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const upperCaseAnimals = animals.map(word => word.toUpperCase());
console.log(upperCaseAnimals); // ['CAT', 'DOG', 'ELEPHANT', 'TIGER', 'LION']
 
// Также метод map можно использовать для преобразования объектов в массиве. Это очень частый случай применения map
// Например, мы хотим получить новый массив имен пользователей
const myUsers = [
  { name: 'Ivan', age: 18 },
  { name: 'Petr', age: 25 },
  { name: 'Anna', age: 20 }
];

const userNames = users.map(user => user.name);
console.log(userNames); // ['Ivan', 'Petr', 'Anna']


// sort
// Метод sort предназначен для сортировки элементов массива. Он принимает в качестве аргумента функцию, которая принимает два элемента и возвращает 1, 0 или -1, в зависимости от того, должен ли первый элемент быть после второго (1), остаться на той же позиции (0) или быть раньше второго (-1). Звучит немного запутано, на практике тоже выглядит неочевидно, но привыкнуть можно 😀

// Метод sort изменяет исходный массив. Это значит что после вызова arr.sort() у вас больше не будет доступа к прошлым данным в таком же порядке. Они сортируются “на месте”
 
// Отсортировать массив чисел по возрастанию
const number = [1, 11, -2, 3, -10, 4];
const sortedNumbers = number.sort((a, b) => a - b);
console.log(sortedNumbers); // [-10, -2, 1, 3, 4, 11]
 
// Также метод sort можно использовать для сортировки объектов в массиве
const openUsers = [
  { name: 'Ivan', age: 18 },
  { name: 'Petr', age: 25 },
  { name: 'Anna', age: 20 }
];

const sortedUsers = openUsers.sort((user1, user2) => user1.age - user2.age);
console.log(sortedUsers);
/*
[
  { name: 'Ivan', age: 18 },
  { name: 'Anna', age: 20 },
  { name: 'Petr', age: 25 }
]
*/



// concat
// Метод concat позволяет объединить два или более массивов в один. Он принимает в качестве аргументов один или более массивов, а в качестве результата возвращает новый массив, состоящий из элементов, которые были в переданных массивах.
const animals1 = ['cat', 'dog', 'elephant'];
const animals2 = ['tiger', 'lion'];

const ultrAnimals = animals1.concat(animals2);
console.log(ultrAnimals); // ['cat', 'dog', 'elephant', 'tiger', 'lion']

// split и join
// Метод split позволяет разделить строку на массив подстрок, используя заданный разделитель. Он принимает в качестве аргумента разделитель и возвращает массив подстрок.
const strings = 'cat,dog,elephant';
const animalss = string.split(',');
console.log(animalss); // ['cat', 'dog', 'elephant']
 
// Метод join позволяет соединить массив подстрок в одну строку, используя заданный разделитель. Он принимает в качестве аргумента разделитель и возвращает новую строку.
const byAnimals = ['cat', 'dog', 'elephant'];
const stringss = byAnimals.join('-');
console.log(stringss); // 'cat-dog-elephant'

// reverse
// Метод reverse предназначен для перестановки элементов массива в обратном порядке. Он не принимает параметров и возвращает исходный массив с переставленными элементами
const words = ['cat', 'dog', 'elephant'];
const reversedWords = words.reverse();
console.log(reversedWords); // ['elephant', 'dog', 'cat']
 
// Array.isArray
// Метод Array.isArray проверяет, является ли аргумент массивом. Он принимает в качестве аргумента любое значение и возвращает true если аргумент является массивом, и false в противном случае.
const animalsss = ['cat', 'dog', 'elephant'];
const isArrayyy = Array.isArray(animalsss);
console.log(isArrayyy); // true
 
// Является ли string массивом.
const string = 'cat,dog,elephant';
const isArray = Array.isArray(string);
console.log(isArray); // false
 