const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

const setTimeEl = document.getElementById("set-time");
const minutesInput = document.getElementById("minutes");




let interval;
let timeLeft = 1500;
let isTimerRunning = false;

function startTimer() {
  if (isTimerRunning) return; // Prevent multiple timers

  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(interval);
      isTimerRunning = false;
      alert("Time's up!");
      timeLeft = 1500; // Reset to default 25 minutes
      updateTimer();
    }
  }, 1000);

  isTimerRunning = true;
}



function updateTimer() {
  let hours = Math.floor(timeLeft / 3600); // Calculate hours
  let minutes = Math.floor((timeLeft % 3600) / 60); // Calculate minutes
  let seconds = timeLeft % 60; // Calculate seconds

  // Format the time with leading zeroes if needed
  let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Display the formatted time
  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  if (isTimerRunning) return; // Prevent multiple timers

  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(interval);
      isTimerRunning = false;
      alert("Time's up!"); // Popup alert
      timeLeft = 1500; // Reset to default
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
    const timeInput = minutesInput.value; // Still using the "minutes" input field
  const timeParts = timeInput.split(':').map(Number); // Split the input by ':' and convert to numbers

  let hours = 0, minutes = 0, seconds = 0;

  if (timeParts.length === 3) {
    // Format: hours:minutes:seconds
    [hours, minutes, seconds] = timeParts;
  } else if (timeParts.length === 2) {
    // Format: minutes:seconds
    [minutes, seconds] = timeParts;
  } else if (timeParts.length === 1) {
    // Format: seconds
    [seconds] = timeParts;
  }

  // Calculate total time in seconds
  const totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;

  if (!isNaN(totalTimeInSeconds) && totalTimeInSeconds >= 0) {
    timeLeft = totalTimeInSeconds;
    updateTimer();
  } else {
    alert("Please enter a valid time in HH:MM:SS format.");
  }
}
  
  
  
  minutesInput.addEventListener("input", (e) => {
    // Only allow digits and colons
    e.target.value = e.target.value.replace(/[^0-9:]/g, '');
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
  