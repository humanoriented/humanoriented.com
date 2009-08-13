


//floor plan designer object constructor
function FloorplanDesigner()
{
	//get a reference to the floorplan table
	//and don't continue if it doesn't exist
	this.floorplan = document.getElementById('floorplan');
	if(!this.floorplan) { return; }



	//number of rows and columns (squares) in the grid
	this.gridsize = [20, 40];




	//get a reference to the data form
	this.dataform = document.getElementById('dataform');

	//create a reference to this for inner functions
	var self = this;



	//cells collection is a matrix of rows and cells
	this.cells = [];

	//data collection is a matching matrix of cell data
	//where each member is an array of four boolean numbers
	//0 if there's wall in that direction
	//1 if there's floor in that direction
	//ordered like CSS properties: [0] = above, [1] = right, [2] = below, [3] = left
	this.data = [];



	//create the necessary rows and columns
	//saving a reference to each cell in the cells matrix
	var tbody = this.floorplan.appendChild(tools.createElement('tbody'));
	for(var i=0; i<this.gridsize[0]; i++)
	{
		var row = tbody.appendChild(tools.createElement('tr'));
		this.cells[i] = [];
		this.data[i] = [];
		for(var j=0; j<this.gridsize[1]; j++)
		{
			this.data[i][j] = [0, 0, 0, 0];
			this.cells[i][j] = row.appendChild(tools.createElement('td', { 'id' : 'Cell-' + i + '-' + j, 'text' : '00 00' }));
		}
	}




	//bind a click handler to cell selection
	this.floorplan.onclick = function(e)
	{
		//get the target cell
		//and don't continue if it isn't a cell
		var cell = e ? e.target : window.event.srcElement;
		if(cell.nodeName.toLowerCase() != 'td')
		{
			return;
		}

		//get the row and column reference from the cell ID
		//and pass the data to the update data matrix method
		var ref = cell.id.split('-');
		self.updateDataMatrix(parseInt(ref[1], 10), parseInt(ref[2], 10));
	};




	//bind a submit handler to the data form
	//to generate the output matrix
	this.dataform.onsubmit = function()
	{
		//compile an output data string
		var str = '\tthis.floorplan = [';
		for(var i=0; i<self.data.length; i++)
		{
			str += '[';
			for(var j=0; j<self.data[i].length; j++)
			{
				str += "'" + self.data[i][j].join('') + "'";
				if(j + 1 < self.data[i].length)
				{
					str += ',';
				}
			}
			str += ']';
			if(i + 1 < self.data.length)
			{
				str += ',';
			}
			str += '';
		}
		str += '];\n';

		//output the data string to the data area
		this['data'].value = str;

		//don't submit
		return false;
	};


	//bind a reset handler to the data form
	//to display an input matrix
	this.dataform.onreset = function()
	{
		//get the data string from the data area
		//and strip it of all whitespace
		var str = this['data'].value.replace(/[\t\n\r]/g, '');

		//don't continue if we have an empty value
		if(str == '') { return false; }

		//*** this will need validating to make sure it's valid
		//*** and that the final matrix is the right size for the grid

		//remove unwanted data and split into a matrix
		str = str.replace(/[a-z\. \=\']/g, '');
		var matrix = str.split('],');
		for(var i=0; i<matrix.length; i++)
		{
			matrix[i] = matrix[i].replace(/[\[\]\;]/g, '');
			matrix[i] = matrix[i].split(',');
		}

		//apply it to the floorplan and copy its values to the data matrix
		self.applyInputMatrix(matrix);

		//clear the field value
		this['data'].value = '';

		//don't reset
		return false;
	};


};





//update the data matrix in response to a cell click
FloorplanDesigner.prototype.updateDataMatrix = function(row, col)
{
	//get a reference to this cell
	var cell = this.cells[row][col];

	//if the cell already has the floorcell classname,
	//then we know it's already selected as a piece of floor
	if(cell.className == 'floorcell')
	{
		//remove its classname
		cell.className = '';

		//set the select flag to 0
		//meaning we're deselecting this cell
		var select = 0;
	}

	//otherwise it's currently a piece of wall
	else
	{
		//add the floor cell clas name
		cell.className = 'floorcell';

		//set the select flag to 1
		//meaning we're selecting this cell
		select = 1;
	}


	//set the cell class name accordingly
	cell.className = select == 1 ? 'floorcell' : '';



	//compile the new data for this cell
	//initially assuming we have an adjacent floor cell on all four sides
	//until we determine otherwise, for each direction
	var data = [1, 1, 1, 1];

	//saving each adjacent cell row and column number as we go
	//again, assuming none in every direction until we know otherwise
	var adjacents = [null, null, null, null];

	//there's there's no cell above us, or there is but it's not selected
	if(row == 0)
	{
		data[0] = 0;
	}
	else
	{
		adjacents[0] = [row - 1, col];
		if(this.cells[row - 1][col].className != 'floorcell')
		{
			data[0] = 0;
		}
	}

	//if there's no cell to the right, or there is but it's not selected
	if(col + 1 == this.gridsize[1])
	{
		data[1] = 0;
	}
	else
	{
		adjacents[1] = [row, col + 1];
		if(this.cells[row][col + 1].className != 'floorcell')
		{
			data[1] = 0;
		}
	}

	//if there's no cell below us, or there is but it's not selected
	if(row + 1 == this.gridsize[0])
	{
		data[2] = 0;
	}
	else
	{
		adjacents[2] = [row + 1, col];
		if(this.cells[row + 1][col].className != 'floorcell')
		{
			data[2] = 0;
		}
	}

	//if there's no cell to the left, or there is but it's not selected
	if(col == 0)
	{
		data[3] = 0;
	}
	else
	{
		adjacents[3] = [row, col - 1];
		if(this.cells[row][col - 1].className != 'floorcell')
		{
			data[3] = 0;
		}
	}

	//write the new data back into the cell
	cell.firstChild.nodeValue = '' + data[0] + data[1] + ' ' + data[2]  + data[3];


	//change the corresponding value in the data array of each adjacent cell
	//if it exists, and also write the new data back into that cell
	for(var i=0; i<4; i++)
	{
		if(adjacents[i])
		{
			var r = adjacents[i][0], c = adjacents[i][1];
			var n = i + 2;
			if(n >= 4) { n -= 4; }

			this.data[r][c][n] = select;
			this.cells[r][c].firstChild.nodeValue = '' + this.data[r][c][0] + this.data[r][c][1] + ' ' + this.data[r][c][2]  + this.data[r][c][3];
		}
	}

};



//apply an input matrix to the floorplan grid and copy its values to the data matrix
//*** this doesn't update the view properly if an earlier map is currently viewed
//*** because it's not turning back to wall squares that were previously floor
//*** so it should either check for that, or just reset every square to wall by default
//*** until we discover via the normal means that it needs to be floor
FloorplanDesigner.prototype.applyInputMatrix = function(matrix)
{
	//iterate through the input matrix
	for(var i=0; i<matrix.length; i++)
	{
		//limit check in case the input is larger than the grid
		if(i < this.data.length)
		{
			for(var j=0; j<matrix[i].length; j++)
			{
				//limit check in case the input is larger than the grid
				if(j < this.data[i].length)
				{
					//save each character, converted to a number
					//to the corresponding position in the data array
					for(var k=0; k<4; k++)
					{
						this.data[i][j][k] = parseInt(matrix[i][j].charAt(k), 10);
					}

					//write the data into the cell
					this.cells[i][j].firstChild.nodeValue = '' + this.data[i][j][0] + this.data[i][j][1] + ' ' + this.data[i][j][2]  + this.data[i][j][3];

					//work out the higlight by comparing the earlier cell if there is on
					//if there isn't one highlight the previous one with this data
					if(j > 0)
					{
						if(this.data[i][j - 1][1] == 1)
						{
							this.cells[i][j].className = 'floorcell';
						}

						if(j == 1 && this.data[i][j][3] == 1)
						{
							this.cells[i][0].className = 'floorcell';
						}
					}
				}
			}
		}
	}
};









//instantiate the tools object
var tools = new Tools();

//instantiate the floorplan designer object
//*** onload will do for now
window.onload = function()
{
	new FloorplanDesigner();
};

