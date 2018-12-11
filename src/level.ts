class Level {

    public levelInfo: Array<string>;
    public size: number;
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;

    constructor(size: number, lvlInfo: Array<string>, canvas: HTMLCanvasElement) {
        console.error('canvas live');
        this.size = size
        this.levelInfo = lvlInfo
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    public writeTileToCanvas(src: string, x: number, y: number) {
        var img = new Image()
        img.src = src;

        this.ctx.drawImage(img, x, y)
    }

    public writeLevel() {
        console.log('this')
        var tileXpos = 0;
        var tileYpos = 0;
        var tilecounter = 0;
        for (let i = this.levelInfo.length; i >= 0; i--) {
            let imgstring = '../assets/images/roads/'
            let testString = this.levelInfo[i];
            if (testString.includes('0')) {
                imgstring = imgstring + 'empty/'
            }
            if (testString.includes('1')) {
                imgstring = imgstring + 'house_normal/'
            }
            if (testString.includes('2')) {
                imgstring = imgstring + 'house_double/'
            }
            if (testString.includes('3')) {
                imgstring = imgstring + 'house_hp/'
            }
            if (testString.includes('x_split')) {
                imgstring = imgstring + 'X-split.png'
            }
            if (testString.includes('0')) {
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
            this.writeTileToCanvas(imgstring, tileXpos, tileYpos);
            if (tilecounter >= 5) {
                tileYpos = + 50;
                tileYpos = 0;
                tilecounter = 0;
            } else {
                tileXpos = + 50;
                tilecounter++;
            }
        }
    }
}

const canvas = <HTMLCanvasElement>document.getElementById('canvas');

var level1: Array<string> = [
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn'
]
var level: Level = new Level(5, level1, canvas)

level.writeLevel();


