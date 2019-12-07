class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 50;
        this.height = 50;

        this.image = new Image();
        this.image.src = "./images/flappy.png";
        this.posX = 50;
        this.posY = 500 / 2;
        this.posY0 = 500 * 0.98 - this.height;
        //this.speedX = ;
        this.speedY = 1;
        this.gravity = 0.4;
        this.gravitySpeed= 1;
    
    }
    draw(framesCounter) {
        this.ctx.drawImage(
            this.image,
            this.framesIndex * Math.floor(this.image.width / this.frames),
            0,
            Math.floor(this.image.width / this.frames),
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
            );
    }

    move() {
        if(this.posY > this.posY0){
            this.posY += this.gravity * this.gravitySpeed;
        }

    }
}