    const input = document.querySelector('#input');
    const createButton = document.querySelector('#create_button');
    const displayButton = document.querySelector('#display_button');
    const todoList = document.querySelector('#todo_list');
    const todos = [];
    console.log(todos);
    
    const createTodo = () => {
        if (input.value.trim() === '') {
            return null;
        }
    
        const reversedText = input.value.split('').reverse().join('');
        todos.push(reversedText);
        input.value = '';
    
        displayTodos();
    };
    
    const displayTodos = () => {
        todoList.innerHTML = '';
    
        todos.map(todo => {
            const div = document.createElement('div');
            const text = document.createElement('h3');
            div.setAttribute('class', 'block_text');
    
            text.innerText = todo;
    
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', 'delete_button');
            deleteButton.innerText = 'DELETE';
            deleteButton.onclick = () => div.remove();
    
            const editButton = document.createElement('button');
            editButton.setAttribute('class', 'edit_button');
            editButton.innerText = 'EDIT';
            editButton.onclick = () => {
                const editedText = prompt(`EDITED: ${text.innerText}`).trim();
                if (editedText !== '') {
                    text.innerText = editedText;
                }
            };
    
            const divButtons = document.createElement('div');
            divButtons.setAttribute('class', 'div_buttons');
            divButtons.append(deleteButton, editButton);
    
            div.append(text, divButtons);
            todoList.prepend(div);
        });
    };
    
    createButton.onclick = () => createTodo()
    displayButton.onclick = () => displayTodos()

