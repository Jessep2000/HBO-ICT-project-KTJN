class CanvasHelper {

    protected readonly canvas: HTMLCanvasElement;
    protected readonly ctx: CanvasRenderingContext2D;


    public constructor(canvas: HTMLCanvasElement){
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
    }

    //Get width of canvas
    public GetWidth(): number {
        return this.canvas.width
    }

    //Get height of canvas
    public GetHeight(): number {
        return this.canvas.height
    }

    //Get center of canvas
    public GetCenter(): { X: number, Y: number } {
        return { X: this.GetWidth() / 2, Y: this.GetHeight() / 2 };
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
        this.ctx.font = `${fontSize}px SSRS`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xPos, yPos)
    }

    /**
     * writeImageToCanvas
     * @accessModifier {public}
     * @param {string} src -
     * @param {number} xPos -
     * @param {number} yPos -
     */
    public writeImageToCanvas(
        src: string,
        xPos: number,
        yPos: number) {

        let image = new Image();

        image.addEventListener('load', () => {
            this.ctx.drawImage(image, xPos, yPos);
        });

        image.src = src;
    }
}