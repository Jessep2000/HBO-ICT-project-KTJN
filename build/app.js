class Canvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    getHorizontalCenter() {
        return this.canvas.width / 2;
    }
    getVerticalCenter() {
        return this.canvas.height / 2;
    }
    writeTextToCanvas(text, fontSize, xPos, yPos, color = "white", alignment = "center") {
        this.ctx.font = `${fontSize}px SSRS`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xPos, yPos);
    }
    writeImageFromFileToCanvas(src, xPos, yPos) {
        let image = new Image();
        image.addEventListener('load', () => {
            this.ctx.drawImage(image, xPos, yPos);
        });
        image.src = src;
    }
}
class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);
        this.draw();
        console.error("TEST");
    }
    draw() {
        this._canvas.writeImageFromFileToCanvas("../assets/images/road_tile/house_double/0/straight.png", 0, 0);
    }
}
let init = function () {
    const DeliverRace = new Game();
};
window.addEventListener("load", init);
//# sourceMappingURL=app.js.map