class myObject {
    constructor(type) {
       // hero
       if(type == "hero") {
       
       this.width = 40;
       this.height = 40;
       this.backgroundimage = "url(./src/sprites/player-top.png)";
       this.bottom = 102;
       this.left = 40;
       this.backgroundsize = "contain";
       this.position = "absolute";
       this.id = "";
       this.angle = 0;
       this.type = "Hero";
       this.hp = 100;
       this.xPos = 0;
       this.yPos = 0;
       this.xDelta = 0;
       this.yDelta = 0;
       this.opacity = 1;
       this.canMovex = "";
       this.canMovey = "";
       } 
       //bullet
       if(type == "bullet")
       {
       this.width = 5;
       this.height = 5;
       this.backgroundimage = "url(./src/sprites/bullet.png)";
       this.bottom = 500;
       this.left = 500;
       this.backgroundsize = "contain";
       this.position = "absolute";
       this.id = "";
       this.yPosb = 0;
       this.xPosb = 0;
       this.yDeltab = 0;
       this.xDeltab = 0;
       this.type = "Bullet";
       this.canMovebx = true;
       this.canMoveby = true;

       }
   }
   myRender() {
    
       let d=document.createElement('div');
       d.style.width = this.width + "px";
       d.style.height = this.height + "px";
       d.style.backgroundImage = this.backgroundimage;
       d.style.bottom = this.bottom + "px";
       d.style.left = this.left + "px";
       d.style.backgroundSize = this.backgroundsize;
       d.style.position = this.position;
       d.style.transform = this.angle;
       d.id = this.id;
       document.body.appendChild(d);
       if(this.type=="Hero"){
            let hp = document.createElement('div');
            hp.style.width = hero.width;
            hp.style.width=hero.hp * 0.45;
            hp.style.height="5px";
            hp.style.left="0px";
            hp.style.bottom="-45px"
            hp.style.background="red";
            hp.style.position="relative";
            hp.style.transform="rotate(0deg)";
            d.appendChild(hp);
       }
   }
}

document.addEventListener('DOMContentLoaded', function()
{

    let border = document.createElement('div'); // граница за которую не заедут танки
    border.style.backgroundColor = "black";
    border.style.width = window.innerWidth - 80 + "px";
    border.style.height = window.innerHeight - 80 + "px";
    border.style.border = "1px solid white";
    border.style.position = "center";
    border.style.margin = "auto auto auto auto";
    document.body.appendChild(border);
    border.width = window.innerWidth - 80;
    border.height = window.innerHeight - 80;


    hero =  new myObject("hero");
    hero.id = "hero";
    arr.push(hero);

    var hero2 = new myObject("hero")
    hero2.bottom = 500;
    hero2.left = 500;
    hero2.id = current_bullet;
    current_bullet++;
    arr.push(hero2);
       for(var i = 0; i < arr.length; i++) {

            arr[i].myRender();
        }
        for(var i = 0; i < arrkust.length; i++) {

            arrkust[i].myRender();
        }
       var myIntervalY = setInterval(move, 20);
       var intervalMove = setInterval(checkMove,20);
    }
    );

    document.addEventListener('keydown', function (e){ //передвижение игрока
        var keyPressed = e.keyCode;
            moveArr.push(keyPressed);
    })
   document.addEventListener('keyup', function(e){
        var keyRelased = e.keyCode;

        moveArr = moveArr.filter(key => key !== keyRelased);
})

function checkMove()
{
		var obj2 = arr.find(obj => obj.id == 'hero');

			let i = moveArr.length-1;
			for(let t=0; t<moveArr.length; t++){
			if(moveArr[t]==37)
			{
				obj2.xPos = -20;
				obj2.xDelta = -4;
				obj2.angle = 270;
				var hero_check = document.getElementById("hero");
				hero_check.style.transform = "rotate(" + obj2.angle + "deg)";
				let deg_for_hp = - 270;

				hero_check.firstChild.style.transform = "rotate(" +  deg_for_hp + "deg)";
				hero_check.firstChild.style.left = "-30px";
				hero_check.firstChild.style.bottom = "-20px";
			}
			if(moveArr[t]==39)
			{

				obj2.xPos = 20;
				obj2.xDelta = 4;
				obj2.angle = 90;
				var hero_check = document.getElementById("hero");
				hero_check.style.transform = "rotate(" + obj2.angle + "deg)";
				let deg_for_hp = - 90;
				hero_check.firstChild.style.transform = "rotate(" + deg_for_hp + "deg)";
				hero_check.firstChild.style.left = "25px";
				hero_check.firstChild.style.bottom = "-20px";
			}
			if(moveArr[t]==38)
			{
				obj2.yPos = 20;
				obj2.yDelta = 4;
				obj2.angle = 0;
				var hero_check = document.getElementById("hero");
				hero_check.style.transform = "rotate(" + obj2.angle + "deg)";
				let deg_for_hp = 0;
				hero_check.firstChild.style.transform = "rotate(" + deg_for_hp + "deg)";
				hero_check.firstChild.style.left = "0px";
				hero_check.firstChild.style.bottom = "-45px";
			}
			if(moveArr[t]==40)
			{

				obj2.yPos = -20;
				obj2.yDelta = -4;
				obj2.angle = 180;
				var hero_check = document.getElementById("hero");
				hero_check.style.transform = "rotate(" + obj2.angle + "deg)";
				let deg_for_hp = - 180;
				hero_check.firstChild.style.transform = "rotate(" + deg_for_hp + "deg)";
				hero_check.firstChild.style.left = "-5px";
				hero_check.firstChild.style.bottom = "10px";
			}
			if( moveArr[t] == 32 && canShot)
			{

				attack();
				canShot = false;
				setTimeout(function(){
					canShot = true;
				}, 1000);
			}
		}

}

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



function intersects ( ax, ax1, ay, ay1, bx, bx1, by, by1 ) {
    return(
      (
        (
          ( ax>=bx && ax<=bx1 )||( ax1>=bx && ax1<=bx1  )
        ) && (
          ( ay>=by && ay<=by1 )||( ay1>=by && ay1<=by1 )
        )
      )||(
        (
          ( bx>=ax && bx<=ax1 )||( bx1>=ax && bx1<=ax1  )
        ) && (
          ( by>=ay && by<=ay1 )||( by1>=ay && by1<=ay1 )
        )
      )
    )||(
      (
        (
          ( ax>=bx && ax<=bx1 )||( ax1>=bx && ax1<=bx1  )
        ) && (
          ( by>=ay && by<=ay1 )||( by1>=ay && by1<=ay1 )
        )
      )||(
        (
          ( bx>=ax && bx<=ax1 )||( bx1>=ax && bx1<=ax1  )
        ) && (
          ( ay>=by && ay<=by1 )||( ay1>=by && ay1<=by1 )
        )
      )
    );
  }

  function attack(){
    for(let i=0; i<arr.length; i++)
    {   
        if(arr[i].id == "hero")
        {
            var bullet = new myObject("bullet");
            if(arr[i].angle==0){
                bullet.left = arr[i].left-2 +arr[i].width/2 ;
                bullet.bottom = arr[i].bottom + arr[i].height + bullet.height;
                bullet.yPosb = 300;
                bullet.yDeltab = 5;
                
            }
            if(arr[i].angle==90){
                bullet.left = arr[i].left + arr[i].width;
                bullet.bottom = arr[i].bottom-2 + arr[i].height/2;
                bullet.xPosb = 300;
                bullet.xDeltab = 5;
                
            }
            if(arr[i].angle==180){
                bullet.left = arr[i].left-2 + arr[i].width/2;
                bullet.bottom = arr[i].bottom - 10;
                bullet.yPosb = -300;
                bullet.yDeltab = -5;
                
            }
            if(arr[i].angle==270){
                bullet.left = arr[i].left-bullet.width;
                bullet.bottom = arr[i].bottom + arr[i].height/2;
                bullet.xPosb = -300;
                bullet.xDeltab = -5;
                
            }
            
            bullet.id = current_bullet;
            current_bullet++;
            arr.push(bullet);
            bullet.myRender();
            
           
        }
        else{
            continue;
        }
    }
}

