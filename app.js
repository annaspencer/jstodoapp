const form = document.querySelector('#todoForm');
const todoInput = document.querySelector('input[name="todo"]');
const list = document.querySelector('#list');
const button = document.querySelector('button')


let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

data.forEach(item => {
    makeTodo(item)
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    itemsArray.push(todoInput.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    const newList = makeTodo(todoInput.value);
    list.appendChild(newList);
});


function makeTodo(text) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todoInput.value;
    todoInput.value = " ";

    const removeBTN = document.createElement('button');
    removeBTN.innerText = "Remove Item";
    removeBTN.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    });
   
    todoItem.addEventListener('click', function(e){
        e.target.style.textDecoration = 'line-through'
    });
    
    todoItem.innerText = (`${text} `);
    todoItem.appendChild(removeBTN);
    list.appendChild(todoItem);
  
};

button.addEventListener('click', function () {
    localStorage.clear()
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}
);
