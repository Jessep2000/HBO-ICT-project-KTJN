class Canvas
{
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    
    public constructor(canvasId: HTMLCanvasElement)
    {
        this.canvas.width = 1280;
        this.canvas.height = 720;
        
        this.canvas = canvasId;
        this.canvas.getContext("2d");
    }

    /**
     * writeTextToCanvas
     * @accessModifier {public}
     * @param {string} text - 
     * @param {number} fontSize - 
     * @param {number} xPos -
     * @param {number} yPos -
     * @param {string} color -
     * @param {CanvasTextAlign} alignment -
     */
    public writeTextToCanvas(
        text: string,
        fontSize: number,
        xPos: number,
        yPos: number,
        color: string = "white",
        alignment: CanvasTextAlign = "center"
    ): void {
        this.ctx.font = `${fontSize}px Supersonic Rocketship`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xPos, yPos)
    }

    public writeImageFromFileToCanvas(
        src: string,
        xPos: number,
        yPos: number) {

        let image = new Image();
        // add the listener so the waiting will not affect the change
        image.addEventListener('load', () => {
            //this.context.clip();
            this.ctx.drawImage(image, xPos, yPos);
        });

        // load the source in the image.
        image.src = src;
    }

}