class Canvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    public constructor(size: number, lvlInfo: Array<string>, canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.canvas.width = 800;
        this.canvas.height = 800;

        this.ctx = this.canvas.getContext("2d");


        //-------------------------------------

        this.size = size;
        this.levelInfo = lvlInfo
        this.canvas.addEventListener('click', (event) => {
            this.checkClick(event.screenX, event.screenY)
        })

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

    //--------------------------------------------------------------------------------------------------------------------------------------
    private levelInfo: Array<string>;
    private size: number;
    private anchorPointX: Array<number> = []
    private anchorPointY: Array<number> = []
    private anchorPointGetPos: Boolean;

    //Initialize the canvas
    public init() {
        if (this.levelInfo.length !== (this.size * this.size)) {
            console.error('array "levelInfo" is not of proper size. Check syntax when creating object "level"')
        } else {
            this.writeLevel();
        }
    }

    //Draw level to canvas
    public writeLevel() {
        let tileXpos = 0;
        let tileYpos = 0;
        let tilecounter = 0;
        for (let i = 0; i < this.size * this.size; i++) {
            let imgstring = './assets/images/road_tile/'
            let testString = this.levelInfo[i];
            if (testString.includes('grass')) {
                imgstring = imgstring + 'grass.png';
                this.anchorPointGetPos = false
            } else {
                this.anchorPointGetPos = true;
            }
            if (testString.includes('1_')) {
                imgstring = imgstring + 'empty/'
            }
            if (testString.includes('2_')) {
                imgstring = imgstring + 'house_normal/'
            }
            if (testString.includes('3_')) {
                imgstring = imgstring + 'house_double/'
            }
            if (testString.includes('4_')) {
                imgstring = imgstring + 'house_hp/'
            }
            if (testString.includes('x_split')) {
                imgstring = imgstring + 'X-split.png'
            }
            if (testString.includes('_0_')) {
                imgstring = imgstring + '0/'
            }
            if (testString.includes('90')) {
                imgstring = imgstring + '90/'
            }
            if (testString.includes('180')) {
                imgstring = imgstring + '180/'
            }
            if (testString.includes('270')) {
                imgstring = imgstring + '270/'
            }
            if (testString.includes('straight')) {
                imgstring = imgstring + 'straight.png'
            }
            if (testString.includes('t_split')) {
                imgstring = imgstring + 'T-split.png'
            }
            if (testString.includes('turn')) {
                imgstring = imgstring + 'turn.png'
            }
            if (testString.includes('dead')) {
                imgstring = imgstring + 'deadend.png'
            }
            if (this.anchorPointGetPos == true) {
                this.writeTileToCanvasAP(imgstring, tileXpos, tileYpos);
            }
            else {this.writeTileToCanvasAP(imgstring, tileXpos, tileYpos)}
            
            this.getHitBoxes(tileXpos, tileYpos)
            if (tilecounter >= this.size - 1) {
                tileYpos = tileYpos + 129;
                tileXpos = 0;
                tilecounter = 0;
            } else {
                tileXpos = tileXpos + 129;
                tilecounter++;
            }
            // console.log(tileYpos, tileXpos);
            // console.log(tilecounter)
            // console.log(imgstring)
        }
    }

    /**
     * writeTileToCanvas
     * @accessModifier {public}
     * @param {string} src -
     * @param {number} xPos -
     * @param {number} yPos -
     */
    public writeTileToCanvasAP(src: string, xPos: number, yPos: number) {
        var img = new Image()
        img.src = src;
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, xPos, yPos)
        })
    }public writeTileToCanvas(src: string, xPos: number, yPos: number) {
        var img = new Image()
        img.src = src;
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, xPos, yPos)
        })
    }


    /**
     * getHitBoxes
     * @accessModifier {public}
     * @param {number} xPos -
     * @param {number} yPos -
     */
    public getHitBoxes(xPos: number, yPos: number) {
        this.anchorPointX.push(xPos);
        this.anchorPointY.push(yPos);
        // this.ctx.fillStyle = '#ffff00';
        // this.ctx.fillRect(xPos, yPos , 128,128)
        console.log(this.anchorPointX, this.anchorPointY)
    }

    /**
     * checkClick
     * @accessModifier {public}
     * @param {number} X -
     * @param {number} Y -
     */
    public checkClick(X: number, Y: number) {
        for (let i = 0; i < this.anchorPointX.length; i++) {
            if (X > this.anchorPointX[i] && X < this.anchorPointX[i] + 129 && Y > this.anchorPointY[i] && Y < this.anchorPointY[i] + 129) {
                // if (Y > this.anchorPointY[i] && Y < this.anchorPointY[i] + 129) {
                console.log(i);
                // }
            }
        }
    }
}

