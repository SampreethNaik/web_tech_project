var colors = generatecolor(6);
var squares = document.querySelectorAll('.square');
var pickedcolor = pickcolor();
var colordisplay = document.querySelector('#rgb');
var resdisplay = document.querySelector('#res');
colordisplay.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener('click', function(){
		var clickedcolor = this.style.background;
		if(clickedcolor === pickedcolor)
		{
			resdisplay.textContent = 'Correct';
			final(pickedcolor);
		} else {
			this.style.background = '#232323';
			resdisplay.textContent = 'Try Again!!!';
		}
	});
}

function pickcolor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generatecolor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b +')';
}

function final(c) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = c;
	}
}