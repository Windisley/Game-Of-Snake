const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const $point = document.querySelector(".point")

   class Game{
       constructor(ctx){
       this.ctx = ctx
       
       this.teclado = {
        left: false,
        right: false,
        down: false,
        up: false
    }
    
    this.draw()
    this.tecla()
    this.config()

  
       }

    
     tecla(){
       window.addEventListener("keydown", (e)=>{
            if(e.key === "ArrowDown"){
               this.teclado.down = true
            }
            if(e.key === "ArrowUp"){
               this.teclado.up = true
            }
            if(e.key === "ArrowLeft"){
               this.teclado.left = true
            }
            if(e.key === "ArrowRight"){
                this.teclado.right = true
            }

       })

       window.addEventListener("keyup", (e)=>{
        if(e.key === "ArrowDown"){
         this.teclado.down = false
        }
        if(e.key === "ArrowUp"){
            this.teclado.up = false
           }
           if(e.key === "ArrowLeft"){
            this.teclado.left = false
           }
           if(e.key === "ArrowRight"){
            this.teclado.right = false
           }
       })

     }

     config(){
       
        this.snakeplayerW = 25
        this.snakeplayerH = 20
        this.px = 250
        this.py = 250
        this.start = 250
        this.food = 18
        this.positionX = Math.random()* (canvas.width - this.food)
        this.positionY = Math.random()*(canvas.height - this.food)
        this.point = 0
        this.velX = 2
        this.velY = 2
     }

     collision(){
        if (
            this.px < this.positionX + this.food &&
            this.px + this.snakeplayerW > this.positionX && 
            this.py < this.positionY + this.food &&
            this.py + this.snakeplayerH > this.positionY 
        ){
            this.positionX = Math.random() * (canvas.width - this.food)
            this.positionY = Math.random() * (canvas.height - this.food)
            this.point++
            $point.innerHTML = this.point
            this.snakeplayerH+=5
           
            
        }

        if(this.point > 20){
            this.velX = 7;
            this.velY = 7;
        } else if(this.point > 10){
            this.velX = 5;
            this.velY = 5;
        } else if(this.point > 5){
            this.velX = 4;
            this.velY = 4;
        } else {
            this.velX = 2;
            this.velY = 2;
        }
     }
     
     gameOver(){

        if(this.px+this.snakeplayerW+1 > canvas.width || this.px < 0 ){
            this.px = this.start
            this.py = this.start
           this.point = 0
           $point.innerHTML= this.point
           this.snakeplayerH = 20; 
           this.snakeplayerW = 25;
          }

          if(this.py+this.snakeplayerH+1 > canvas.height || this.py < 0 ){
            this.py = this.start
            this.px = this.start
            this.point = 0
           $point.innerHTML= this.point
           this.snakeplayerH = 20;  
           this.snakeplayerW = 25;

          }
     }

   

     
     
    draw = ()=>{

         this.ctx.clearRect(0,0,500,500)
        
             
             if(this.teclado.right){
                 this.px+=this.velX
                }
             if(this.teclado.left){
                this.px-=this.velX
             } 
             
             if(this.teclado.up){
                this.py-=this.velY
             } 
    
             if(this.teclado.down){
                this.py+=this.velY
             } 
        
         this.ctx.fillStyle = "#f00f"
         this.ctx.fillRect(this.px, this.py, this.snakeplayerW, this.snakeplayerH) 


          this.ctx.fillStyle= "#00ff"
          this.ctx.fillRect(this.positionX, this.positionY, this.food,this.food)

         this.gameOver()
         this.collision()
          

        
        requestAnimationFrame(this.draw)
    }
    
}


const game = new Game(ctx)







 







