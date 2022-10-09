import './style.css';

import createTodo from './modules/create-todo.js'
import priority from './modules/priority-list.js'

function initialize() {
    addEvents()
    popupDisplay()
}
initialize()

function addEvents() {
    const newTodo = document.getElementById('new-todo');
    const submitBtn = document.getElementById('submit-todo');

    const urgentBtn = document.getElementById('urgent-todo');
    const importantBtn = document.getElementById('important-todo');
    const casualBtn = document.getElementById('casual-todo');
    
    newTodo.addEventListener('click', updateNew)
    submitBtn.addEventListener('click', updateSubmit);

    urgentBtn.addEventListener('click', )
    importantBtn.addEventListener('click', );
    casualBtn.addEventListener('click', )
    // currentBtn.addEventListener('click', );
    // nextBtn.addEventListener('click', );    
}

//Add todo fix stuff
function popupDisplay() {
    document.getElementById('popup-menu-show').style.display = 'none';
}
function updateNew() {
    document.getElementById('new-todo').style.display = 'none';
    document.getElementById('popup-menu-show').style.display = 'flex';
}
function updateSubmit() {
    document.getElementById('new-todo').style.display = 'block';
    popupDisplay()

    //Input title
    let title = document.getElementById('input-title').value;
    //Selected Priority
    const e = document.getElementById('priority-select');
    let prioritySelect = e.options[e.selectedIndex].text;
   
    createTodo(title,prioritySelect)
}