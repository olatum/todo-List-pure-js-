const list = document.getElementById('todoList');
const addBtn = document.querySelector('#add-btn');
const rmBtn = document.querySelector('#rm-btn');
const clearBtn = document.querySelector('#clear-btn');

addBtn.addEventListener('click', todoList);
rmBtn.addEventListener('click', removeFromList);
clearBtn.addEventListener('click', clearAllList);

let counter = 1

function todoList() {
    const newItem = document.createElement('li')
    let textnode = document.createTextNode("task number " + counter++)
    newItem.appendChild(textnode)
    document.getElementById('todoList').appendChild(newItem)
}

function removeFromList() {
    list.removeChild(list.lastChild);
}

function clearAllList() {
    const myNode = document.getElementById("todoList");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
