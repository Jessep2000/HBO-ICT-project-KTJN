class Canvas {
    constructor(canvas) {
        this.helper = new Helper(canvas);
        this.game = new Game(canvas);
    }
    initGame() {
        this.game.init();
    }
}
class Game {
    constructor(canvas) {
        this._helper = new Helper(canvas);
        this._helper.GetWidth();
        this._helper.GetHeight();
        this._levelData = new LevelData;
        this._levels = new Level(canvas);
        console.log('game.ts init');
    }
    init() {
        this._levels.init(5, this._levelData.level1_1);
        console.log('game init');
    }
}
const canvas = document.getElementById('canvas');
let init = function () {
    const DeliverRace = new Game(canvas);
    DeliverRace.init();
};
window.addEventListener("load", init);
class Entity {
    constructor(imageSrc, xCoor, yCoor, width, height, canvas) {
        this.helper = new Helper(canvas);
        this.imageSource = imageSrc;
        this.xPos = xCoor;
        this.yPos = yCoor;
        this.width = width;
        this.height = height;
    }
}
class Bus extends Entity {
    constructor(imgSrc, xCoor, yCoor, width, height, canvas) {
        super(imgSrc, xCoor, yCoor, width, height, canvas);
        this.testArray = [300, 500, 100, 0, 400, 100, 600, 200, 100];
    }
    moveBus() {
        let stepCounter = 0;
        let YstepReady;
        let XstepReady;
        let targetposX = this.testArray[stepCounter];
        let targetposY = this.testArray[stepCounter + 1];
        if (this.xPos != this.testArray[stepCounter]) {
            if (this.xPos > this.testArray[stepCounter]) {
                this.xPos--;
            }
            else if (this.xPos < this.testArray[stepCounter]) {
                this.xPos++;
            }
        }
        else {
            XstepReady = true;
        }
        if (this.yPos != this.testArray[stepCounter + 1]) {
            if (this.yPos > this.testArray[stepCounter + 1]) {
                this.yPos--;
            }
            else if (this.yPos < this.testArray[stepCounter + 1]) {
                this.yPos++;
            }
        }
        else {
            YstepReady = true;
        }
        if (XstepReady == true && YstepReady == true) {
            stepCounter = stepCounter + 2;
            YstepReady = false;
            XstepReady = false;
        }
        this.drawBus();
    }
    drawBus() {
        this.helper.writeImageToCanvas(this.imageSource, this.xPos - 20, this.yPos);
    }
}
class Helper {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
    GetWidth() {
        return this.canvas.width = 800;
    }
    GetHeight() {
        return this.canvas.height = 800;
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
}
class Level {
    constructor(canvas) {
        this.anchorPointX = [];
        this.anchorPointY = [];
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.canvas.addEventListener('click', (event) => {
            this.checkClick(event.screenX, event.screenY);
        });
    }
    init(size, lvlInfo) {
        this.player = new Bus('./assets/images/game_elem/bus.png', 64, 64, 26, 14, this.canvas);
        this.player.drawBus();
        this.levelInfo = lvlInfo;
        this.size = size;
        if (this.levelInfo.length !== (this.size * this.size)) {
            console.error('array "levelInfo" is not of proper size. Check syntax when creating object "level"');
        }
        else {
            this.FrameUpdater();
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
                this.writeTileToCanvasAP(imgstring, tileXpos, tileYpos);
            }
            else {
                this.writeTileToCanvasAP(imgstring, tileXpos, tileYpos);
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
    FrameUpdater() {
        setInterval(() => {
            this.writeLevel();
            this.player.moveBus();
        }, 10);
    }
    writeTileToCanvasAP(src, xPos, yPos) {
        var img = new Image();
        img.src = src;
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, xPos, yPos);
        });
    }
    getHitBoxes(xPos, yPos) {
        this.anchorPointX.push(xPos);
        this.anchorPointY.push(yPos);
    }
    checkClick(X, Y) {
        for (let i = 0; i < this.anchorPointX.length; i++) {
            if (X > this.anchorPointX[i] && X < this.anchorPointX[i] + 129 && Y > this.anchorPointY[i] && Y < this.anchorPointY[i] + 129) {
            }
        }
    }
}
class LevelData {
    constructor() {
        this.test = [
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
            '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn'
        ];
        this.level1_1 = [
            '1_0_straight', '1_0_t_split', '2_0_t_split', '2_0_straight', '1_270_turn',
            'grass', '1_90_t_split', '1_x_split', '2_0_t_split', '2_180_turn',
            'grass', '2_90_turn', '2_270_t_split', '2_90_turn', '1_90_deadend',
            '2_0_turn', '1_0_t_split', '2_x_split', '1_0_t_split', '1_270_turn',
            '1_90_turn', '2_180_t_split', '1_180_turn', '2_90_turn', '2_180_turn'
        ];
        this.level1_2 = [
            '1_0_t_split', '1_0_t_split', '2_0_t_split', '2_0_straight', '1_270_turn',
            '1_90_straight', '1_90_t_split', '1_x_split', '2_0_t_split', '2_270_t_split',
            '1_90_straight', '2_90_turn', '3_x_split', '2_180_turn', '1_90_straight',
            '2_90_t_split', '1_0_straight', '2_x_split', '1_0_straight', '2_270_t_split',
            '1_90_turn', '2_0_straight', '1_180_t_split', '3_0_straight', '2_180_turn'
        ];
    }
}
//# sourceMappingURL=app.js.map