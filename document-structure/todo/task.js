const tasksList = document.querySelector('.tasks__list');
const tasksForm = document.getElementById('tasks__form');
const input = tasksForm.querySelector('.tasks__input');

tasksForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (input.value.trim() == '') {
        input.value = '';
        return;
    }

    tasksList.insertAdjacentHTML("afterbegin", `
        <div class="task">
            <div class="task__title">
            ${input.value.trim()}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `);
    input.value = '';

    let currentTasks = document.querySelectorAll('.task__remove');
    currentTasks[0].onclick = function () {
        this.parentNode.remove();
    }
});