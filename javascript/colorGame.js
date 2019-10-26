var numsquares = 6;
var colors = generatecolor(numsquares);
var squares = document.querySelectorAll('.square');
var pickedcolor = pickcolor();
var colordisplay = document.querySelector('#rgb');
var resdisplay = document.querySelector('#res');
var h1display = document.querySelector('h1');
var easybtn = document.querySelector('#easybtn');
var hardbtn = document.querySelector('#hardbtn');
var resetbtn = document.querySelector('#reset');
colordisplay.textContent = pickedcolor;


resetbtn.addEventListener('click', function(){
	colors = generatecolor(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1display.style.background = 'steelblue';
	resetbtn.textContent = 'New Colors';
	resdisplay.textContent = '';
});

easybtn.addEventListener('click', function(){
	easybtn.classList.add('selected');
	hardbtn.classList.remove('selected');
	numsquares = 3;
	colors = generatecolor(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});

hardbtn.addEventListener('click', function(){
	hardbtn.classList.add('selected');
	easybtn.classList.remove('selected');
	numsquares = 6;
	colors = generatecolor(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = 'block';
		}
	}
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener('click', function(){
		var clickedcolor = this.style.background;
		if(clickedcolor === pickedcolor)
		{
			resdisplay.textContent = 'Correct';
			setcolor(pickedcolor);
			h1display.style.background = pickedcolor;
			resetbtn.textContent = 'Play Again?'
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

function setcolor(c) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = c;
	}
}