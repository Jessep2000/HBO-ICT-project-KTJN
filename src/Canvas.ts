class Canvas {
    public readonly canvas: HTMLCanvasElement;
    public readonly ctx: CanvasRenderingContext2D;

    public constructor(canvasId: HTMLCanvasElement) {
        this.canvas = canvasId;
        //TODO: Find a way to make the game fullscreen;
        this.canvas.width = 640;
        this.canvas.height = 640;

        this.ctx = this.canvas.getContext("2d");
    };

    //Get width of canvas
    public GetWidth(): number {
        return this.canvas.width;
    };

    //Get height of canvas
    public GetHeight(): number {
        return this.canvas.height;
    };

    //Get center of canvas
    public GetCenter(): number {
        return this.canvas.width / 2,       //width
            this.canvas.height / 2      //height
    };

    //Clear canvas
    public clearCanvas(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    };

    //-----------------------------------------------------------------------------------------------
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
        this.ctx.fillText(text, xPos, yPos);
    };

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
        yPos: number,
        width?: number,
        height?: number
    ): void {
        let image = new Image();

        image.addEventListener("load", () => {
            this.ctx.drawImage(image, xPos, yPos, width, height);
        });

        image.src = src;
    };

    /**
     * writeTileToCanvasAP
     * @accessModifier {public}
     * @param {string} src -
     * @param {number} xPos -
     * @param {number} yPos -
     */
    public writeTileToCanvasAP(
        src: string,
        xPos: number,
        yPos: number
    ): void {
        let image = new Image();
        image.src = src;

        image.addEventListener("load", () => {
            this.ctx.drawImage(image, xPos, yPos);
        });
    };

    /**
     * @accessModifier {public}
     * @param {number} xPos -
     * @param {number} yPos -
     * @param {number} width -
     * @param {number} height -
     * @param {string} color -
     */
    public writeButtonToCanvas(
        xPos: number,
        yPos: number,
        width: number,
        height: number,
        color: string
    ): void {
        this.ctx.beginPath();
        this.ctx.rect(xPos, yPos, width, height);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath()
    };
}