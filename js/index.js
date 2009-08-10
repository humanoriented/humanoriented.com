dojo.require("dojo.gfx.*");
dojo.require("dojo.event.*");
dojo.require("dojo.html.layout");
dojo.require("dojo.html.style");
dojo.require('dojo.debug.console');

var container = null;
var container_position = null;
var surface = null;
var surface_size = null;
var container_padding = 80;

function getWidth() {
	if (window.innerWidth) {
		return (window.innerWidth - container_padding);
	} else if (document.documentElement && document.documentElement.clientWidth) {
		return (document.documentElement.clientWidth - container_padding);
	} else return 700;
}

function getRand(from, to)
{
	return Math.random() * (to - from) + from;
}

var skew_stat_factor = 15;

function getRandSkewed(from, to)
{
	// let skew stats to smaller values
	var seed = 0;
	for(var i = 0; i < skew_stat_factor; ++i){
		seed += Math.random();
	}
	seed = 2 * Math.abs(seed / skew_stat_factor - 0.5);
	return seed * (to - from) + from;
}

function randColor(alpha)
{
	var red   = Math.floor(getRand(0, 255));
	var green = Math.floor(getRand(0, 255));
	var blue  = Math.floor(getRand(0, 255));
	var opacity = 1;
	if (alpha) {
		opacity = getRand(0.1, 1);
	}
	return [red, green, blue, opacity];
}

var gShapes = {}
var gShapeCounter = 0;

function makeCircleGrid(itemCount)
{
	var minR = 10, maxR = surface_size.height;
	for (var j = 0; j < itemCount; ++j) {
		var r = getRandSkewed(minR, maxR);
		var cx = getRand(r, surface_size.width  - r);
		var cy = getRand(r, surface_size.height - r);
		var id = "shape_" + (gShapeCounter++);
		var aShape = surface.createCircle({cx: cx, cy: cy, r: r})
			.setFill(randColor(true))
			.setStroke({color: randColor(1), width: getRand(3)})
			;
		aShape.getEventSource().setAttribute('shapeid', id);
		dojo.html.setClass(aShape.getEventSource(), "movable");
		gShapes[id] = aShape;
	}
}

var current_shape = null;
var current_shape_window = null;
var last_position = null;

function getShape(event)
{
	var id = event.target.getAttribute('shapeid');
	var s  = id ? gShapes[id] : null;
	return s;
}

function handleMouseDown(event)
{
	var shape = getShape(event);
	if (shape) {
		current_shape = shape;
		last_position = {
			x: event.clientX - container_position.x,
			y: event.clientY - container_position.y
		};
		var params = shape.getShape();
		var center = dojo.gfx.matrix.multiplyPoint(shape.getTransform(), params.cx, params.cy);
		var dx = last_position.x - center.x;
		var dy = last_position.y - center.y;
		var r  = params.r;
		current_shape_window = {
			x1: r + dx,
			y1: r + dy,
			x2: surface_size.width  - r + dx,
			y2: surface_size.height - r + dy
		};
	}
	dojo.event.browser.stopEvent(event);
}

function handleMouseMove(event)
{
	if(!current_shape) return;
	var x = Math.min(Math.max(event.clientX - container_position.x, current_shape_window.x1), current_shape_window.x2);
	var y = Math.min(Math.max(event.clientY - container_position.y, current_shape_window.y1), current_shape_window.y2);
	current_shape.applyTransform({dx: x - last_position.x, dy: y - last_position.y});
	last_position = {x: x, y: y};
	dojo.event.browser.stopEvent(event);
}

function handleMouseUp(event)
{
	current_shape = null;
	dojo.event.browser.stopEvent(event);
}

function initGfx() {
	container = dojo.byId("gfx_holder");
	container_position = dojo.html.abs(container);
	surface = dojo.gfx.createSurface(container, getWidth(), 200);
	surface_size = surface.getDimensions();
	surface_size.width  = parseInt(surface_size.width);
	surface_size.height = parseInt(surface_size.height);

	makeCircleGrid(50);

	dojo.event.connect(container, 'onmousedown', handleMouseDown);
	dojo.event.connect(container, 'onmousemove', handleMouseMove);
	dojo.event.connect(container, 'onmouseup',   handleMouseUp);
	
	// cancel text selection and text dragging
	dojo.event.connect(container, "ondragstart",   dojo.event.browser, "stopEvent");
	dojo.event.connect(container, "onselectstart", dojo.event.browser, "stopEvent");
}

dojo.addOnLoad(initGfx);