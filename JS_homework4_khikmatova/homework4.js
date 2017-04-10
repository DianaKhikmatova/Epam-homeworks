function circles() {
	canvas = document.getElementById("circle");
	var width = document.getElementById('content');
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	context = canvas.getContext("2d");
	context.globalAlpha = 0.65;
	var circles = [];
	
	let count = 0;
	while (count < 20) {
		setTimeout(function() {
			var myCircle = circle();
			DrawCircle(myCircle);
			circles.push(myCircle);
			
		}, 1000);
		
		setInterval( function(){
				context.clearRect(0, 0, context.canvas.width, context.canvas.height);
				for (let i = 0; i < circles.length; i++) {
					//context.clearRect(0, 0, context.canvas.width, context.canvas.height);
					//circles[i].dx = 1;
					//circles[i].dy = 1;
					console.log();
					console.log();
					console.log();
					console.log();
					console.log();
					console.log();
					console.log();
					if (((circles[i].x + circles[i].radius) > (canvas.width - 2)) || ((circles[i].x - circles[i].radius) < 0)) {
						circles[i].dx = -circles[i].dx;
					}
					if ((circles[i].y + circles[i].radius > canvas.height - 2) || (circles[i].y - circles[i].radius < 0)) {
						circles[i].dy = -circles[i].dy;
					}
					circles[i].x += circles[i].dx;
					circles[i].y += circles[i].dy;
					DrawCircle(circles[i]);
					
				}
			}, 1);
		count++;
	}
}
	
function Circle(dx, dy, radius, color) {
	this.x = radius;
	this.y = radius;
	this.dx = dx;
    this.dy = dy;
	this.radius = radius;
	this.color = color;
}
	
function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}	
	
function circle()
{
	var radius = randomFromTo(10, 60);
	var dx = Math.random().toFixed(1) * 10;
	var dy = Math.random().toFixed(1) * 10;
	
	var colors = ["#4caf50", "#64b5f6", "#f44336", "yellow", "#7e57c2", "#ffc107", "#26a69a", "#f48fb1", 
				"#e040fb", "#ff1744", "#aa00ff", "#4dd0e1", "#9ccc65", "#cddc39", "#ffeb3b", "#bdbdbd"];
	var color = colors[randomFromTo(0, 8)];

	var circle = new Circle(dx, dy, radius, color);
	
	return circle;
	
}

function DrawCircle(circle) {
	context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI, false);
    context.fillStyle = circle.color;
	context.closePath();
    context.fill();
}
