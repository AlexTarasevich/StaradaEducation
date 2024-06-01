// КОНТЕКСТ

// this - это контекст.

const myPhoneBook = {
    list: {
      "John": 123456789,
      "Jane Doe": 987654321,
    },
    add(name, number) { 
      this.list[name] = number; // здесь this === phoneBook // phoneBook === объект перед точкой
    }
  };

  function addRecord(key, value) { // функция принимает ключ и значение
	this.list[key] = value; // у объекта, который вызвал функцию, в свойстве list свойству [key] присваиваем value 
}

const phoneBook = { // создадим книгу контактов
  list: { 
    "John": 123456789,
    "Jane Doe": 987654321,
  },
	addRecord // добавляем объекту функцию addRecord
};

const toDoList = {  // создадим туду лист
	list: {
		"make a video": "open",
	},
	addRecord // добавляем объекту функцию addRecord
}

// теперь можно вызвать toDoList.addRecord с аргументами key и value
toDoList.addRecord('do something', 'open'); // в этот момент в addRecord - this === toDoList
console.log(toDoList.list); // { 'make a video': 'open', 'do something': 'open' }

// Это сложный пример, здесь происходит очень много интересных вещей: 
// во-первых, объявлена не привязанная к какому-либо объекту функция addRecord с использованием this - то есть, эта функция будет искать свойство 
// list у того объекта, который ее вызовет. Во вторых, добавили объекту функцию addRecord - так мы не дублируем один и тот же код в двух разных объектах - это не самый ловкий способ организации кода, 
// мы приводим его чтобы объяснить как работает контекст : ) В третьих, использовали функцию в контексте объекта toDoList - во время вызова функция addRecord имела this === toDoList


// СЬРЕЛОЧНАЯ ФУНКЦИЯ

// function declaration
function sum(a, b) {
	return a + b
}
sum(1, 2); // 3

// стрелочная функция
const sum = (a, b) => a + b; // можно не писать return для возврата значения 
sum(1, 2); // 3

// Стрелочная функция принимает два параметра a и b, возвращает результат выражения a + b.  
// В случае записи без скобок писать return необязательно, это делает запись еще короче.