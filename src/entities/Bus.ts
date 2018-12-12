class Bus
{
    
    public canvas: Canvas;
    public imageSrc: string;
    public xPos: number;
    public yPos: number;

    constructor(canvas: HTMLCanvasElement, imageSrc: string, xPos: number, yPos: number) {
        
    }

    public drawBus() {
        this.canvas.writeImageFromFileToCanvas(this.imageSrc, this.xPos, this.yPos);
    }
}