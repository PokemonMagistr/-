function checkMove()
{
	for(let j=0; j<arr.length; j++)
	{
		if(arr[j].id == "hero")
		{
			let i = moveArr.length-1;
			if(moveArr[i]==37)
			{
				arr[j].xPos = -20;
				arr[j].xDelta = -4;
				arr[j].angle = 270;
				var hero_check = document.getElementById("hero");
				hero_check.style.transform = "rotate(" + arr[j].angle + "deg)";
				let deg_for_hp = - 270;

				hero_check.firstChild.style.transform = "rotate(" +  deg_for_hp + "deg)";
				hero_check.firstChild.style.left = "-30px";
				hero_check.firstChild.style.bottom = "-20px";
			}
			if(moveArr[i]==39)
			{
				arr[j].xPos = 20;
				arr[j].xDelta = 4;
				arr[j].angle = 90;
				var hero_check = document.getElementById("hero");
				hero_check.style.transform = "rotate(" + arr[j].angle + "deg)";
				let deg_for_hp = - 90;
				hero_check.firstChild.style.transform = "rotate(" + deg_for_hp + "deg)";
				hero_check.firstChild.style.left = "25px";
				hero_check.firstChild.style.bottom = "-20px";
			}
			if(moveArr[i]==38)
			{
				arr[j].yPos = 20;
				arr[j].yDelta = 4;
				arr[j].angle = 0;
				var hero_check = document.getElementById("hero");
				hero_check.style.transform = "rotate(" + arr[j].angle + "deg)";
				let deg_for_hp = 0;
				hero_check.firstChild.style.transform = "rotate(" + deg_for_hp + "deg)";
				hero_check.firstChild.style.left = "0px";
				hero_check.firstChild.style.bottom = "-45px";
			}
			if(moveArr[i]==40)
			{
				arr[j].yPos = -20;
				arr[j].yDelta = -4;
				arr[j].angle = 180;
				var hero_check = document.getElementById("hero");
				hero_check.style.transform = "rotate(" + arr[j].angle + "deg)";
				let deg_for_hp = - 180;
				hero_check.firstChild.style.transform = "rotate(" + deg_for_hp + "deg)";
				hero_check.firstChild.style.left = "-5px";
				hero_check.firstChild.style.bottom = "10px";
			}
			if( moveArr[i] == 32)
			{
				attack();
			}
		}
		else{
			continue;
		}
	}

	 
}



