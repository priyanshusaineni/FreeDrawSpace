let isActive = true;
function handleHamburger() {
  if (isActive == true) {
    hamburger.classList.remove("is-active");
    toolPanel.classList.remove("add-animation");
  } else {
    hamburger.classList.add("is-active");
    toolPanel.classList.add("add-animation");
  }

  isActive = !isActive;
}

let Activetool = "pencil";

const pencilOptions = document.querySelector(".tool-options.pencil");
const eraserOptions = document.querySelector(".tool-options.eraser");
const tools = document.querySelectorAll(".tool");
const inputs = document.querySelectorAll("input[type=range]");
const ImageInput = document.querySelector(".upload-img");
function handleToolChange(tool) {
  if (tool == "pencil") {
    if (Activetool == "pencil") {
      pencilOptions.classList.add("show");
    } else {
      Activetool = "pencil";
      eraserOptions.classList.remove("show");
      tools[1].classList.remove("active");
      tools[0].classList.add("active");
      ctx.strokeStyle = "blue";
      ctx.lineWidth = inputs[0].value;
      ctx.globalCompositeOperation = "source-over";
    }
  } else if (tool == "eraser") {
    if (Activetool == "eraser") {
      eraserOptions.classList.add("show");
    } else {
      Activetool = "eraser";
      tools[0].classList.remove("active");
      tools[1].classList.add("active");
      pencilOptions.classList.remove("show");
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = inputs[0].value;
    }
  } else if (tool == "sticky") {
    createSticky();
  }
}

let undoStack = [];
let redoStack = [];
function undoMaker() {
  if (undoStack.length > 0) {
    redoStack.push(undoStack.pop());
    redraw();
    return true;
  }
  return false;
}

function redoMaker() {
  if (redoStack.length > 0) {
    undoStack.push(redoStack.pop());
    redraw();
    return true;
  }
  return false;
}
