
let tasks = [];


tasks.push("Task 1");
tasks.push("Task 2");
tasks.push("Task 3");


console.log("Current tasks:");
tasks.forEach((task) => console.log(task));


tasks.splice(tasks.indexOf("Task 2"), 1);


console.log("Tasks after removal:");
tasks.forEach((task) => console.log(task));