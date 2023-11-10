class myObject {
    constructor(type) {
       // stone
       if(type == "block") {
       
       this.width =  40;
       this.height = 40;
       this.backgroundimage = "url(./src/sprites/block.png)";
       this.bottom =  0;
       this.left =  0;
       this.backgroundsize =  "contain";
       this.position =  "absolute";
       this.id = "";
       this.hp = 50;
       this.destroy = 1;
       }
       
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

       //Kust
       if("Kust" == type )
       {
        this.width = 70;
        this.height = 70;
        this.left = 0;
        this.bottom = 0;
        this.backgroundimage = "url(./src/sprites/Kust.png)";
        this.backgroundsize = "contain";
        this.position = "absolute";
        this.id = "kust";
        this.type = "Kust";
        this.opacity = 0.7;

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
       else if(this.type == "Kust")
       {
        d.style.opacity= "0.7"
       }
   }

   

}