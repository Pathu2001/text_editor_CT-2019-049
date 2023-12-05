

function f1(command) {
    document.execCommand(command, false, null);
}

function f3(command) {
    document.execCommand(command, false, null);
}

function f2(command) {
    document.execCommand(command, false, null);
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the colorPicker element
    var colorPicker = document.getElementById('colorPicker');

    // Get the colorLabel element
    var colorLabel = document.getElementById('editor-content');

    // Add an event listener for the 'input' event on the colorPicker
    colorPicker.addEventListener('input', function () {
        // Get the selected color value
        var selectedColor = colorPicker.value;

        // Update the text color of colorLabel
        colorLabel.style.color = selectedColor;
    });
});

function f6(command) {
    document.execCommand(command, false, null);
}

function f7(command) {
    document.execCommand(command, false, null);
}

function f8(command) {
    document.execCommand(command, false, null);
}

function executeCommand(command) {
    document.execCommand(command, false, null);
  }