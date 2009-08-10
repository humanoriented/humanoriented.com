


//DungeonView object constructor
function DungeonView()
{
	//get a reference to the dungeon viewer
	//and don't continue if it' doesn't exist
	this.dungeon = document.getElementById('dungeon');
	if(!this.dungeon) { return; }





	//# data that defines the dungeon floor plan
	//# the floorplan matrix can be replaced freely, but should not be edited manually
	//###############

	//dungeon floorplan matrix
	//the outer matrix length is the number of rows in the grid
	//the inner array lengths are the number of squares in the row
	//this.floorplan = [['0000','0100','0110','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0011'],['0000','0100','1110','1111','1101','1101','1101','1101','1101','1101','1111','1111','1101','1101','1111','1011'],['0000','0100','1110','1011','1001','1000','1000','1000','1000','1100','1110','1011','1001','1100','1110','1011'],['0000','0100','1110','1011','0001','0000','0010','0010','0000','0100','1110','1011','0001','0100','1110','1011'],['0000','0100','1110','1011','0001','0100','0110','0011','0001','0100','1110','1011','0001','0100','1110','1011'],['0000','0100','1110','1011','0001','0100','1110','1011','0001','0100','1110','1011','0011','0110','1110','1011'],['0000','0100','1110','1011','0001','0100','1110','1011','0001','0100','1110','1111','0111','0111','1111','1011'],['0000','0100','1110','1011','0001','0100','1110','1011','0001','0100','1100','1101','1101','1101','1111','1011'],['0000','0100','1110','1011','0001','0100','1110','1011','0001','0000','1000','1000','1000','1100','1110','1011'],['0000','0100','1110','1011','0001','0100','1110','1011','0011','0010','0010','0010','0010','0110','1110','1011'],['0000','0100','1110','1011','0001','0100','1110','1111','0111','0111','0111','0111','0111','0111','1111','1011'],['0000','0100','1110','1011','0001','0100','1100','1101','1101','1101','1111','1111','1101','1101','1101','1001'],['0000','0100','1110','1011','0001','0000','1000','1000','1000','1100','1110','1011','1001','1000','1000','1000'],['0000','0100','1110','1011','0011','0010','0010','0010','0010','0110','1110','1011','0001','0000','0000','0000'],['0000','0100','1110','1111','0111','0111','0111','0111','0111','0111','1111','1011','0001','0000','0000','0000'],['0000','0100','1100','1101','1101','1101','1101','1101','1101','1101','1101','1001','0001','0000','0000','0000']];
	this.floorplan = [['0000','0000','0000','0000','0000','0100','0110','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0011','0001','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0100','0110','0011'],['0000','0000','0000','0000','0000','0100','1110','1111','1101','1101','1101','1101','1101','1101','1111','1111','1101','1101','1101','1101','1111','1011','0001','0000','0000','0000','0010','0010','0010','0010','0010','0010','0010','0010','0010','0010','0010','0110','1110','1011'],['0000','0000','0000','0000','0000','0100','1110','1011','1001','1000','1000','1000','1000','1100','1110','1011','1001','1000','1000','1100','1110','1011','0001','0000','0000','0100','0110','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','1111','1011'],['0010','0010','0010','0010','0010','0110','1110','1011','0011','0010','0010','0010','0010','0110','1110','1011','0001','0000','0000','0100','1110','1011','0001','0000','0000','0100','1110','1111','1101','1101','1101','1101','1101','1101','1101','1101','1101','1101','1101','1001'],['0110','0111','0111','0111','0111','0111','1111','1111','0111','0111','0111','0111','0111','0111','1111','1011','0001','0000','0000','0100','1110','1011','0001','0000','0000','0100','1110','1011','1001','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000'],['1110','1111','1101','1101','1101','1101','1111','1111','1101','1101','1101','1101','1101','1101','1101','1001','0001','0000','0000','0100','1110','1011','0001','0000','0000','0100','1110','1011','0011','0010','0010','0010','0010','0010','0010','0010','0000','0000','0000','0000'],['1110','1011','1001','1000','1000','1100','1110','1011','1001','1000','1000','1000','1000','1000','1000','1000','0000','0000','0000','0100','1110','1011','0001','0000','0000','0100','1110','1111','0111','0111','0111','0111','0111','0111','0111','0011','0001','0000','0000','0000'],['1110','1011','0001','0000','0000','0100','1110','1011','0011','0010','0010','0010','0010','0010','0010','0010','0010','0010','0010','0110','1110','1011','0001','0000','0000','0100','1110','1111','1101','1101','1111','1111','1101','1101','1111','1011','0001','0000','0010','0010'],['1110','1011','0001','0000','0000','0100','1110','1111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','1111','1011','0001','0000','0000','0100','1110','1011','1001','1100','1110','1011','1001','1100','1110','1011','0001','0100','0110','0011'],['1110','1011','0001','0000','0000','0100','1110','1111','1101','1101','1101','1101','1101','1101','1101','1101','1101','1101','1101','1101','1101','1001','0001','0000','0000','0100','1110','1011','0001','0100','1110','1011','0001','0100','1110','1011','0001','0100','1110','1011'],['1110','1011','0001','0000','0000','0100','1110','1011','1001','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','0000','0000','0000','0100','1110','1011','0001','0100','1110','1011','0001','0100','1110','1011','0001','0100','1110','1011'],['1110','1011','0001','0000','0000','0100','1110','1011','0011','0010','0010','0010','0010','0010','0010','0010','0010','0010','0010','0010','0000','0000','0000','0000','0000','0100','1110','1011','0011','0110','1110','1011','0011','0110','1110','1011','0011','0110','1110','1011'],['1110','1011','0001','0000','0000','0100','1110','1111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0111','0011','0001','0000','0000','0000','0000','0100','1110','1111','0111','0111','1111','1111','0111','0111','1111','1111','0111','0111','1111','1011'],['1110','1011','0001','0000','0000','0100','1100','1101','1101','1101','1111','1111','1101','1101','1101','1101','1101','1101','1111','1011','0001','0000','0000','0000','0000','0100','1110','1111','1101','1101','1111','1111','1101','1101','1101','1101','1101','1101','1101','1001'],['1110','1011','0001','0000','0000','0000','1000','1000','1000','1100','1110','1011','1001','1000','1000','1000','1000','1100','1110','1011','0001','0000','0000','0000','0000','0100','1110','1011','1001','1100','1110','1011','1001','1000','1000','1000','1000','1000','1000','1000'],['1110','1011','0001','0000','0000','0000','0000','0000','0010','0110','1110','1011','0011','0010','0010','0010','0000','0100','1110','1011','0011','0010','0010','0010','0010','0110','1110','1011','0011','0110','1110','1011','0001','0000','0000','0000','0000','0000','0000','0000'],['1110','1011','0001','0000','0000','0000','0000','0100','0110','0111','1111','1111','0111','0111','0111','0011','0001','0100','1110','1111','0111','0111','0111','0111','0111','0111','1111','1111','0111','0111','1111','1011','0001','0000','0000','0000','0000','0000','0000','0000'],['1110','1011','0001','0000','0000','0000','0000','0100','1100','1101','1101','1101','1101','1101','1101','1001','0001','0100','1100','1101','1101','1101','1101','1101','1101','1101','1101','1101','1101','1101','1101','1001','0001','0000','0000','0000','0000','0000','0000','0000'],['1110','1011','0001','0000','0000','0000','0000','0000','1000','1000','1000','1000','1000','1000','1000','1000','0000','0000','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','1000','0000','0000','0000','0000','0000','0000','0000','0000'],['1100','1001','0001','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000']];

	//default position view [x, y, dir (0 = north, 1 = east, 2 = south, 3 = west)]
	//*** does this validate correctly when applied by default?
	//*** maybe it should have a special mechanism for dealing with the default application
	//*** as opposed to any other application
	//this.defaultview = [2, 14, 0];
	this.defaultview = [0, 14, 0];





	//# data that controls the output view
	//# this can be edited freely
	//###############

	//base wallcolor (R,G,B)
	this.wallcolor = [127, 0, 0];

	//wallcolor darkener to darken walls for perspective
	this.darkener = 0.95;

	//wallcolor lightener to lighten facing walls
	this.lightener = 1.25;







	//# datat that defines the core structural view
	//# changes to these values should be done very carefully
	//# as all the values inter-relate closely with each other
	//# and the overall balance is extremely sensitive
	//###############

	//the size of the dungeon view area
	this.viewsize = [600, 400];

	//the size (in brick units) of the view grid (columns to center, rows)
	this.gridsize = [16, 4];

	//basic brick unit size (width and height of nearest single brick)
	this.bricksize = [50, 31];

	//bricksize multiplier to reduce size for perspective
	this.multiplier = 0.84;

	//movement increment (in squares) when moving through the dungeon
	this.moveinc = 2;








	//brick class names
	this.bricknames = ['top', 'upper', 'middle', 'lower'];

	//create a grid object for storing column div and brick span objects
	this.grid = {};

	//create an array for storing the current view in the floorplan
	//storing the x,y co-ordinate and the view direction
	this.currentview = [0, 0, 0];




	//get a reference to the map element
	this.map = document.getElementById('map');

	//create a matrix for storing its squares
	this.mapsquares = [];

	//create the map view
	this.createMapView();


	//create the dungeon view
	this.createDungeonView();



	//create a reference to this for inner function
	var self = this;



	//get a reference to the controller form
	this.controller = document.getElementById('controller');
	if(this.controller)
	{
		//populate the x and y co-ordinate selectors
		//according to the size of the floorplan matrix
		for(var i=0; i<this.floorplan.length; i+=2)
		{
			this.controller['y'].appendChild(tools.createElement('option', { 'value' : i, 'text' : i }));
		}
		for(i=0; i<this.floorplan[0].length; i+=2)
		{
			this.controller['x'].appendChild(tools.createElement('option', { 'value' : i, 'text' : i }));
		}

		//bind a reset handler to reset the dungeon view
		this.controller.onreset = function()
		{
			//reset the dungeon view
			self.resetDungeonView();

			//reset the map view
			self.resetMapView();

			//don't perform the default reset action
			return false;
		};

		//bind a submit handler to apply a specified position
		this.controller.onsubmit = function()
		{
			//get the values of the x, y and direction selectors, converted to numbers
			var x = parseInt(this['x'].options[this['x'].options.selectedIndex].value, 10);
			var y = parseInt(this['y'].options[this['y'].options.selectedIndex].value, 10);
			var dir = parseInt(this['dir'].options[this['dir'].options.selectedIndex].value, 10);

			//try to apply these values to the dungeon view
			//and alert a message if we fail
			if(!self.applyDungeonView(x, y, dir))
			{
				alert('Position [' + x + ',' + y + '] is inside a wall');
			}

			//don't perform the default submit action
			return false;
		};

		//bind a click handler for the player controls
		this.controller.onclick = function(e)
		{
			//store the event target
			var target = e ? e.target : window.event.srcElement;

			//if this is a move or turn button
			if(/^(move|turn)\-/.test(target.id))
			{
				//create a local copy of the object current view array
				var currentview = [self.currentview[0], self.currentview[1], self.currentview[2]];

				//the action array is derived from the button ids (if relevant)
				//eg, id="move-forward" would be ["move", "forward"]
				var action = target.id.split('-');

				//for movement actions
				//*** you should be able to do all of this more simply with iteration
				if(action[0] == 'move')
				{
					//if we're moving forward when facing north, or strafing left when facing east
					//or moving back when facing south, or strafing right when facing west
					if
					(
						(action[1] == 'forward' && currentview[2] == 0)
						||
						(action[1] == 'left' && currentview[2] == 1)
						||
						(action[1] == 'back' && currentview[2] == 2)
						||
						(action[1] == 'right' && currentview[2] == 3)
					)
					{
						//decrease the y value in the current view array
						currentview[1] -= self.moveinc;
					}

					//if we're strafing right when facing north, or moving forward when facing east
					//or strafing left when facing south, or moving back when facing west
					if
					(
						(action[1] == 'right' && currentview[2] == 0)
						||
						(action[1] == 'forward' && currentview[2] == 1)
						||
						(action[1] == 'left' && currentview[2] == 2)
						||
						(action[1] == 'back' && currentview[2] == 3)
					)
					{
						//increase the x value in the current view array
						currentview[0] += self.moveinc;
					}

					//if we're moving back when facing north, or strafing right when facing east
					//or moving forward when facing south, or strafing left when facing west
					if
					(
						(action[1] == 'back' && currentview[2] == 0)
						||
						(action[1] == 'right' && currentview[2] == 1)
						||
						(action[1] == 'forward' && currentview[2] == 2)
						||
						(action[1] == 'left' && currentview[2] == 3)
					)
					{
						//increase the y value in the current view array
						currentview[1] += self.moveinc;
					}

					//if we're strafing left when facing north, or moving back when facing east
					//or strafing right when facing south, or moving forward when facing east
					if
					(
						(action[1] == 'left' && currentview[2] == 0)
						||
						(action[1] == 'back' && currentview[2] == 1)
						||
						(action[1] == 'right' && currentview[2] == 2)
						||
						(action[1] == 'forward' && currentview[2] == 3)
					)
					{
						//decrease the x value in the current view array
						currentview[0] -= self.moveinc;
					}

					//limit the values to zero at the minimum
					//and the size of the dungeon at the maximum
					if(currentview[0] < 0) { currentview[0] = 0; }
					if(currentview[0] + self.moveinc > self.floorplan[0].length)
					{
						currentview[0] = self.floorplan[0].length - self.moveinc;
					}
					if(currentview[1] < 0) { currentview[1] = 0; }
					if(currentview[1] + self.moveinc > self.floorplan.length)
					{
						currentview[1] = self.floorplan.length - self.moveinc;
					}
				}

				//for turn actions
				else if(action[0] == 'turn')
				{
					//if the turn direction is right, increase the direction number
					if(action[1] == 'right') { currentview[2] ++; }

					//if the turn direction is left, decrease the number
					else if(action[1] == 'left') { currentview[2] --; }

					//otherwise the direction is around, so add 2 to the number
					else if(action[1] == 'around') { currentview[2] += 2; }

					//now wrap values which go outside the range
					if(currentview[2] > 3)
					{
						currentview[2] -= 4;
					}
					else if(currentview[2] < 0)
					{
						currentview[2] += 4;
					}
				}

				//pass the new view values to the apply view function
				//and if we succeed, overwrite the currenview values to the object array
				if(self.applyDungeonView(currentview[0], currentview[1], currentview[2]))
				{
					self.currentview = [currentview[0], currentview[1], currentview[2]];
				}

				//***DEV
				//else { alert('Cannot move further in this direction'); }
			}
		};
	}



	//apply the default position view
	this.applyDungeonView(this.defaultview[0], this.defaultview[1], this.defaultview[2]);

};





//create the dungeon view
DungeonView.prototype.createDungeonView = function()
{
	//create the center strip element and append it to the dungeon
	//this is the back wall in the middle of the dungeon view
	var strip = tools.createElement('div', { 'class' : 'column C' });
	this.grid['C'] = this.dungeon.appendChild(strip);

	//run through column creation twice
	//creating one set from the left and one set from the right
	for(var k=0; k<2; k++)
	{
		//the column classid direction token is "L" or "R"
		var classid = k == 0 ? 'L' : 'R';

		//create the column divs and store their references
		for(var i=0; i<this.gridsize[0]; i++)
		{
			//create a column div with the correct class names
			var div = tools.createElement('div', { 'class' : 'column ' + classid + ' ' + classid + i });

			//append it to the dungeon view and save the reference
			this.grid[classid + i] = { 'column' : this.dungeon.appendChild(div) };

			//create the necessary brick spans inside this grid
			//and store their references to the same object member
			for(var j=0; j<this.gridsize[1]; j++)
			{
				//create the main span
				var span = tools.createElement('span', { 'class' : 'brick ' + this.bricknames[j] });

				//if this is the upper or lower brick
				if(j == 1 || j == 3)
				{
					//add another blank span inside it
					var innerspan = span.appendChild(tools.createElement('span'));
				}

				//append it to the column div and save the reference
				this.grid[classid + i][this.bricknames[j]] = div.appendChild(span);
			}
		}
	}

	//now reset the view to default
	this.resetDungeonView();
};




//reset the dungeon view
//by applying all the necessary default style properties
DungeonView.prototype.resetDungeonView = function()
{
	//for each set of columns
	for(var k=0; k<2; k++)
	{
		//the dimensions of the space in the previous column
		//using for measuring the space needed for the next one
		this.lastsize = [0, 0];

		//store the bricksize to local array
		var bricksize = [this.bricksize[0], this.bricksize[1]];

		//store the wallcolor to local array
		var wallcolor = [this.wallcolor[0], this.wallcolor[1], this.wallcolor[2]];

		//the column classid direction token is "L" or "R"
		var classid = k == 0 ? 'L' : 'R';

		//for each column in the group
		for(var i=0; i<this.gridsize[0]; i++)
		{
			//darken the wallcolor slightly, rounding the values
			//(because moz insists on rounded values(
			for(var j=0; j<3; j++) { wallcolor[j] = Math.round(wallcolor[j] * this.darkener); }

			//iterate through the first-child span elements in this column
			//we know that they're first-child because we created them with no whitespace
			var spans = this.grid[classid + i].column.childNodes;
			for(var n=0; n<spans.length; n++)
			{
				//create a shortcut references to this span
				var span = spans[n];

				//if this is the upper or lower brick, we also have an inner span
				if(n == 1 || n == 3) { var innerspan = span.firstChild; }

				//apply style properties according to brick
				switch(this.bricknames[n])
				{
					//top brick (roof rectangle)
					case 'top' :

						//dimensions
						span.style.height = this.lastsize[1] + 'px';

						break;

					//upper brick (top diagonal)
					case 'upper' :

						//add current height to lastsize height
						this.lastsize[1] += bricksize[1];

						//display
						span.style.display = 'block';

						//dimensions
						span.style.height = bricksize[1] + 'px';

						//inner position
						innerspan.style.left = (k == 0 ? 0 - bricksize[0] : 0) + 'px';
						innerspan.style.top = (0 - bricksize[1]) + 'px';

						//inner clip
						innerspan.style.clip = 'rect('
							+ (bricksize[1]) + 'px, '
							+ ((k == 0 ? 2 : 1) * bricksize[0]) + 'px, '
							+ (2 * bricksize[1]) + 'px, '
							+ (k == 0 ? bricksize[0] : 0) + 'px)';

						//inner border size
						innerspan.style.borderWidth = bricksize[1] + 'px ' + bricksize[0] + 'px';

						//wall collor is inner border-bottom color
						innerspan.style.borderBottomColor = 'rgb(' + wallcolor[0] + ',' + wallcolor[1] + ',' + wallcolor[2] + ')';

						break;

					//middle brick (middle rectangle)
					case 'middle' :

						//dimensions
						span.style.height = (this.viewsize[1] - (this.lastsize[1] * 2)) + 'px';

						//wall color is background color
						//the value is also store in the title attribute
						//so that we can easily retrieve it later
						span.title = wallcolor[0] + ',' + wallcolor[1] + ',' + wallcolor[2];
						span.style.backgroundColor = 'rgb(' + span.title + ')';

						break;

					//lower brick (bottom diagonal)
					case 'lower' :

						//display
						span.style.display = 'block';

						//dimensions
						span.style.height = bricksize[1] + 'px';

						//inner position
						innerspan.style.left = (k == 0 ? 0 - bricksize[0] : 0) + 'px';
						innerspan.style.top = '0';

						//inner clip
						innerspan.style.clip = 'rect('
							+ '0, '
							+ ((k == 0 ? 2 : 1) * bricksize[0]) + 'px, '
							+ (bricksize[1]) + 'px, '
							+ (k == 0 ? bricksize[0] : 0) + 'px)';

						//inner border size
						innerspan.style.borderWidth = bricksize[1] + 'px ' + bricksize[0] + 'px';

						//wall collor is inner border-top color
						innerspan.style.borderTopColor = 'rgb(' + wallcolor[0] + ',' + wallcolor[1] + ',' + wallcolor[2] + ')';

						break;
				}
			}

			//add current column width to lastsize width
			this.lastsize[0] += bricksize[0];

			//set the column width
			this.grid[classid + i].column.style.width = bricksize[0] + 'px';

			//decrease the bricksize proportionately
			//to corresond with the output view perspective
			for(j=0; j<2; j++) { bricksize[j] *= this.multiplier; }
		}
	}

	//set the final height and position of the center strip
	//using the last residual values for lastsize
	//but subtract 1 from the applied top position to sand off residual rounding errors
	this.grid['C'].style.height = (this.viewsize[1] - (this.lastsize[1] * 2)) + 'px';
	this.grid['C'].style.top = -1 - (this.grid['C'].offsetHeight / 2) + 'px';

	//apply the residual background color to the strip
	//so that it takes on the same color as the two farthest pieces
	this.grid['C'].style.background = 'rgb(' + wallcolor[0] + ',' + wallcolor[1] + ',' + wallcolor[2] + ')';
};






//apply a floorplan view to the dungeon
//from a given x,y co-ordinate and view direction
DungeonView.prototype.applyDungeonView = function(x, y, dir)
{
	//first check if the x and y position is inside a wall
	//which we do by checking the floorplan values looking in
	//from each of the four squares surrounding this position
	if(this.floorplan[y][x].charAt(1) == '0' && this.floorplan[y][x].charAt(2) == '0'
		&& this.floorplan[y][x + 1].charAt(2) == '0' && this.floorplan[y][x + 1].charAt(3) == '0'
		&& this.floorplan[y + 1][x].charAt(0) == '0' && this.floorplan[y + 1][x].charAt(1) == '0'
		&& this.floorplan[y + 1][x + 1].charAt(0) == '0' && this.floorplan[y + 1][x + 1].charAt(3) == '0')
	{
		//and if so, return false for failure
		return false;
	}


	//we need a collection of squares in two columns
	//where the column size is the dungeon column viewsize
	//and the index starts from the current position forwards
	this.squares = { 'L' : [], 'R' : [] };

	//***DEV
	//var test = { 'L' : [], 'R' : [] };

	//switch by view direction
	//to get the data for each left and right square
	switch(dir)
	{
		//north
		case 0 :

			//starting from the y co-ordinate,
			//run backwards through the floorplan rows
			for(var i=y; i>=0; i--)
			{
				//don't count more than the horizontal grid size (view column depth)
				if(this.squares.L.length <= this.gridsize[0]);
				{
					//save the floorplan data unmodified
					this.squares.L[y - i] = this.floorplan[i][x];
					this.squares.R[y - i] = this.floorplan[i][x + 1];

					//***DEV
					//test.L[y - i] = i + '-' + x;
					//test.R[y - i] = i + '-' + (x + 1);
				}
			}

			break;

		//east
		case 1 :

			//starting with the square past the x co-ordinate
			//run forwards through the columns in this floorplan row
			for(i=(x + 1); i<this.floorplan[y].length; i++)
			{
				//don't count more than the horizontal grid size (view column depth)
				if(this.squares.L.length <= this.gridsize[0]);
				{
					//shift the characters in the floorplan data, one character to the left
					this.squares.L[i - (x + 1)] = this.shiftCharacters(this.floorplan[y][i], 1);
					this.squares.R[i - (x + 1)] = this.shiftCharacters(this.floorplan[y + 1][i], 1);

					//***DEV
					//test.L[i - (x + 1)] = y + '-' + i;
					//test.R[i - (x + 1)] = (y + 1) + '-' + i;
				}
			}

			break;

		//south
		case 2 :

			//starting with the square past the y co-ordinate
			//run forwards through the floorplan rows
			for(i=(y + 1); i<this.floorplan.length; i++)
			{
				//don't count more than the horizontal grid size (view column depth)
				if(this.squares.L.length <= this.gridsize[0]);
				{
					//shift the characters in the floorplan data, two characters to the left
					this.squares.L[i - (y + 1)] = this.shiftCharacters(this.floorplan[i][x + 1], 2);
					this.squares.R[i - (y + 1)] = this.shiftCharacters(this.floorplan[i][x], 2);

					//***DEV
					//test.L[i - (y + 1)] = i + '-' + (x + 1);
					//test.R[i - (y + 1)] = i + '-' + x;
				}
			}

			break;

		//west
		case 3 :

			//starting from the x co-ordinate
			//run backwards through the columns in this floorplan row
			for(i=x; i>=0; i--)
			{
				//don't count more than the horizontal grid size (view column depth)
				if(this.squares.L.length <= this.gridsize[0]);
				{
					//shift the characters in the floorplan data, three characters to the left
					this.squares.L[x - i] = this.shiftCharacters(this.floorplan[y + 1][i], 3);
					this.squares.R[x - i] = this.shiftCharacters(this.floorplan[y][i], 3);

					//***DEV
					//test.L[x - i] = (y + 1) + '-' + i;
					//test.R[x - i] = y + '-' + i;
				}
			}

			break;
	}



	//reset the dungeon view
	this.resetDungeonView();




	//we need to remember the last square to which the corridor extends
	//for when the corridor stops earlier than the end of the view
	//by deafult, this is length of the this.squares array
	var end = this.gridsize[0] - 1;


	//now for each array in the column object
	for(var c=0; c<2; c++)
	{
		//the object reference token
		var token = c == 0 ? 'L' : 'R';

		//the side character for testing a side wall
		//is 3 (left) for the left column or (1) right for the right column
		var side = c == 0 ? 3 : 1;


		//first look for the end wall by examining the first (upper) digit of each square datum
		//and as soon as it's zero, the next item is the end wall
		//and so are all the others until the end of this group of columns
		for(i=0; i<this.squares[token].length; i++)
		{
			if(this.squares[token][i].charAt(0) == '0')
			{
				for(var j=(i + 1); j<this.gridsize[0]; j++)
				{
					//increase the width of the top piece to compensate for loss of angle pieces
					this.grid[token + j].top.style.height = j == (i + 1)
						? (this.grid[token + j].top.offsetHeight) + 'px'
						: this.grid[token + (j - 1)].top.offsetHeight + 'px';

					//increase the height of the middle piece as well
					//we increase on all of them, not just contiguous ones
					//because this is a closing wall, not an opening
					this.grid[token + j].middle.style.height = (this.grid[token + (j - 1)].middle.offsetHeight) + 'px';

					//lighten the piece for facing highlight
					if(j == (i + 1))
					{
						var background = this.grid[token + j].middle.title.split(',');
						for(var k=0; k<3; k++) { background[k] = Math.round(parseInt(background[k], 10) * this.lightener); }
						this.grid[token + j].middle.style.background = 'rgb(' + background[0] + ',' + background[1] + ',' + background[2] + ')';
					}
					else
					{
						this.grid[token + j].middle.style.background = this.grid[token + (j - 1)].middle.style.background;
					}

					//hide the angle pieces
					this.grid[token + j].upper.style.display = 'none';
					this.grid[token + j].lower.style.display = 'none';
				}

				//remember this end square
				end = i;

				//if this is the first iteration (left column, because we only need to do this once)
				if(c == 0)
				{
					//increase the height of the center strip
					//and adjust its top position accordingly
					this.grid['C'].style.height = this.grid[token + i].middle.offsetHeight + 'px';
					this.grid['C'].style.top = -1 - (this.grid['C'].offsetHeight / 2) + 'px';
				}

				break;
			}
		}

		//now starting from the last floor space (establisheda above)
		//work backwards through the array to create contiguous gaps
		//we need to examine the side digit of each square datum
		for(i=end; i>=0; i--)
		{
			if(this.squares[token][i].charAt(side) == '1')
			{
				//increase the height of the top piece to compensate for loss of angle pieces
				this.grid[token + i].top.style.height = (this.grid[token + i].top.offsetHeight + this.grid[token + i].upper.offsetHeight) + 'px';

				//lighten the piece for facing highlight
				var background = this.grid['L' + i].middle.title.split(',');
				for(k=0; k<3; k++) { background[k] = Math.round(parseInt(background[k], 10) * this.lightener); }
				this.grid[token + i].middle.style.background = 'rgb(' + background[0] + ',' + background[1] + ',' + background[2] + ')';

				//hide the angle pieces
				this.grid[token + i].upper.style.display = 'none';
				this.grid[token + i].lower.style.display = 'none';

				//while there are contiguous this.squares,
				//apply the same dimensions to them for continuation
				while(i>0 && this.squares[token][i - 1].charAt(side) == '1')
				{
					//increase the height of the top piece to correspond with the adjacent column
					this.grid[token + (i - 1)].top.style.height = this.grid[token + i].top.offsetHeight + 'px';

					//increase the height of the middle piece as well
					this.grid[token + (i - 1)].middle.style.height = (this.grid[token + i].middle.offsetHeight) + 'px';

					//lighten the piece for facing highlight
					this.grid[token + (i - 1)].middle.style.background = this.grid[token + i].middle.style.background;

					//hide the angle pieces
					this.grid[token + (i - 1)].upper.style.display = 'none';
					this.grid[token + (i - 1)].lower.style.display = 'none';

					//decrease i accordingly
					i --;
				}
			}
		}
	}


	//set the center strip background to the same color as the end piece
	this.grid['C'].style.background = this.grid['L' + (this.gridsize[0] - 1)].middle.style.background;




	//apply this position to the map view
	this.applyMapView();


	//store the position values to the current view array
	this.currentview = [x, y, dir];

	//if we have a controller form
	if(this.controller)
	{
		//apply the values back to the selectors
		this.controller['x'].selectedIndex = x / 2;
		this.controller['y'].selectedIndex = y / 2;
		this.controller['dir'].selectedIndex = dir;
	}


	//if we get this far then all was well
	//so return true for success
	return true;
};






//create the map view
DungeonView.prototype.createMapView = function()
{
	//create as many rows as the grid size (column depth)
	for(var i=0; i<this.gridsize[0]; i++)
	{
		//create the row and append it to the map
		var row = this.map.appendChild(tools.createElement('div'));

		//create this member of the mapsquares array
		this.mapsquares[i] = [];

		//create six squares in each row
		//two to the left and right to show where the gaps are,
		//and two in the center for your forward view
		for(var j=0; j<6; j++)
		{
			//create the square and append it to the row
			//saving the reference in the mapsquares array
			this.mapsquares[i][j] = row.appendChild(tools.createElement('span'));
		}
	}

	//now reset the map view
	this.resetMapView();
};



//reset the map view
DungeonView.prototype.resetMapView = function()
{
	//iterate through the mapsquares rows and squares
	for(var i=0; i<this.mapsquares.length; i++)
	{
		for(var j=0; j<6; j++)
		{
			//reset the background to base wallcolor
			this.mapsquares[i][j].style.background = 'rgb(' + this.wallcolor[0] + ',' + this.wallcolor[1] + ',' + this.wallcolor[2] + ')';
		}
	}
};


//apply a position to the map view
DungeonView.prototype.applyMapView = function()
{
	//reset the map view
	this.resetMapView();

	//iterate through the squares collection
	for(var i=0; i<this.squares.L.length; i++)
	{
		//de-highlight those squares which are floor space
		//including the immediate two squares behind you as well,
		//because they're not included in the squares collections
		//but they would be in your peripheral vision
		var n = this.mapsquares.length - 2 - i;
		if(this.mapsquares[n])
		{
			if(this.squares.L[i].charAt(3) == '1')
			{
				this.mapsquares[n][0].style.background = 'transparent';
				this.mapsquares[n][1].style.background = 'transparent';
				if(i == 0)
				{
					this.mapsquares[n + 1][0].style.background = 'transparent';
					this.mapsquares[n + 1][1].style.background = 'transparent';
				}
			}

			if(this.squares.R[i].charAt(1) == '1')
			{
				this.mapsquares[n][4].style.background = 'transparent';
				this.mapsquares[n][5].style.background = 'transparent';
				if(i == 0)
				{
					this.mapsquares[n + 1][4].style.background = 'transparent';
					this.mapsquares[n + 1][5].style.background = 'transparent';
				}
			}

			if(this.squares.L[i].charAt(1) == '1')
			{
				this.mapsquares[n][2].style.background = 'transparent';
				this.mapsquares[n][3].style.background = 'transparent';
				if(i == 0)
				{
					this.mapsquares[n + 1][2].style.background = 'transparent';
					this.mapsquares[n + 1][3].style.background = 'transparent';
				}
			}
		}

		//as soon as the above value (character 0) of this floorplan data is "0"
		//then the next square above is a wall square, so don't continue
		//because we can't see past a wall in front of us!
		//if(this.squares.L[i].charAt(0) == '0')
		//{
		//	break;
		//}
	}
};




//shift the characters in a string by n characters to the left
//carrying over residual characters to the end
//so shiftCharacters('test', 2) becomes 'stte'
DungeonView.prototype.shiftCharacters = function(str, shift)
{
	//save the first n characters of the string
	var saved = str.substr(0, shift);

	//copy the substring starting past the shift character
	//to delete the characters we just saved
	str = str.substring(shift);

	//add the saved string at the end
	str += saved;

	//return the string
	return str;
};





//instantiate the tools object
var tools = new Tools();

//instantiate the DungeonView object
//*** onload for now
window.onload = function()
{
	new DungeonView();
};


