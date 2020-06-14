## Table of Contents
Live Demo [Demo](https://arun-todo-listap.netlify.app/).



## Aproach And Logic

Create React App is divided into two packages:

* Fisrt created new project using `create-react-app` command.
* In `index.js` created a class `Todolist` with intial state in contructor `todolist`,`search`,`task`,`editid` .
* `todolist` is `array` collection of task list with object `title` as task name and `toggle` for indentifing task status completed or not.
* `search` is search input value and `task` is task input value and `editid` is id or index of task to be edited
* if new task is submitted then it is handle by `handleSubmit` in which if `editid` is not present then it will create new task or it will edit replace existing task.
* when we click on edit task it will set this value to add task input and `editid` value as the array index of the task then when user sumit the edited text then it will replace the text of specified index at `editid` state and change `editid` as false so when new task can be added.    
* App is hosted in netlify.com in which i just provided the git repo access then created a build and published to the url