class Canvas {
    constructor(canvasId) {
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.canvas = canvasId;
        this.canvas.getContext("2d");
    }
    writeTextToCanvas(text, fontSize, xPos, yPos, color = "white", alignment = "center") {
        this.ctx.font = `${fontSize}px Supersonic Rocketship`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xPos, yPos);
    }
}
class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);
        this._timer = new Timer(1, 0);
    }
    draw() {
        this._timer.updateTimer();
    }
}
let init = function () {
    const Deliveration = new Game();
};
window.addEventListener("load", init);
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
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, x, y);
        });
    }
    writeLevel() {
        console.log('this');
        var tileXpos = 0;
        var tileYpos = 0;
        var tilecounter = 0;
        for (let i = this.levelInfo.length; i >= 0; i--) {
            let imgstring = './assets/images/roads/';
            let testString = this.levelInfo[i - 1];
            console.log(testString);
            if (testString.includes('1')) {
                imgstring = imgstring + 'house_normal/';
            }
            if (testString.includes('2')) {
                imgstring = imgstring + 'house_double/';
            }
            if (testString.includes('3')) {
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
            if (tilecounter >= 5) {
                tileYpos = +50;
                tileYpos = 0;
                tilecounter = 0;
            }
            else {
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
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
    '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn'
];
var level = new Level(5, level1, canvas);
level.writeLevel();
class Timer {
    constructor(mins, secs) {
        this.element = document.getElementById("canvas");
        this.endTime = (+new Date) + 1000 * (60 * this._minutes + this._seconds) + 500;
    }
    twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }
    ;
    updateTimer() {
        this._msLeft = this._endTime - (+new Date);
        if (this._msLeft < 1000) {
            this._element.writeTextToCanvas("Time's up", 20, 50, 50, "black");
        }
        else {
            this._time = new Date(this._msLeft);
            this._minutes = this._time.getUTCMinutes();
            this._seconds = this._time.getUTCSeconds();
            setTimeout(this.updateTimer, this._time.getUTCMiliseconds() + 500);
        }
    }
}
class Bus {
}
class Entity {
}
//# sourceMappingURL=app.js.map