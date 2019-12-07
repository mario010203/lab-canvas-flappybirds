class Player {
    constructor(ctx, width, height, image, speedx, speedy, gravity, gravitySpeed) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = image;
    }
}