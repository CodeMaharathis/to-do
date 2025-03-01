document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        // Create new task
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${taskText} <button class="remove">X</button>`;

        // Add event listener for marking as completed
        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });

        // Add event listener for removing task
        taskItem.querySelector('.remove').addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from triggering completion
            taskItem.remove();
        });

        // Add task to the list
        document.getElementById('task-list').appendChild(taskItem);
        taskInput.value = ''; // Clear input
    }
});

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});
