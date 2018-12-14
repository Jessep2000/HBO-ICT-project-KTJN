class Entity
{
    private imageSource: string;
    private xPos: number;
    private yPos: number;
    private width: number;
    private height: number; 

    protected _canvas: Canvas;

    public constructor(imgSrc: string, xCoor: number, yCoor: number, width: number, height: number, canvas: HTMLCanvasElement) {
        this.imageSource = imgSrc;
        this.xPos = xCoor;
        this.yPos = yCoor;
        this.width = width;
        this.height = height;
        // this._canvas = canvas
    }

    //Draw bus
    public drawBus(): void {
        //this._canvas.writeImageToCanvas(/*TODO: add missing arguments*/)
    }
}