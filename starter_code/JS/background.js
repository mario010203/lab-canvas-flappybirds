class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = "starter_code/images/bg.png";
        this.posX = 0;
        this.posy = 0;
        //this.vx=8; background speed
    }
    draw() {
        this.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height
        );
        this.ctx.drawImage(
            this.image,
            this.posX + this.width,
            this.posY,
            this.width,
            this.height
        );
    }

    move() {
        this.posX -= this.vx;
        if (this.posX <= -this.width) this.posX = 0;
    }
}
