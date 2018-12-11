class Canvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.canvas.getContext("2d");
    }
}
class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);
    }
}
let init = function () {
    const Deliveration = new Game();
};
window.addEventListener("load", init);
class Timer {}
class Level {
    constructor(size, lvlInfo, canvas) {
        console.error('canvas live');
        this.size = size;
        this.levelInfo = lvlInfo;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }
    writeTileToCanvas(src, x, y) {
        var img = new Image();
        img.src = src;
        console.log(img);
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, x, y);
        })
    }
    writeLevel() {
        var tileXpos = 0;
        var tileYpos = 0;
        var tilecounter = 0;
        for (let i = this.levelInfo.length; i > 0; i--) {
            let imgstring = './assets/images/roads/';
            let testString = this.levelInfo[i - 1];
            console.log(this.levelInfo[i - 1])
            // if (testString.includes('0_')) {
            //     imgstring = imgstring + 'empty/';
            // }
            console.log('stap 1')
            if (testString.includes('1_')) {
                imgstring = imgstring + 'house_normal/';
            }
            if (testString.includes('2_')) {
                imgstring = imgstring + 'house_double/';
            }
            if (testString.includes('3_')) {
                imgstring = imgstring + 'house_hp/';
            }
            if (testString.includes('x_split')) {
                imgstring = imgstring + 'X-split.png';
            }
            if (testString.includes('_0_')) {
                imgstring = imgstring + '0/';
            }
            if (testString.includes('90')) {
                imgstring = imgstring + '90/';
            }
            if (testString.includes('180')) {
                imgstring = imgstring + '180/';
            }
            if (testString.includes('270')) {
                imgstring = imgstring + '270/';
            }
            if (testString.includes('straight')) {
                imgstring = imgstring + 'straight.png';
            }
            if (testString.includes('t_split')) {
                imgstring = imgstring + 'T-split.png';
            }
            if (testString.includes('turn')) {
                imgstring = imgstring + 'turn.png';
            }
            this.writeTileToCanvas(imgstring, tileXpos, tileYpos);
            console.log(imgstring);
            if (tilecounter >= this.size) {
                tileYpos = +50;
                tileYpos = 0;
                tilecounter = 0;
            } else {
                tileXpos = +50;
                tilecounter++;
            }
        }
    }
}
const canvas = document.getElementById('canvas');
var level1 = [
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_straight', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn'
];
var level = new Level(5, level1, canvas);
level.writeLevel();
class Bus {}
class Entity {}
//# sourceMappingURL=app.js.map