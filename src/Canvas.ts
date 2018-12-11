class Canvas
{
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    
    public constructor(canvasId: HTMLCanvasElement)
    {
        this.canvas = canvasId;
        this.canvas.width = 1280;
        this.canvas.height = 720;

        this.canvas.getContext("2d");
    }
}