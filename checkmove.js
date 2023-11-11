function checkMove()
{
	//for(let j=0; j<arr.length; j++)
	//{
		var obj2 = arr.find(obj => obj.id == 'hero');
		//if(arr[j].id == "hero")
		//{
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
		//}
		//}
		//else{
		//	continue;
		}
	//}
}



