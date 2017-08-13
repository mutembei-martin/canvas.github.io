var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
// c.fillStyle = "#0ff";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "#ff0";
// c.fillRect(300, 100, 100, 100);
// c.fillRect(100, 300, 100, 100);
// c.fillRect(300, 300, 100, 100);

// console.log(canvas);



//Line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();



///////Arc/Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle= 'blue';
// c.stroke();

// for (var i= 0; i < 100; i++){

// var x= Math.random() * window.innerWidth;
// var y= Math.random() * window.innerHeight;
// c.beginPath();
// c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.strokeStyle= 'blue';
// c.stroke();


// }


var mouse = {
	x: undefined,
	y: undefined
}


var maxRadius = 70;
// var minRadius = 2;

var colorArray = [

	'#0ff',
	'#e74c3c',
	'#ecf0f1',
	'#3498db',
	'#2980b9',
];

window.addEventListener('mousemove', function(event) {
mouse.x = event.x;
mouse.y = event.y;

})

window.addEventListener('resize', function(){

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;


init();

});



function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
	// this.color = colorArray[0];

	this.draw = function(){

		c.beginPath();
c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
c.fillStyle = this.color;
c.fill();
	}

	this.update = function(){


if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {

	this.dx= -this.dx;
};


if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
	
	this.dy= -this.dy;

}
this.x += this.dx;
this.y += this.dy;

//Interactivity

if (mouse.x - this.x < 50 && mouse.x - this.x > -50  && mouse.y - this.y < 50 && mouse.y -this.y > -50) {

if (this.radius < maxRadius) {

this.radius +=1 * 4;
}

}else if(this.radius > this.minRadius){

	this.radius -= 1 ;
}



this.draw();

	}
}



// var circle = new Circle(200, 200, 3, 3, 30);
var circleArray = [];

function init() {


	circleArray = [];

	for (var i = 0; i < 500; i++) {

	var radius = Math.random() * 20 + 1;
	var x=Math.random() * (innerWidth - radius * 2) + radius;
	var y=Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() -0.5) * 10;
	var dy = (Math.random() -0.5) * 10;

	circleArray.push(new Circle(x, y, dx, dy, radius));

	
}

}



function animate(){
	requestAnimationFrame(animate);
c.clearRect(0, 0, innerWidth, innerHeight);


for (var i = 0; i < circleArray.length; i++) {
	circleArray[i].update();

}
// circle.update();



} 

init(); 
animate();
