class Entity
{
    private readonly imageSource: string;
    private readonly canvas: Canvas;
    private xPos: number;
    private yPos: number;
    private width: number;
    private height: number;

    public constructor(imageSrc: string, xCoor: number, yCoor: number, width: number, height: number, canvas: HTMLCanvasElement) {
        this.imageSource = imageSrc;
        this.xPos = xCoor;
        this.yPos = yCoor;
        this.width = width;
        this.height = height;
        //this.canvas = new Canvas(canvas /*Need 2 more arguments*/);
    }
}