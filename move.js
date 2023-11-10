function move(){
	moveX();
	moveY();
	function moveX() {
		for(var j = 0; j < arr.length;j++) 
		{
			if(arr[j].id == "hero" && arr[j].xPos !=0)
			{
				arr[j].xPos = arr[j].xPos - arr[j].xDelta;
					
				var ax = arr[j].left + arr[j].xDelta;
				var ax1 = arr[j].left + arr[j].xDelta + arr[j].width;
				var ay = arr[j].bottom;
				var ay1 = arr[j].bottom + arr[j].height;
				arr[j].opacity = 1;
				document.getElementById("hero").style.opacity = arr[j].opacity;
			
				arr[j].canMovex = true;
			
				for(var i = 0; i < arr.length; i++) 
				{
					if(arr[i].id=="hero") continue;
					var bx = arr[i].left;
					var bx1 = arr[i].left + arr[i].width;
					var by = arr[i].bottom;
					var by1 = arr[i].bottom + arr[i].height;
					
					if(arr[i].type != "Kust" && arr[i].type !="Bullet" && intersects(ax, ax1, ay, ay1, bx, bx1, by, by1)==true) {
						arr[j].canMovex = false;
						break;
					}
					if(arr[i].type == "Kust" && intersects(ax, ax1, ay, ay1, bx, bx1, by, by1)==true){
						arr[j].opacity = 0.2;
						document.getElementById(arr[j].id).style.opacity = "0.2";
					}
				};
				if(arr[j].canMovex==true)
				{		
					arr[j].left = arr[j].left + arr[j].xDelta;
					document.getElementById("hero").style.left = arr[j].left + "px";
				}
			}
			else if(arr[j].type == "Bullet" && arr[j].xPosb !=0 && arr[j].yPosb ==0)
			{
				arr[j].canMovebx = true;
				var ax = arr[j].left + arr[j].xDeltab;
				var ax1 = arr[j].left + arr[j].xDeltab + arr[j].width;
				var ay = arr[j].bottom;
				var ay1 = arr[j].bottom + arr[j].height;
		
				for(let i=0; i<arr.length; i++)
				{
					var bx = arr[i].left;
					var bx1 =arr[i].left+ arr[i].width;
					var by = arr[i].bottom;
					var by1 = arr[i].bottom +arr[i].height;
		
					if(arr[i].type != "Bullet" && arr[i].type != "Kust" && intersects(ax, ax1, ay, ay1, bx, bx1, by, by1)==true)
					{
						if(arr[i].hp >=40 && arr[i].destroy == 1) // разрушаемость блоков от попаданий
						{
							arr[i].hp = arr[i].hp - 10;
						}
						else if(arr[i].hp >0 && arr[i].hp <40 && arr[i].destroy == 1)
						{
							arr[i].backgroundimage = "url(./src/sprites/block_destroy.png)";
							document.getElementById(arr[i].id).style.backgroundImage = arr[i].backgroundimage;
							arr[i].hp = arr[i].hp - 10;
						}
						if (arr[i].hp <=0 && arr[i].destroy == 1)
						{
							document.body.removeChild(document.getElementById(arr[i].id));
							arr.splice(i,1);
							i--;
							if(j > i) j--;
						}
						
						else if(arr[i].type == "Hero")// попадание по врагам
						{
							if(arr[i].hp>=26)
							{
								arr[i].hp = arr[i].hp - 25;
								document.getElementById(arr[i].id).firstChild.style.width = arr[i].hp * 0.45 + "px";
							}
							else
							{
								arr[i].hp =0;
								document.body.removeChild(document.getElementById(arr[i].id));
								arr.splice(i,1);
								i--;
								if(j > i) j--;
							}
						}
						arr[j].canMovebx = false;
					}
				}
				if(arr[j].canMovebx == true)
				{
					
					arr[j].xPosb = arr[j].xPosb - arr[j].xDeltab;
					arr[j].left = arr[j].left + arr[j].xDeltab;
					document.getElementById(arr[j].id).style.left = arr[j].left + "px";
				}
				else
				{
					arr[j].xPosb = 0;
					document.body.removeChild(document.getElementById(arr[j].id));
					arr.splice(j,1);
					j--;
				}
			}
			else if(arr[j].type == "Bullet" && arr[j].xPosb <=0 && arr[j].yPosb ==0)
			{
				document.body.removeChild(document.getElementById(arr[j].id));
				arr.splice(j,1);
				j--;
			}
		}

		if(cd !=0)
			{
				cd -=4;// чтобы cd пришло к 0 и можно было выстрелить, взято из addEventLstener - attack 
			}
	}

	function moveY() {
		for(var j = 0; j < arr.length;j++) 
		{
			if(arr[j].id == "hero" && arr[j].yPos !=0)
			{
				arr[j].yPos = arr[j].yPos - arr[j].yDelta;
		
				var ax = arr[j].left;
				var ax1 = arr[j].left + arr[j].width;
				var ay = arr[j].bottom + arr[j].yDelta;
				var ay1 = arr[j].bottom +arr[j].yDelta+ arr[j].height;
				arr[j].opacity = 1;
				document.getElementById("hero").style.opacity = arr[j].opacity;
		
				arr[j].canMovey = true;
			
				for(var i = 0; i < arr.length; i++) 
				{
					if(arr[i].id=="hero") continue;
					var bx = arr[i].left;
					var bx1 = arr[i].left + arr[i].width;
					var by = arr[i].bottom;
					var by1 = arr[i].bottom + arr[i].height;
					
					if(arr[i].type != "Kust" && arr[i].type !="Bullet" && intersects(ax, ax1, ay, ay1, bx, bx1, by, by1)==true) 
					{
						arr[j].canMovey = false;
						break;
					}
					if(arr[i].type == "Kust" && intersects(ax, ax1, ay, ay1, bx, bx1, by, by1)==true){
						arr[j].opacity = 0.2;
						document.getElementById(arr[j].id).style.opacity = "0.2";
					}
				}
				if(arr[j].canMovey==true)
				{	
					arr[j].bottom = arr[j].bottom + arr[j].yDelta;
					document.getElementById("hero").style.bottom = arr[j].bottom + "px";
				}
			}
			else if(arr[j].type =="Bullet" && arr[j].yPosb !=0)
			{
				var ax = arr[j].left;
				var ax1 = arr[j].left + arr[j].width;
				var ay = arr[j].bottom + arr[j].yDeltab;
				var ay1 = arr[j].bottom + arr[j].yDeltab + arr[j].height;

				arr[j].canMoveby = true;
				
				for(let i=0; i<arr.length; i++)
				{
					var bx = arr[i].left;
					var bx1 = arr[i].left+ arr[i].width;
					var by = arr[i].bottom;
					var by1 = arr[i].bottom +arr[i].height;
					if(arr[i].type != "Bullet" && arr[i].type != "Kust" && intersects(ax, ax1, ay, ay1, bx, bx1, by, by1)==true)
					{
						if(arr[i].hp >=40 && arr[i].destroy == 1) // разрушаемость блоков от попаданий
						{
							arr[i].hp = arr[i].hp - 10;
						}
						else if(arr[i].hp >0 && arr[i].hp <40 && arr[i].destroy == 1)
						{
							arr[i].backgroundimage = "url(./src/sprites/block_destroy.png)";
							document.getElementById(arr[i].id).style.backgroundImage = arr[i].backgroundimage;
							arr[i].hp = arr[i].hp - 10;
						}
						if (arr[i].hp <=0 && arr[i].destroy == 1)
						{
							document.body.removeChild(document.getElementById(arr[i].id));
							arr.splice(i,1);
							i--;
							if(j > i) j--;
						}
						else if(arr[i].type == "Hero")// попадание по врагам
						{
							if(arr[i].hp>=26)
							{
								arr[i].hp = arr[i].hp - 25;
								document.getElementById(arr[i].id).firstChild.style.width = arr[i].hp * 0.45 + "px";
							}
							else
							{
								arr[i].hp =0;
								document.body.removeChild(document.getElementById(arr[i].id));
								arr.splice(i,1);
								i--;
								if(j > i) j--;
							}
						};
						arr[j].canMoveby = false;
					}
				}
				if(arr[j].canMoveby == true)
				{
					arr[j].yPosb = arr[j].yPosb - arr[j].yDeltab;
					arr[j].bottom = arr[j].bottom + arr[j].yDeltab;
					document.getElementById(arr[j].id).style.bottom = arr[j].bottom + "px";
				}
				else
				{
					arr[j].yPosb = 0;
					document.body.removeChild(document.getElementById(arr[j].id));
					arr.splice(j,1);
					j--;
				}
			}
			else if(arr[j].type == "Bullet" && arr[j].yPosb <=0 && arr[j].xPosb ==0)
			{
				document.body.removeChild(document.getElementById(arr[j].id));
				arr.splice(j,1);
				j--;
			}
		}
	}
}
