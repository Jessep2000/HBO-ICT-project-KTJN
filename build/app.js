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
    writeImageFromFileToCanvas(src, xPos, yPos) {
        let image = new Image();
        image.addEventListener('load', () => {
            this.ctx.drawImage(image, xPos, yPos);
        });
        image.src = src;
    }
}
class Level {
    constructor(size, lvlInfo, canvas) {
        this.anchorPointX = [];
        this.anchorPointY = [];
        this.size = size;
        this.levelInfo = lvlInfo;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.addEventListener('click', (event) => {
            this.checkClick(event.screenX, event.screenY);
        });
    }
    init() {
        if (this.levelInfo.length !== (this.size * this.size)) {
            console.error('array "levelInfo" is not of proper size. check syntax when creating object "Level"');
        }
        else {
            this.writeLevel();
        }
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
        for (let i = 0; i < this.size * this.size; i++) {
            let imgstring = './assets/images/road_tile/';
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
            if (testString.includes('dead')) {
                imgstring = imgstring + 'deadend.png';
            }
            this.writeTileToCanvas(imgstring, tileXpos, tileYpos);
            this.getHitBoxes(tileXpos, tileYpos);
            if (tilecounter >= this.size - 1) {
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
            console.log(imgstring);
        }
    }
    getHitBoxes(xPos, yPos) {
        this.anchorPointX.push(xPos + 64);
        this.anchorPointY.push(yPos + 64);
        console.log(this.anchorPointX, this.anchorPointY);
    }
    checkClick(X, Y) {
        for (let i = 0; i < this.levelInfo.length; i++) {
            if (X > this.anchorPointX[i] - 20 && X < this.anchorPointX[i] + 20) {
                if (Y > this.anchorPointY[i] + 44 && Y < this.anchorPointY[i] + 84) {
                    console.log(i);
                }
            }
        }
    }
}
class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);
    }
}
let init = function () {
    var level1 = [
        '1_0_straight', '1_0_t_split', '2_0_t_split', '2_0_straight', '1_270_turn',
        'grass', '1_90_t_split', '1_x_split', '2_0_t_split', '2_180_turn',
        'grass', '2_90_turn', '2_270_t_split', '2_90_turn', '1_90_deadend',
        '2_0_turn', '1_0_t_split', '2_x_split', '1_0_t_split', '1_270_turn',
        '1_90_turn', '2_180_t_split', '1_180_turn', '2_90_turn', '2_180_turn'
    ];
    var loadlevel1 = new Level(5, level1, canvas);
    var level2 = [
        '1_0_t_split', '1_0_t_split', '2_0_t_split', '2_0_straight', '1_270_turn',
        '1_90_straight', '1_90_t_split', '1_x_split', '2_0_t_split', '2_270_t_split',
        '1_90_straight', '2_90_turn', '3_x_split', '2_180_turn', '1_90_straight',
        '2_90_t_split', '1_0_straight', '2_x_split', '1_0_straight', '2_270_t_split',
        '1_90_turn', '2_0_straight', '1_180_t_split', '3_0_straight', '2_180_turn'
    ];
    var loadlevel2 = new Level(5, level2, canvas);
    loadlevel2.init();
};
window.addEventListener("load", init);
const canvas = document.getElementById('canvas');
class Highscores {
    constructor(canvasId, playerName, score) {
        this.canvas = canvasId;
        this.playerName = playerName;
        this.score = score;
        this.highscores = [
            {
                playerName: 'Kevin',
                score: 60
            },
            {
                playerName: 'Jesse',
                score: 50
            },
            {
                playerName: 'Tijs',
                score: 40
            },
            {
                playerName: 'Nick',
                score: 20
            }
        ];
    }
}
class Timer {
}
class Bus {
    constructor(canvas, imageSrc, xPos, yPos) {
    }
    drawBus() {
        this.canvas.writeImageFromFileToCanvas(this.imageSrc, this.xPos, this.yPos);
    }
}
class Entity {
}
//# sourceMappingURL=app.js.map