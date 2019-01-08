class Game
{
    private menuScreen: MenuScreen;
    private gameScreen: GameScreen;
    private highscoreScreen: HighscoreScreen;

    private readonly canvas: Canvas;

    public constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");

        this.menuScreen = new MenuScreen(canvasElement);
        this.gameScreen = new GameScreen(canvasElement);
        this.highscoreScreen = new HighscoreScreen();

        this.canvas = new Canvas(canvasElement);
    };

    public draw(): void {
        //clear canvas
        this.canvas.clearCanvas();

        //load menu screen
        this.menuScreen.drawMenu();
        //console.log("load menu");
    };
}

let init = function() {
    const DeliverRace = new Game();
    DeliverRace.draw();
};

window.addEventListener("load", init)