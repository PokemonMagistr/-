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