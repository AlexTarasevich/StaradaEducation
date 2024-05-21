// ПРЕОБРАЗОВАНИЕ ТИПОВ И БАЗОВЫЕ ОПЕРАТОРЫ

console.log('1' + 1); // 11
console.log(22 + 'mango'); // 22mango
console.log(true + true); // 2


Number(undefined); // NaN
Number(null); // 0
Number(true); // 1
Number('string'); // NaN
Number('123'); // 123

/* null и undefined ведут себя по-разному. Так, null становится нулём, тогда как undefined приводится к NaN. */

// ИНКРЕМЕНТ ++
let counter1 = 2;
counter1++; // работает как counter = counter + 1, просто запись короче
console.log( counter1 ); // 3

// ДЕКРЕМЕНТ --
let counter2 = 2;
counter2--; // работает как counter = counter - 1, просто запись короче
console.log( counter2 ); // 1