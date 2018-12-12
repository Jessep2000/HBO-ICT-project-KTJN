class Level {

    public levelInfo: Array<string>;
    public size: number;
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public anchorPointX: Array<number> = []
    public anchorPointY: Array<number> = []

    constructor(size: number, lvlInfo: Array<string>, canvas: HTMLCanvasElement) {
        this.size = size
        this.levelInfo = lvlInfo
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.addEventListener('click', (event) => {
            this.checkClick(event.screenX, event.screenY)
        })
    }

    public init(){
        if(this.levelInfo.length !== (this.size * this.size)){
            console.error('array "levelInfo" is not of proper size. check syntax when creating object "Level"')
        } else {
            this.writeLevel();
        }
    }

    public writeTileToCanvas(src: string, xpos: number, ypos: number) {
        var img = new Image()
        img.src = src;
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, xpos, ypos)
        })
    }

    public writeLevel() {
        var tileXpos = 0;
        var tileYpos = 0;
        var tilecounter = 0;
        for (let i = 0; i < this.size * this.size; i++) {
            let imgstring = './assets/images/road_tile/'
            let testString = this.levelInfo[i];
            if (testString.includes('grass')) {
                imgstring = imgstring + 'grass.png';
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
            this.writeTileToCanvas(imgstring, tileXpos, tileYpos);
            this.getHitBoxes(tileXpos, tileYpos)
            if (tilecounter >= this.size - 1) {
                tileYpos = tileYpos + 129;
                tileXpos = 0;
                tilecounter = 0;
            } else {
                tileXpos = tileXpos + 129;
                tilecounter++;
            }
            console.log(tileYpos, tileXpos);
            console.log(tilecounter)
            console.log(imgstring)
        }
    }

    public getHitBoxes(xPos: number, yPos: number) {
        this.anchorPointX.push(xPos + 64);
        this.anchorPointY.push(yPos + 64);
        console.log(this.anchorPointX, this.anchorPointY)
    }


    public checkClick(X: number, Y: number) {
        for (let i = 0; i < this.levelInfo.length; i++) {
            if (X > this.anchorPointX[i] - 20 && X < this.anchorPointX[i] + 20) {
                if (Y > this.anchorPointY[i] + 44 && Y < this.anchorPointY[i] + 84) {
                    console.log(i);
                }
            }
        }
    }
}


// const canvas = <HTMLCanvasElement>document.getElementById('canvas');

// var level1: Array<string> = [
//     '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
//     '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
//     '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
//     '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
//     '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn'
// ]
// var level: Level = new Level(5, level1, canvas)

// level.writeLevel()
