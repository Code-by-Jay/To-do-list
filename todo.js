

document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Step 3: Event listener for Add button
  addBtn.addEventListener('click', addTask);

  // Allow Enter key to also add task
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
  });

  // Step 4: Add task function
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    // Step 5: Toggle completion
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Step 6: Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
      li.remove(); // Step 7: Delete task
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input
    taskInput.focus(); // Focus for next input
  }

  // Step 8 is covered: All updates happen dynamically without reload
});
