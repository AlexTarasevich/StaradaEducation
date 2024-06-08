
let tasks = [];


tasks.push({ name: "Buy milk", status: "pending" });
tasks.push({ name: "Walk the dog", status: "pending" });
tasks.push({ name: "Do laundry", status: "pending" });


console.log("Текущая таска:");
tasks.forEach((task) => console.log(`Name: ${task.name}, Status: ${task.status}`));


tasks = tasks.filter((task) => task.name !== "Walk the dog");
console.log("Таска после удаления 'Walk the dog':");
tasks.forEach((task) => console.log(`Name: ${task.name}, Status: ${task.status}`));


tasks = tasks.map((task) => task.name === "Do laundry" ? { name: "Do dishes", status: task.status } : task);
console.log("Таска после изменения 'Do laundry' to 'Do dishes':");
tasks.forEach((task) => console.log(`Name: ${task.name}, Status: ${task.status}`));


console.log("Текущая таскаs:");
tasks.forEach((task) => console.log(`Name: ${task.name}, Status: ${task.status}`));