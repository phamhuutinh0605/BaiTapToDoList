import TaskServise from "./Task-Service.js";
import Task from "./Task.js";
// import Task from "./Task.js";

const getEle = (id) => document.getElementById(id);
const taskservice = new TaskServise();


//render data
const renderData = (arr) => {
  const html = arr?.reduce((contentHTML, task) => {
    return (contentHTML += `
        <li>
        <span>${task.textTask}</span>
        <div class="buttons">
          <button class="remove" >
            <i class="fa fa-trash-alt" onclick="deleteTask(${task.id})"></i>
          </button>
          <button class="complete">
            <i class="far fa-check-circle"></i>
            <i class="fas fa-check-circle"></i>
          </button>
        </div>
      </li>
        `)
  });
  getEle("todo").innerHTML = html;

}

//fetch data
const getToDoList = () => {
  taskservice.getListTask()
    .then(result => {
      renderData(result.data);
    })
    .catch(error => {
      console.log(error);
    })
}
getToDoList();


//delete task
const deleteTask = (id) => {
  taskservice.deleteListTask(id)
    .then(() => {
      alert("Delete success!");
      getToDoList();
    })
}
window.deleteTask = deleteTask;


//add Task
const addTask = () => {
  const value = getEle("newTask").value;
  const check = "";
  if (value.trim() != "") {
    const task = new Task("", value, check);
    taskservice.addListTask(task)
      .then(() => {
        getToDoList(task);
        console.log(task);
        alert("Add success! ");
        getEle("newTask").value="";
      })
  } else {
    alert("Task Empty!")
  }
}
window.addTask = addTask;

let isLoading = false;
const checkTask = () => {
  getEle("todo").addEventListener("change", (event) => {
    const { value } = event.target;
    taskservice.getListTask()
      .then(() => {
        value.filter((result) => result.status == value)
      })
    renderData()
  })
}
window.checkTask=checkTask;