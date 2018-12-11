class Canvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.canvas.getContext("2d");
    }
    drawTextToCanvas(text, fontSize, xPos, yPos) {
    }
}
class Level {
    constructor(size, lvlInfo, canvas) {
        console.error('canvas live');
        this.size = size;
        this.levelInfo = lvlInfo;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }
    writeTileToCanvas(src, xpos, ypos) {
        var img = new Image();
        img.src = src;
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, xpos, ypos);
        });
    }
    writeLevel() {
        var tileXpos = 0;
        var tileYpos = 0;
        var tilecounter = 0;
        for (let i = 0; i < this.levelInfo.length; i++) {
            let imgstring = './assets/images/roads/';
            let testString = this.levelInfo[i];
            if (testString.includes('grass')) {
                imgstring = imgstring + 'grass.png';
            }
            if (testString.includes('1_')) {
                imgstring = imgstring + 'empty/';
            }
            if (testString.includes('2_')) {
                imgstring = imgstring + 'house_normal/';
            }
            if (testString.includes('3_')) {
                imgstring = imgstring + 'house_double/';
            }
            if (testString.includes('4_')) {
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
            if (tilecounter >= 4) {
                tileYpos = tileYpos + 129;
                tileXpos = 0;
                tilecounter = 0;
            }
            else {
                tileXpos = tileXpos + 129;
                tilecounter++;
            }
            console.log(tileYpos, tileXpos);
            console.log(tilecounter);
        }
    }
}
class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);
        this._timer = new Timer(1, 0);
    }
}
let init = function () {
    var level1 = [
        '3_270_t_split', 'grass', '2_0_turn', '2_0_straight', '2_90_turn',
        '2_90_turn', '2_0_straight', '4_x_split', '2_90_turn', '2_90_turn',
        '1_90_turn', '1_90_turn', '4_270_t_split', '1_90_turn', '1_90_turn',
        '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
        '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn'
    ];
    var level = new Level(5, level1, canvas);
    level.writeLevel();
    const Deliveration = new Game();
};
window.addEventListener("load", init);
const canvas = document.getElementById('canvas');
class Timer {
    constructor(min, sec) {
    }
    twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }
    ;
    updateTimer() {
        this._msLeft = this._endTime - (+new Date);
        if (this._msLeft < 1000) {
        }
    }
}
class Bus {
}
class Entity {
}
//# sourceMappingURL=app.js.map