// МАССИВЫ

// В JavaScript массивы могут быть использованы для хранения различных типов данных, включая числа, строки, объекты и функции в определённом порядке.



// Для создания массива в JavaScript можно использовать: квадратные скобки, метод Array.of, конструктор new Array()
let toDoList = ['почитать', 'помыть посуду', 'помыть машину'];
let myToDoList = Array.of('почитать', 'помыть посуду', 'помыть машину');
let superToDoList = new Array('почитать', 'помыть посуду', 'помыть машину');

// Свойство length используется для получения количества элементов в массиве. 
let tasksCount = toDoList.length;

// Для доступа к конкретным элементам массива используется синтаксис array[index]. 
// Индекс начинается с 0, поэтому первый элемент массива имеет индекс 0, а последний элемент имеет индекс array.length - 1.

const firstElement = toDoList[0]; // 'почитать'
const lastElement = toDoList[toDoList.length - 1]; // 'помыть машину'

// Для замены элемента в массиве используется тот же синтаксис, что и для доступа к элементу: array[index] = value. 
// Если вы хотите заменить первый элемент массива, укажите индекс 0 и новое значение:

let newToDoList = ['почитать', 'помыть посуду', 'помыть машину'];
toDoList[0] = 'прогуляться';
console.log(toDoList); // ['прогуляться', 'помыть посуду', 'помыть машину'];

// В JavaScript массивы имеют несколько встроенных методов, которые позволяют легко добавлять, удалять и манипулировать элементами в массиве.

// Метод push() добавляет элемент в конец массива и возвращает новую длину массива.
// Метод pop() удаляет последний элемент из массива и возвращает его.
// Метод shift() удаляет первый элемент из массива и возвращает его.
// Метод unshift() добавляет элемент в начало массива и возвращает новую длину массива.


// Метод slice() 
// Создает новый массив из части исходного массива. Это позволяет выбрать определенные элементы из исходного массива и поместить их в новый массив
// Например, если у нас есть список дел toDoList, мы можем использовать метод slice() для выборки первых двух дел из списка:
let toDoList = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];
let firstTwoTasks = toDoList.slice(0, 2);
console.log(firstTwoTasks); // Вывод: ['почитать', 'помыть посуду']
 
// Метод splice() 
//Добавляет и удаляет элементы из массива по индексу. Он также возвращает массив элементов, которые были удалены. Так можно удалить один элемент из середины массива
let toDoList = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];
let deletedTask = toDoList.splice(1, 1);
console.log(deletedTask); // ['помыть посуду']
console.log(toDoList); // ['почитать', 'помыть машину', 'посадить цветы']

 
 
// Как итерировать массив с помощью цикла for of
// В JavaScript вы можете использовать цикл for...of для итерации массива
let toDoList = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];

for (const task of toDoList) {
  console.log(task);
}

// почитать
// помыть посуду
// помыть машину
// посадить цветы

//Одним из главных преимуществ цикла for...of является то, что он прост в использовании. Он позволяет итерировать массив без необходимости указывать индексы. Вместо этого мы можем обращаться к элементам массива, используя переменную task, которая будет иметь значение каждого элемента массива по очереди. Это делает наш код более читаемым и понятным.