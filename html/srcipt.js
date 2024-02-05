document.getElementById('addTaskModalBtn').addEventListener('click', function() {
    document.getElementById('taskModal').classList.remove('hidden');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('taskModal').classList.add('hidden');
});

document.getElementById('saveTaskBtn').addEventListener('click', function() {
    const taskValue = document.getElementById('newTaskInput').value.trim();
    if (taskValue) {
        addTask(taskValue);
        document.getElementById('newTaskInput').value = ''; // Clear input field
        document.getElementById('taskModal').classList.add('hidden'); // Hide modal
    }
});

function addTask(taskValue) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = 'flex items-center bg-white p-4 mt-2 rounded shadow';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'mr-4';
    li.appendChild(checkbox);

    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    li.appendChild(taskText);

    const btnGroup = document.createElement('div');
    btnGroup.className = 'ml-auto flex';

  
// Create the edit button
const editBtn = document.createElement('button');
editBtn.className = 'bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2 flex items-center justify-center';

// Create the check icon using Font Awesome
const editIcon = document.createElement('i');
editIcon.className = 'fas fa-check';

// Append the icon to the button
editBtn.appendChild(editIcon);

// Set the click event for the edit button
editBtn.onclick = function() {
    const newTask = prompt("Edit Task", taskText.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask;
    }
};

// Append the edit button to the button group
btnGroup.appendChild(editBtn);




 // Create the delete button
const deleteBtn = document.createElement('button');
deleteBtn.className = 'bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded flex items-center justify-center';

// Create the delete icon using Font Awesome
const deleteIcon = document.createElement('i');
deleteIcon.className = 'fas fa-trash-alt';

// Append the icon to the button
deleteBtn.appendChild(deleteIcon);

// Set the click event for the delete button
deleteBtn.onclick = function() {
    taskList.removeChild(li);
};

// Append the delete button to the button group
btnGroup.appendChild(deleteBtn);

// Append the button group to the list item
li.appendChild(btnGroup);

// Append the list item to the task list
taskList.appendChild(li);

}