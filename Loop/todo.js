let todo = [];

let task = prompt("Enter your tasks");

while (true) {
  if (task === "quit") {
    console.log("-----------------");
    console.log("Closing To-Do List");
    break;
  }

  if (task === "list") {
    console.log("-----------------");
    if (todo.length === 0) {
      console.log("No tasks to display.");
    } else {
      for (let i = 0; i < todo.length; i++) {
        console.log(i + 1, todo[i]);
      }
    }
    console.log("Tasks are listed successfully!");
  } else if (task === "add") {
    console.log("-----------------");
    let add = prompt("ADD a task");
    todo.push(add);
    console.log("Task is added successfully!");
  } else if (task === "delete") {
    console.log("-----------------");
    let idx = prompt("Enter the task number to delete that");
    idx = parseInt(idx);
    if (!isNaN(idx) && idx >= 1 && idx <= todo.length) {
      todo.splice(idx - 1, 1);
      console.log("Task is deleted successfully!");
    } else {
      console.log("Invalid task number!");
    }
  } else {
    console.log("Invalid input, please enter again!");
  }

  task = prompt("Enter your tasks");
}
