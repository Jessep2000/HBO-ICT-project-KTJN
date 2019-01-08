class Game
{
    private canvas: Canvas;
    
    private menuScreen: MenuScreen;
    private gameScreen: GameScreen;
    private highscoreScreen: HighscoreScreen;


    public constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        this.canvas = new Canvas(canvasElement);

        this.menuScreen = new MenuScreen(canvasElement);
        this.gameScreen = new GameScreen(canvasElement);
        this.highscoreScreen = new HighscoreScreen();

    };

    public draw(): void {
        //load menu screen
        this.menuScreen.drawMenu();
        
        //Add event handler
        let buttonX: number = 650;
        let buttonY: number = 350;
        let buttonW: number = 200;
        let buttonH: number = 80;

        this.canvas.canvas.addEventListener("click", (event) => {
            if (
                event.x > buttonX &&
                event.x < buttonX + buttonW &&
                event.y > buttonY &&
                event.y < buttonY + buttonH
            ) {
                this.canvas.clearCanvas();
                buttonW = 0;
                buttonH = 0;
                console.log("start");
                this.gameScreen.drawGame()
            }
        });
    };
}

let init = function() {
    const DeliverRace = new Game();
    DeliverRace.draw();
};

window.addEventListener("load", init)