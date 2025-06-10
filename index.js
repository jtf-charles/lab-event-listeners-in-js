// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  document.body.style.backgroundColor = 'blue';
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = 'white';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  // const texteTaper=document.getElementById('textInput');
  // const texteSaisir =document.getElementById('textInputDisplay');
  // texteSaisir.textContent= texteTaper.value;
  const texteSaisir =document.getElementById('keyPressDisplay');
  texteSaisir.textContent = event.key;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const texteTa=document.getElementById('textInput');
  const texteSa=document.getElementById('textInputDisplay');
  texteSa.textContent= texteTa.value;
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress)

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput)
