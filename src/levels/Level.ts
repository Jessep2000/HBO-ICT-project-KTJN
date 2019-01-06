class Level
{
    private levelHelper: Canvas;
    public levelInfo: Array<string>;
    public size: number;
    private anchorPointX: Array<number> = [];
    private anchorPointY: Array<number> = [];
    private anchorPointGetPos: Boolean;

    public constructor(canvasId: HTMLCanvasElement) {

        this.levelHelper = new Canvas(canvasId);
        this.levelHelper.canvas.addEventListener("click", (event) => {
            this.checkClick(event.screenX, event.screenY);
        });
    };

    //FIXME: Find a way to start level in Game.ts

    //Draw level to canvas
    public writeLevel(): void {
        let tileXPos = 0;
        let tileYPos = 0;
        let tileCounter = 0;
        
        for (let i = 0; i < this.size * this.size; i++) {
            let imgString = "./assets/images/road_tile/";
            let testString = this.levelInfo[i];

            //MAYBE TODO: Find a way to make a switchcase
            if (testString.includes("grass")) {
                imgString = imgString + "grass.png";
                this.anchorPointGetPos = false;
            } else {
                this.anchorPointGetPos = true;
            };
            if (testString.includes('1_')) {
                imgString = imgString + 'empty/'
            };
            if (testString.includes('2_')) {
                imgString = imgString + 'house_normal/'
            };
            if (testString.includes('3_')) {
                imgString = imgString + 'house_double/'
            };
            if (testString.includes('4_')) {
                imgString = imgString + 'house_hp/'
            };
            if (testString.includes('x_split')) {
                imgString = imgString + 'X-split.png'
            };
            if (testString.includes('_0_')) {
                imgString = imgString + '0/'
            };
            if (testString.includes('90')) {
                imgString = imgString + '90/'
            };
            if (testString.includes('180')) {
                imgString = imgString + '180/'
            };
            if (testString.includes('270')) {
                imgString = imgString + '270/'
            };
            if (testString.includes('straight')) {
                imgString = imgString + 'straight.png'
            };
            if (testString.includes('t_split')) {
                imgString = imgString + 'T-split.png'
            };
            if (testString.includes('turn')) {
                imgString = imgString + 'turn.png'
            };
            if (testString.includes('dead')) {
                imgString = imgString + 'deadend.png'
            };
            if (this.anchorPointGetPos == true) {
                this.levelHelper.writeTileToCanvasAP(imgString, tileXPos, tileYPos);
            } else {
                this.levelHelper.writeTileToCanvasAP(imgString, tileXPos, tileYPos);
            };
            this.getHitBoxes(tileXPos, tileYPos)
            if (tileCounter >= this.size - 1) {
                tileYPos = tileYPos + 129;
                tileXPos = 0;
                tileCounter = 0;
            } else {
                tileXPos = tileXPos + 129;
                tileCounter++;
            }
        }
    };

    /**
     * getHitBoxes
     * @accessModifier {public}
     * @param {number} xPos -
     * @param {number} yPos -
     */
    public getHitBoxes(xPos: number, yPos: number): void {
        this.anchorPointX.push(xPos);
        this.anchorPointY.push(yPos);
    };

    /**
     * checkClick
     * @accessModifier {public}
     * @param {number} X -
     * @param {number} Y -
     */
    public checkClick(X: number, Y: number): void {
        for (let i = 0; i < this.anchorPointX.length; i++) {
            if (X > this.anchorPointX[i] &&
                X < this.anchorPointX[i] + 129 &&
                Y > this.anchorPointY[i] &&
                Y < this.anchorPointY[i] + 129) {
            }
        }
    };
}