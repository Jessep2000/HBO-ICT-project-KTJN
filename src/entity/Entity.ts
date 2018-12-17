class Entity
{
    protected helper: CanvasHelper;
    protected imageSource: string;
    protected xPos: number;
    protected yPos: number;
    protected width: number;
    protected height: number;

    public constructor(imageSrc: string, xCoor: number, yCoor: number, width: number, height: number, canvas: HTMLCanvasElement) {
        this.helper = new CanvasHelper(canvas);
        this.imageSource = imageSrc;
        this.xPos = xCoor;
        this.yPos = yCoor;
        this.width = width;
        this.height = height;
        //this.canvas = new Canvas(canvas /*Need 2 more arguments*/);
    }

}