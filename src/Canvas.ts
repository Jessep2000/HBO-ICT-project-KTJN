class Canvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public game: Game;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.canvas.width = 800;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");
        this.game = new Game(canvas);
    }

    public initGame(){
        this.game.init();
    }
}

const canvas = <HTMLCanvasElement>document.getElementById('canvas')

let init = function () {
    const DeliverRace = new Canvas(canvas);
    DeliverRace.initGame();
}

window.addEventListener("load", init);

