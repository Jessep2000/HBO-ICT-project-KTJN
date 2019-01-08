class MenuScreen
{
    private canvas: Canvas;

    public constructor(canvasElem: HTMLCanvasElement) {
        this.canvas = new Canvas(canvasElem);
    };

    public drawMenu(): void {
        //draw title to canvas
        this.canvas.writeTextToCanvas("DeliverRace", 70, 320, 100, "red");
        
        //draw start-button to canvas
        this.canvas.writeButtonToCanvas(175, 300, 300, 100, "limegreen");
        
        //draw "Play" text
        this.canvas.writeTextToCanvas("Play", 40, 325, 365, "black");
        
        //test console
        console.log("menu drawn")
    };
}