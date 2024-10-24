const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")


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
       
        this.snakeplayer = 25
        this.px = 250
        this.py = 250
        this.start = 250
        this.food = 18
        this.positionX = Math.random()* (canvas.width - this.food)
        this.positionY = Math.random()*(canvas.height - this.food)
     }

     collision(){
        if (
            this.px < this.positionX + this.food && // Lado direito da snakeplayer ultrapassa o lado esquerdo da food
            this.px + this.snakeplayer > this.positionX && // Lado esquerdo da snakeplayer ultrapassa o lado direito da food
            this.py < this.positionY + this.food && // Lado inferior da snakeplayer ultrapassa o lado superior da food
            this.py + this.snakeplayer > this.positionY // Lado superior da snakeplayer ultrapassa o lado inferior da food
        ){
            this.positionX = Math.random() * (canvas.width - this.food)
            this.positionY = Math.random() * (canvas.height - this.food)
        }
     }

   

     
     
    draw = ()=>{

         this.ctx.clearRect(0,0,500,500)
        
             
             if(this.teclado.right){
                 this.px+=2
                }
             if(this.teclado.left){
                this.px-=2
             } 
             
             if(this.teclado.up){
                this.py-=2
             } 
    
             if(this.teclado.down){
                this.py+=2
             } 
        
         this.ctx.fillStyle = "#f00f"
         this.ctx.fillRect(this.px, this.py, this.snakeplayer, this.snakeplayer) 

         if(this.px+this.snakeplayer+1 > canvas.width || this.px < 0 ){
            this.px = this.start
          }

          if(this.py+this.snakeplayer+1 > canvas.height || this.py < 0 ){
            this.py = this.start
          }

          this.ctx.fillStyle= "#00ff"
          this.ctx.fillRect(this.positionX, this.positionY, this.food,this.food)


         this.collision()
          

        
        requestAnimationFrame(this.draw)
    }
    
}


const game = new Game(ctx)







 







