class Canvas {
    constructor(size, lvlInfo, canvas) {
        this.anchorPointX = [];
        this.anchorPointY = [];
        this.canvas = canvas;
        this.canvas.width = 700;
        this.canvas.height = 700;
        this.ctx = this.canvas.getContext("2d");
        this.size = size;
        this.levelInfo = lvlInfo;
        this.canvas.addEventListener('click', (event) => {
            this.checkClick(event.screenX, event.screenY);
        });
    }
    GetWidth() {
        return this.canvas.width;
    }
    GetHeight() {
        return this.canvas.height;
    }
    GetCenter() {
        return { X: this.GetWidth() / 2, Y: this.GetHeight() / 2 };
    }
    writeTextToCanvas(text, fontSize, xPos, yPos, color = "white", alignment = "center") {
        this.ctx.font = `${fontSize}px SSRS`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xPos, yPos);
    }
    writeImageToCanvas(src, xPos, yPos) {
        let image = new Image();
        image.addEventListener('load', () => {
            this.ctx.drawImage(image, xPos, yPos);
        });
        image.src = src;
    }
    init() {
        if (this.levelInfo.length !== (this.size * this.size)) {
            console.error('array "levelInfo" is not of proper size. Check syntax when creating object "level"');
        }
        else {
            this.writeLevel();
        }
    }
    writeLevel() {
        let tileXpos = 0;
        let tileYpos = 0;
        let tilecounter = 0;
        for (let i = 0; i < this.size * this.size; i++) {
            let imgstring = './assets/images/road_tile/';
            let testString = this.levelInfo[i];
            if (testString.includes('grass')) {
                imgstring = imgstring + 'grass.png';
                this.anchorPointGetPos = false;
            }
            else {
                this.anchorPointGetPos = true;
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
            if (this.anchorPointGetPos == true) {
                this.writeTileToCanvas(imgstring, tileXpos, tileYpos);
            }
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
        }
    }
    writeTileToCanvas(src, xpos, ypos) {
        var img = new Image();
        img.src = src;
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, xpos, ypos);
        });
    }
    getHitBoxes(xPos, yPos) {
        this.anchorPointX.push(xPos);
        this.anchorPointY.push(yPos);
        console.log(this.anchorPointX, this.anchorPointY);
    }
    checkClick(X, Y) {
        for (let i = 0; i < this.anchorPointX.length; i++) {
            if (X > this.anchorPointX[i] && X < this.anchorPointX[i] + 129 && Y > this.anchorPointY[i] && Y < this.anchorPointY[i] + 129) {
                console.log(i);
            }
        }
    }
}
class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this._levels = new Levels;
        this._canvas = new Canvas(5, this._levels.level1, canvasElement);
        this.draw();
        console.error("TEST");
    }
    draw() {
        this._canvas.init();
    }
}
let init = function () {
    const DeliverRace = new Game();
};
window.addEventListener("load", init);
class Levels {
    constructor() {
        this.level1 = [
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn'
        ];
    }
}
class Entity {
    constructor(imgSrc, xCoor, yCoor, width, height, canvas) {
        this.imageSource = imgSrc;
        this.xPos = xCoor;
        this.yPos = yCoor;
        this.width = width;
        this.height = height;
    }
    drawBus() {
    }
}
class Bus extends Entity {
    constructor(imgSrc, xCoor, yCoor, width, height, canvas) {
        super(imgSrc, xCoor, yCoor, width, height, canvas);
    }
}
//# sourceMappingURL=app.js.map