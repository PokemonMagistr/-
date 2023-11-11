document.addEventListener('DOMContentLoaded', function(){ 
{
    for(var i=0;i<68;i++)
    {
    var block = new myObject("block");
    block.left= (i)*20;
    block.width = 20;
    block.height = 20;
    block.bottom = 0;
    block.id = current_bullet;
    current_bullet++;
    block.destroy = 0;
    arr.push(block);
    }
    for(var i=0;i<31;i++)
    {
    var block = new myObject("block");
    block.bottom= (i)*20;
    block.width = 20;
    block.height = 20;
    block.left = 0;
    block.id = current_bullet;
    current_bullet++;
    block.destroy = 0;
    arr.push(block);
    }
    for(var i=0;i<68;i++)
    {
    var block = new myObject("block");
    block.left= (i)*20;
    block.bottom = 600;
    block.width = 20;
    block.height = 20;
    block.id = current_bullet;
    current_bullet++;
    block.destroy = 0;
    arr.push(block);
    }
    for(var i=0;i<31;i++)
    {
    var block = new myObject("block");
    block.bottom = (i)*20;
    block.left = 1340;
    block.width = 20;
    block.height = 20;
    block.id = current_bullet;
    current_bullet++;
    block.destroy = 0;
    arr.push(block);
    }
    
    for(var i =0; i<3; i++)
    {
       var block = new myObject("block");
       block.width = 60
       block.height = 40;
       block.left = 100;
       block.bottom = (i)*40 + 400;
       block.id = current_bullet;
       current_bullet++;
       block.destroy = 1;
       arr.push(block);
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 250;
       block.bottom = (i)*40 + 400;
       block.id = current_bullet;
        current_bullet++;
        block.destroy = 1;
       arr.push(block);
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 400;
       block.bottom = (i)*40 + 400;
       block.id = current_bullet;
        current_bullet++;
        block.destroy = 1;
       arr.push(block);
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 900;
       block.bottom = (i)*40 + 400;
       block.id = current_bullet;
        current_bullet++;
        block.destroy = 1;
       arr.push(block);
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 1050;
       block.bottom = (i)*40 + 400;
       block.id = current_bullet;
        current_bullet++;
        block.destroy = 1;
       arr.push(block);
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 1200;
       block.bottom = (i)*40 + 400;
       block.id = current_bullet;
        current_bullet++;
        block.destroy = 1;
       arr.push(block);
    }
    
    for(var i =0; i<3; i++)
    {
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 100;
       block.bottom = (i)*40 + 90;
       block.id = current_bullet;
        current_bullet++;
        block.destroy = 1;
       arr.push(block);
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 250;
       block.bottom = (i)*40 + 90;
       block.id = current_bullet;
        current_bullet++;
        block.destroy = 1;
       arr.push(block);
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 400;
       block.bottom = (i)*40 + 90;
       block.id = current_bullet;
       current_bullet++;
       block.destroy = 1;
       arr.push(block);
    
    
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 900;
       block.bottom = (i)*40 + 90;
       block.id = current_bullet;
       current_bullet++;
       block.destroy = 1;
       arr.push(block);
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 1050;
       block.bottom = (i)*40 + 90;
       block.id = current_bullet;
       current_bullet++;
       block.destroy = 1;
       arr.push(block);
    
       var block = new myObject("block");
       block.width = 60;
       block.height = 40;
       block.left = 1200;
       block.bottom = (i)*40 + 90;
       block.id = current_bullet;
       current_bullet++;
       block.destroy = 1;
       arr.push(block);
    }
    
    for(var i=0; i<6; i++)
    {
       var block = new myObject("block");
       block.width = 60;
       block.height = 60;
       block.left = 650;
       block.bottom = (-i)*60 + 400;
       block.id = current_bullet;
       current_bullet++;

       arr.push(block);
    }
}

    for(let i =0; i <5; i++)
    {
        var kust = new myObject("Kust");
        kust.left = 500;
        kust.bottom = (-i)*70 + 400;
        kust.id = current_bullet;
        current_bullet++;
        arr.push(kust);
    }
    for(let i =0; i <5; i++)
    {
        var kust = new myObject("Kust");
        kust.left = 800;
        kust.bottom = (-i)*70 + 400;
        kust.id = current_bullet;
        current_bullet++;
        arr.push(kust);
    }
    

    
    //bullet = new myObject("bullet");

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


    document.addEventListener('keydown', function (e){
        var keyPressed = e.keyCode;
            moveArr.push(keyPressed);
    })
   document.addEventListener('keyup', function(e){
        var keyRelased = e.keyCode;

        moveArr = moveArr.filter(key => key !== keyRelased);
})