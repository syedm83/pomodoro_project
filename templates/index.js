const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

const setTimeEl = document.getElementById("set-time");
const minutesInput = document.getElementById("minutes");



let interval;
let timeLeft = 1500;
let isTimerRunning = false;


function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
    if (isTimerRunning) return; 
    
    interval = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft === 0) {
        clearInterval(interval);
        isTimerRunning = false;
        alert("Time's up!");
        timeLeft = 1500; 
        updateTimer();
      }
    }, 1000);
  
    isTimerRunning = true;
  }
  
  function stopTimer() {
    clearInterval(interval);
    isTimerRunning = false;
  }
  
  function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
    isTimerRunning = false;
  }
  
  function setCustomTime() {
    const customMinutes = parseInt(minutesInput.value);
    if (!isNaN(customMinutes) && customMinutes >= 0) {
      timeLeft = customMinutes * 60; 
      updateTimer();
    } else {
      alert("Please enter a valid number of minutes.");
    }
  }
  
  
  minutesInput.addEventListener("input", (e) => {
    
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  });
  
  startEl.addEventListener("click", startTimer);
  stopEl.addEventListener("click", stopTimer);
  resetEl.addEventListener("click", resetTimer);
  
  setTimeEl.addEventListener("click", setCustomTime);

//now for to do list code below
const addTaskBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const listItem = createTaskItem(taskText);
        todoList.appendChild(listItem);
        newTaskInput.value = ''; // Clear input
    }
});

function createTaskItem(taskText) {
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskSpan.classList.add('completed');
            todoList.appendChild(listItem); // Move to bottom when checked
        } else {
            taskSpan.classList.remove('completed');
        }
    });
    
    listItem.appendChild(taskSpan);
    listItem.appendChild(checkbox);
    
    return listItem;
    
  
}
  