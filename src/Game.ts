class Game {
    private _canvas: Canvas;
    private _levels: Levels;
    // private _bus: Bus;

    public constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        this._levels = new Levels
        this._canvas = new Canvas(5,this._levels.level1_1, canvasElement);
        // this._bus = new Bus();
        this.draw()

        console.error("TEST")
    }

    public draw() {
        this._canvas.init();
        // this._canvas.writeTextToCanvas("HI", 30, this._canvas.getHorizontalCenter(), this._canvas.getVerticalCenter(), "black", "center")
        // this._canvas.writeImageToCanvas("../assets/images/road_tile/house_double/0/straight.png", 0, 0)
    }
}

let init = function () {
    const DeliverRace = new Game();
}

window.addEventListener("load", init);