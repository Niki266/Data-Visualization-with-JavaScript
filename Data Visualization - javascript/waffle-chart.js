function WaffleChart(){
	this.name = "Waffle Chart"
	
	this.id = "waffle-chart";
	
	this.loaded = false;
	
	this.waffles = [];
	
	this.preload = function(){
		var self = this;
		this.data = loadTable("./data/waffle/finalData.csv","csv","header",
							  function(table){
			                     self.loaded = true;
		                      });
		
	}
	
	this.layout = {
		startX:20,
		startY:40,
		wafflewidth: 200,
		waffleHeight:200,
		waffleWidthPadding:20,
		waffleHeightPadding:60,
		secondRowPadding:100
	}
	this.setup = function(){
		var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
		"Sunday"];

	var values = ["Take-away", "Cooked from fresh", "Ready meal", "Ate out",
		"Skipped meal", "Left overs"];
		
		for(var i=0;i<days.length;i++){
		if(i < 4){
			var w_x = this.layout.startX+(i*
		    (this.layout.waffleWidth+this.layout.waffleWidthPadding));
			var w_y = this.layout.startY;
			var w_width = this.layout.wafflewidth;
			var w_height = this.layout.waffleHeight;
			var w = new Waffle(w_x,w_y,w_width,w_height,
							   8,8,
							   this.data,
							   days[i],values);
			this.waffles.push(w);
		}else{
			var w_x = this.layout.startX + this.layout.secondRowPadding;
			    w_x += ((i-4)*(this.layout.wafflewidth+this.layout.waffleWidthPadding))
			var w_y = this.layout.startY+this.layout.waffleHeight+this.layout.waffleHeightPadding;
			var w_width = this.layout.wafflewidth;
			var w_height = this.layout.waffleHeight;
			var w = new Waffle(w_x,w_y,
							   w_width,w_height,
							   8,8,
							   this.data,
							   days[i],values);
			this.waffles.push(w);
		}
			
		}
	}
	this.destroy = function(){
		
	}
	this.draw = function(){
    if (this.loaded == false){
      console.log("Data not yet loaded");
      return;
    }
		background(255);
		for(var i =0;i<this.waffles.length;i++){
			var w = this.waffles[i];
			w.checkMouse(mouseX,mouseY);
		}	
    }
  } 