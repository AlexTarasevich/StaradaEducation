// ЦИКЛЫ 

// Если функции нужны чтобы вызывать один и тот же блок кода в разных местах и с разными параметрами, то циклы нужны чтобы повторять один и тот же блок кода.


// ЦИКЛ WHILE 
let b = 1;
while (i < 4) {
  console.log(i)
  b = b + 1;
}

let i = 1
while (i <= 19){
    console.log(i);
    i++
}

// ЦИКЛ FOR 

for (let j = 1; j < 4; j++) {
    console.log(j);
  }

// Директива BREAK
while (true) {
	console.log('начало');
	//*break;*
  console.log('конец, который не случится');
}
console.log('конец');


// Директива Continue

for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    // *if (i % 2 == 0) continue;*
    console.log(i); // 1, затем 3, 5, 7, 9
  }