var requestframe = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
    // IE Fallback, you can even fallback to onscroll
    function (callback) {
	    window.setTimeout(callback, 1000 / 60);
    };

$('#start').ready(function(){

	var drawable = false;

	setTimeout(function(){
		drawable = false;
		drawlines([["drag", 80,70],["drag", 80,90],["drag", 75,82.5],["drag", 85,82.5],["drag", 80,90],[],[],[],[],[],["click", 80,90]]);
	}, 8000);

	var introArray = [
		[["drag", 10,50],["drag", 20,70],["drag", 30,60],["drag", 40,80],["drag", 50,70],["drag", 60,40],["drag", 70,50],["drag", 80,30],["drag", 90,50],[],[],[],[],[],["click", 90,50]],
		[["drag", 30,40],[],["drag", 40,60],[],["drag", 70,20],[],[],[],[],[],["click", 70,20]],
		[["drag", 35,70],[],["drag", 50,10],[],["drag", 65,70],[],["drag", 30,30],[],["drag", 70,30],[],["drag", 35,70],[],[],[],[],[],["click", 35,70]],
		[["drag", 50,35],["drag", 60,20],["drag", 70,35],["drag", 50,65],["drag", 30,35],["drag", 40,20],["drag", 50,35],[],[],[],[],[],["click", 50,35]]
	];

	var whichDesign = Math.floor((Math.random() * introArray.length) + 0);


	$('#start').on('mouseup',function(e){
		mousecout = 0;
		draggable = false;

		setTimeout(function(){
			draggable = false;
		}, 100);
	});

	$('#start').on('click tap',function(e){
		new point({
			x: e.pageX,
			y: e.pageY
		});
	});

	// Contexts
	var canvas = $('<canvas/>')[0];
	canvas.height = $('#start').height();
	canvas.width = $('#start').width();
	var context = canvas.getContext('2d');
	$('#start').append(canvas);



	// Timing Variables
	var startTime = new Date().getTime();
	var currentTime = 0;
	var lineArray = [];

	$('#start').on("mousedown", function(l) {
		if(drawable == true){
			var count = 0;
			new line({x: l.pageX, y: l.pageY});
			var log = function(e){
				if(drawable == true){
					count++;
					if(count%5 == true){
						new pointSM({
							x: e.pageX,
							y: e.pageY
						});
						lineArray.push([e.pageX,e.pageY]);
					}
				} else {
					lineArray = [];
					lines = [];
				}
			};
			$(document).on("mousemove", log).one("mouseup", function(){
				$(document).off("mousemove", log);
				for(var i = 0; i < lineArray.length; i++){
					new pointSM({
						x: lineArray[i][0],
						y: lineArray[i][1]
					});
				}
				lineArray = [];
				lines = [];
			});
		}
	});


	// Particles
	var particles = [],
	    points = [],
	    lines = [];

	var particle = function(coords){
		this.startTime = new Date().getTime();
		this.byTime = (this.startTime/1000) - (startTime/1000);


		this.sides = Math.floor((Math.random() * 6) + 3);
		this.radius = Math.floor((Math.random() * 18) + 8);
		this.lineWidth = (Math.random() * 4) + 2;

		this.startPosition = coords;

		this.direction = {
			x: (Math.floor((Math.random() * 500) + 300)) - 500,
			y: (Math.floor((Math.random() * 500) + 300)) - 500
		};

		this.id = particles.length;
		particles.push(this);
	};

	particle.prototype.draw = function(){
		this.x = this.startPosition.x + (this.direction.x * (currentTime-this.byTime));
		this.y = this.startPosition.y + (this.direction.y * (currentTime-this.byTime));

		if(this.x > canvas.width + 100 || this.x < -100) {
			delete particles[this.id];
		}
		if(this.y > canvas.height + 100 || this.y < -100) {
			delete particles[this.id];
		}

		context.save();

		// Map the first vertice to start with
		var xPos;
		var yPos;

		context.moveTo(this.x,this.y);
		context.beginPath();
		// Loop through the vertices and map the lines
		for (i = 0; i <= this.sides; i++) {
			// Determine the coordinates of the next vertex
			xPos = this.x + this.radius * Math.cos(2 * Math.PI * i / this.sides);
			yPos = this.y + this.radius * Math.sin(2 * Math.PI * i / this.sides);
			// Set line to the next vertex
			context.lineTo(xPos,yPos);
		}
		context.strokeStyle = '#FFFFFF';
		//context.strokeStyle = '#FFFFFF';

		context.lineWidth = this.lineWidth;
		context.lineJoin = 'round';


		context.stroke();
		//context.fill();
		context.moveTo(0,0);
		context.closePath();
		context.restore();
	}

	var point = function(coords){
		this.position = coords;
		this.radius = 30;
		this.scale = 1;

		this.startTime = new Date().getTime();
		this.byTime = (this.startTime/1000) - (startTime/1000);

		for(i = 0; i < 6; i++){
			new particle(coords);
		}
		points.push(this);
	};

	point.prototype.draw = function(){
		this.scale = this.radius + ((currentTime-this.byTime) * 70);
		context.beginPath();
		context.arc(this.position.x,this.position.y,this.scale,0,2*Math.PI);
		context.fillStyle = 'rgba(0,0,0,'+ (0.25 - ((currentTime-this.byTime) / 2)) +')';
		context.fill();
		context.closePath();
	}

	var pointSM = function(coords){
		this.position = coords;

		for(i = 0; i < 2; i++){
			new particle(coords);
		}
	};

	var line = function(coords){
		this.position = coords;

		lines.push(this);
	}

	line.prototype.draw = function(){
		context.beginPath();
		for(var i = 0; i < lineArray.length; i++){
			if(i != undefined){
				context.lineTo(lineArray[i][0],lineArray[i][1]);
			}
		}
		context.strokeStyle = '#EEEEEE';
		context.lineWidth = 4;
		context.lineJoin = 'round';
		context.stroke();

		context.moveTo(0,0);
		context.closePath();
	}

	function frameIt(){
		context.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = 0; i < points.length; i++) {
			if(points[i] != undefined){
				points[i].draw();
			}
		}
		for (var i = 0; i < particles.length; i++) {
			if(particles[i] != undefined){
				particles[i].draw();
			}
		}
		for (var i = 0; i < lines.length; i++) {
			if(lines[i] != undefined){
				lines[i].draw();
			}
		}
	}

	function loop(){


		var now = new Date().getTime();
		currentTime = (now - startTime) / 1000;

		frameIt();
		requestframe(loop);
	}

	function init(){
		frameIt();
		loop();
	}
	init();
	drawlines(introArray[whichDesign]);
	function drawlines(theArray){
		(function myLoop (i) {    
			new line();
			setTimeout(function () {   
				l = theArray.length - i;
				if(theArray[l][0] == 'drag'){
					new pointSM({
						x: canvas.width * (theArray[l][1] / 100),
						y: canvas.height * (theArray[l][2] / 100)
					}); 
					lineArray.push([canvas.width * (theArray[l][1] / 100),canvas.height * (theArray[l][2] / 100)]);
				} else if (theArray[l][0] == 'click'){
					new point({
						x: canvas.width * (theArray[l][1] / 100),
						y: canvas.height * (theArray[l][2] / 100)
					}); 

					for(var x = 0; x < lineArray.length; x++){
						new pointSM({
							x: lineArray[x][0],
							y: lineArray[x][1]
						});
					}

					lineArray = [];
					drawable = true;
				}

				if (--i) myLoop(i);
			}, 50)
		})(theArray.length);  
	}
});