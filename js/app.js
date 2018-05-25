let numSquares = 6;
let colors = [];
let pickedColor;

// Initialize content after the dom has been loaded
document.addEventListener('DOMContentLoaded', init);

function init() {
	// mode btns event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	const modeButtons = document.querySelectorAll(".mode");
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	const squares = document.querySelectorAll(".square");
	for (let i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function () {
			//grab color of clicked squares
			let clickedColor = this.style.background;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				const messageDisplay = document.querySelector("#message");
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				const h1 = document.querySelector("h1");
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				const messageDisplay = document.querySelector("#message");
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	const colorDisplay = document.querySelector("#colorDisplay");
	const resetButton = document.querySelector("#reset");
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	const messageDisplay = document.querySelector("#message");
	messageDisplay.textContent = "";
	//change colors of squares
	const squares = document.querySelectorAll(".square");
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	let random = Math.floor(Math.random() * colors.length);
	const h1 = document.querySelector("h1");
	h1.style.background = colors[random];
}
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
	reset();
});

function changeColors(color) {
	const squares = document.querySelectorAll(".square");
	//loop through all squares
	for (let i = 0; i < squares.length; i++) {
		//change each color to match given colorh1
		squares[i].style.background = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	const arr = [];
	//add num random colors to arr
	for (let i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	const r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	const g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	const b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
