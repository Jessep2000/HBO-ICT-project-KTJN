class Game
{
    private _canvas: Canvas;
    private _timer: Timer;
    
    public constructor()
    {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);
    }
}

let init = function() {
    const Deliveration = new Game()
}

window.addEventListener("load", init);