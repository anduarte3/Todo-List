//assign input and select options

function createTodo(title,priority) {
    let todoArray = []
    //object with title, priority
    let todoList = {
        title: title,
        priority: priority,
    }

    todoArray.push(todoList.title)
    
    for(let i=0;i<todoArray.length;i++) {
        
        const showTodo = document.getElementById('show-todo');
        const todoBox = document.createElement('div');
        todoBox.classList.add('todo-box');
        todoBox.textContent = `${todoList.title}`;
        showTodo.appendChild(todoBox);

        if(todoList.priority == 'High') {
            //add classlist red background
            todoBox.classList.add('red');
            todoBox.appendChild(red);
        }
        else if (todoList.priority == 'Medium') {
            //add classlist yellow background
            todoBox.classList.add('yellow');
            todoBox.appendChild(yellow);
        }
        else {
            //add classlist green background
            todoBox.classList.add('green');
            todoBox.appendChild(green);
        } 
    }
    
}

export default createTodo