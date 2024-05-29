// Объекты: подробнее

// МУТАЦИИ

// можно удалять и добавлять свойства в объект, объявленный через const? и не будет ошибки.
// Это нормальное поведение потому что мы меняем структуру объекта, но не сам объект целиком. Мы не присваиваем новое значение, мы лишь что-то меняем в значении текущем.


// ДИНАМИЧЕСКОЕ ИМЯ СВОЙСТВА
// Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. Например, имя свойства может храниться в переменной
const phoneBook = {
	list: {
		"John": 123456789,
		"Jane Doe": 987654321,
		"Jim Smith": 111111111
	}
};

const fullName = 'Jane Doe'
console.log(phoneBook.list[fullName]); // 987654321



// ОПЕРАТОР IN

// Как проверить наличие свойства у объекта? Например, если мы хотим убедиться что такое имя в книге уже записано и только в таком случае вывести его в консоль
// При обращении к несуществующему свойству - получим в ответ undefined. Это значит как минимум две вещи: если свойства нет - ошибки не будет, если значение свойства равно undefined - мы ложно решим что такого свойства нет.


const newPhoneBook = {
	list: {
		"John": 123456789,
		"Jane Doe": 987654321,
	}
};

console.log("John" in newPhoneBook.list); // true



// Цикл For ... im
// Иногда необходимо просмотреть все свойства объекта для вывода информации или проверки данных. Для этого можно использовать цикл for..in

for (key in object) {
    // тело цикла
  }


  const superPhoneBook = {
    list: {
      "John": 123456789,
      "Jane Doe": 987654321,
      "Jim Smith": 111111111
    },
  };
  
  for (const name in superPhoneBook.list) {
    console.log(name); // John Jane Doe Jim Smith
    console.log(superPhoneBook.list[name] ); // 123456789
  }


// УПОРЯДОЧЕНИЕ СВОЙСТВ ОБЪЕКТА
// Свойства упорядочены так: свойства с целочисленными ключами сортируются по возрастанию, остальные располагаются в порядке создания

// КОРОТКАЯ ЗАПИСЬ 

const John = 'John';
const Pete = 'Pete';
const list = { // объект list
	John, // такая запись значит John: John
	Pete // а эта Pete: Pete - свойство Pete со значением из переменной Pete // 🤯
};
const UltraPhoneBook = {
	list // а здесь свойство list со значением из переменной list
}