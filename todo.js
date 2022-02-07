const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
  "Learn JS": "In Progress",
};


function addTask(task) {
  list[task] = "To Do";
}

function changeStatus(task, status) {
  switch (status) {
    case "inProgress":
      list[task] = "In Progress";
      break;
    case "done":
      list[task] = "Done";
      break;
    case "todo":
      list[task] = "To Do";
      break;
    default:
      break;
  }
}

function deleteTask(task) {
  delete list[task];
}
function showList(obj) {
  let resultToDo = "To Do:\n";
  let resultInProgress= "In Progress:\n"
  let resultDone="Done:\n"
  for (key in obj) {
    switch (obj[key]) {
      case "To Do":
        resultToDo += `${key}\n`;
        break;
      case "In Progress":
        resultInProgress += `${key}\n`;
        break;
      case "Done":
        resultDone += `${key}\n`;
        break;
    }
  }
  return resultToDo+resultInProgress+resultDone;
}

console.log(showList(list));

// console.log(list);
// addTask("Learn JS");
// console.log(list);
// changeStatus("Learn JS", "done");
// console.log(list);
// deleteTask("Learn JS")
// console.log(list);
