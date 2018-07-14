// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(0, 255, 0)",
// ];
var numSquares = 6;
// var colors = generateRandomColors(numSquares);
var colors = [];
// var goalColor = randomColor();
var goalColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	// mode button event listeners




	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}		
}


function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		// // console.log(squares[i]);
		// // add initial colors to squares
		// squares[i].style.backgroundColor = colors[i];
		// add event listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			// console.log(this.style.backgroundColor);
			var pickedColor = this.style.backgroundColor;
			// compare color to picked color
			console.log(pickedColor, goalColor);
			if(pickedColor === goalColor){
				console.log("GOOOAAAAALLLLLLL, you won the color game!");
				messageDisplay.textContent = "You got it correct!";
				// change the h1 to the goal color
				h1Display.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again";
				// change all the squares to the picked color/goal color
				for(var i = 0; i < squares.length; i++){
					squares[i].style.backgroundColor = pickedColor;
				}
			} else {
				console.log("incorrect");
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "You thought wrong, dude!";
			}

		});
	}	
}
// for(var i = 0; i < modeButtons.length; i++){
// 	modeButtons[i].addEventListener("click", function(){
// 		modeButtons[0].classList.remove("selected");
// 		modeButtons[1].classList.remove("selected");
// 		this.classList.add("selected");

// 		this.textContent === "easy" ? numSquares = 3: numSquares = 6;

// 		if(this.textContent === "Easy"){
// 			numSquares = 3;
// 		} else {
// 			numSquares = 6;
// 		}

// 		reset();
// 		// how many squares to show
// 		// pick new colors
// 		// new goal color
// 		// update page to reflect changes
// 	});
// }

function reset(){
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	goalColor = randomColor();
	// change colors of squares
	colorDisplay.textContent = goalColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1Display.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	// generate new colors
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	// choose a new goal color
// 	goalColor = randomColor();
// 	colorDisplay.textContent = goalColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });
// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");

// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	goalColor = randomColor();
// 	colorDisplay.textContent = goalColor;

// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}

// });

resetButton.addEventListener("click", function(){
	reset();

	// // console.log("button");
	// // generate all new colors
	// colors = generateRandomColors(numSquares);
	// // pick a new random color from array
	// goalColor = randomColor();
	// // change colors of squares
	// colorDisplay.textContent = goalColor;
	// for (var i = 0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1Display.style.backgroundColor = "steelblue";
	// messageDisplay.textContent = "";
	// this.textContent = "New Colors";

});

// colorDisplay.textContent = goalColor;
// console.log(colorDisplay);

// for(var i = 0; i < squares.length; i++){
// 	// // console.log(squares[i]);
// 	// // add initial colors to squares
// 	// squares[i].style.backgroundColor = colors[i];
// 	// add event listeners to squares
// 	squares[i].addEventListener("click", function(){
// 		// grab color of clicked square
// 		// console.log(this.style.backgroundColor);
// 		var pickedColor = this.style.backgroundColor;
// 		// compare color to picked color
// 		console.log(pickedColor, goalColor);
// 		if(pickedColor === goalColor){
// 			console.log("GOOOAAAAALLLLLLL, you won the color game!");
// 			messageDisplay.textContent = "You got it correct!";
// 			// change the h1 to the goal color
// 			h1Display.style.backgroundColor = pickedColor;
// 			resetButton.textContent = "Play Again";
// 			// change all the squares to the picked color/goal color
// 			for(var i = 0; i < squares.length; i++){
// 				squares[i].style.backgroundColor = pickedColor;
// 			}
// 		} else {
// 			console.log("incorrect");
// 			this.style.backgroundColor = "#232323";
// 			messageDisplay.textContent = "You thought wrong, dude!";
// 		}

// 	});
// }

function randomColor(){
	// pick a random number between the index of the array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array of 6
	var arr = [];
	// add num random colors to array
	for(var i = 0; i < num; i++){
		// get random color and push into an array
		arr.push(generateRandomColor());

	}
	// return arr
	return arr;
}	

function generateRandomColor(){
	// r
	var r =	Math.floor(Math.random() * 256);
	// g
	var g =	Math.floor(Math.random() * 256);
	// b
	var b =	Math.floor(Math.random() * 256);
	// "rgb(255, 0, 0)"
	return "rgb("+ r + ", " + g + ", " + b + ")";
}





