class Game
{
    private _canvas: Canvas;

    public constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);
        this.draw()
        console.error("TEST")
    }

    public draw() {
        // this._canvas.writeTextToCanvas("HI", 30, this._canvas.getHorizontalCenter(), this._canvas.getVerticalCenter(), "black", "center")
        this._canvas.writeImageFromFileToCanvas("../assets/images/road_tile/house_double/0/straight.png", 0, 0)
    }
}

let init = function() {
    const DeliverRace= new Game();
}

window.addEventListener("load", init);