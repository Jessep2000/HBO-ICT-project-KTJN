class Bus {
    constructor(canvas, imgSrc, xCoor, yCoor) {
        this.busDirection = [64, 64, 194, 64, 322, 64, 322, 193, 322, 322, 451, 322, 451, 193, 580, 193, 580, 64, 64, 64];
        this.stepCounter = 0;
        this.vehicleColor = [
            "bus_blue",
            "bus_green",
            "bus_orange",
            "bus_pink",
            "bus_red",
            "bus_yellow"
        ];
        this.canvas = new Canvas(canvas);
        this.imageSource = imgSrc;
        this.xPos = xCoor;
        this.yPos = yCoor;
    }
    ;
    moveBus() {
        let YstepReady;
        let XstepReady;
        let targetPosX = this.busDirection[this.stepCounter];
        let targetPosY = this.busDirection[this.stepCounter + 1];
        if (this.xPos != targetPosX) {
            if (this.xPos > targetPosX) {
                this.xPos--;
            }
            else if (this.xPos < targetPosX) {
                this.xPos++;
            }
        }
        else {
            XstepReady = true;
        }
        ;
        if (this.yPos != targetPosY) {
            if (this.yPos > targetPosY) {
                this.yPos--;
            }
            else if (this.yPos < targetPosY) {
                this.yPos++;
            }
        }
        else {
            YstepReady = true;
        }
        ;
        if (XstepReady == true && YstepReady == true) {
            this.stepCounter = this.stepCounter + 2;
            YstepReady = false;
            YstepReady = false;
        }
        this.drawBus();
    }
    ;
    drawBus() {
        this.canvas.writeImageToCanvas(this.imageSource, this.xPos - 20, this.yPos);
    }
    ;
}
class Canvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = 640;
        this.canvas.height = 640;
        this.ctx = this.canvas.getContext("2d");
    }
    ;
    GetWidth() {
        return this.canvas.width;
    }
    ;
    GetHeight() {
        return this.canvas.height;
    }
    ;
    GetCenter() {
        return this.canvas.width / 2,
            this.canvas.height / 2;
    }
    ;
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    ;
    writeTextToCanvas(text, fontSize, xPos, yPos, color = "white", alignment = "center") {
        this.ctx.font = `${fontSize}px SSRS`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xPos, yPos);
    }
    ;
    writeImageToCanvas(src, xPos, yPos, width, height) {
        let image = new Image();
        image.addEventListener("load", () => {
            this.ctx.drawImage(image, xPos, yPos, width, height);
        });
        image.src = src;
    }
    ;
    writeTileToCanvasAP(src, xPos, yPos) {
        let image = new Image();
        image.src = src;
        image.addEventListener("load", () => {
            this.ctx.drawImage(image, xPos, yPos);
        });
    }
    ;
    writeButtonToCanvas(xPos, yPos, width, height, color) {
        this.ctx.beginPath();
        this.ctx.rect(xPos, yPos, width, height);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    ;
}
class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this.menuScreen = new MenuScreen(canvasElement);
        this.gameScreen = new GameScreen(canvasElement);
        this.highscoreScreen = new HighscoreScreen();
        this.canvas = new Canvas(canvasElement);
    }
    ;
    draw() {
        this.canvas.clearCanvas();
        this.menuScreen.drawMenu();
    }
    ;
}
let init = function () {
    const DeliverRace = new Game();
    DeliverRace.draw();
};
window.addEventListener("load", init);
class Timer {
    constructor() {
        this.timeVar = setInterval(() => this.countTimer(), 1000);
        this.totalSeconds = 0;
    }
    ;
    countTimer() {
        ++this.totalSeconds;
        let hours = Math.floor(this.totalSeconds / 3600);
        let minutes = Math.floor((this.totalSeconds - hours * 3600) / 60);
        let seconds = this.totalSeconds - (hours * 3600 + minutes * 60);
        if (this.totalSeconds <= seconds) {
            document.getElementById("timer").innerHTML = "totale speeltijd<br>" + seconds + " sec";
        }
        else {
            document.getElementById("timer").innerHTML = "totale speeltijd<br>" + minutes + " min" + " " + seconds + " sec";
        }
        ;
    }
    ;
}
class Level {
    constructor(canvasId) {
        this.anchorPointX = [];
        this.anchorPointY = [];
        this.levelHelper = new Canvas(canvasId);
        this.levelHelper.canvas.addEventListener("click", (event) => {
            this.checkClick(event.screenX, event.screenY);
        });
    }
    ;
    writeLevel() {
        let tileXPos = 0;
        let tileYPos = 0;
        let tileCounter = 0;
        for (let i = 0; i < this.size * this.size; i++) {
            let imgString = "./assets/images/road_tile/";
            let testString = this.levelInfo[i];
            if (testString.includes("grass")) {
                imgString = imgString + "grass.png";
                this.anchorPointGetPos = false;
            }
            else {
                this.anchorPointGetPos = true;
            }
            ;
            if (testString.includes('1_')) {
                imgString = imgString + 'empty/';
            }
            ;
            if (testString.includes('2_')) {
                imgString = imgString + 'house_normal/';
            }
            ;
            if (testString.includes('3_')) {
                imgString = imgString + 'house_double/';
            }
            ;
            if (testString.includes('4_')) {
                imgString = imgString + 'house_hp/';
            }
            ;
            if (testString.includes('x_split')) {
                imgString = imgString + 'X-split.png';
            }
            ;
            if (testString.includes('_0_')) {
                imgString = imgString + '0/';
            }
            ;
            if (testString.includes('90')) {
                imgString = imgString + '90/';
            }
            ;
            if (testString.includes('180')) {
                imgString = imgString + '180/';
            }
            ;
            if (testString.includes('270')) {
                imgString = imgString + '270/';
            }
            ;
            if (testString.includes('straight')) {
                imgString = imgString + 'straight.png';
            }
            ;
            if (testString.includes('t_split')) {
                imgString = imgString + 'T-split.png';
            }
            ;
            if (testString.includes('turn')) {
                imgString = imgString + 'turn.png';
            }
            ;
            if (testString.includes('dead')) {
                imgString = imgString + 'deadend.png';
            }
            ;
            if (this.anchorPointGetPos == true) {
                this.levelHelper.writeTileToCanvasAP(imgString, tileXPos, tileYPos);
            }
            else {
                this.levelHelper.writeTileToCanvasAP(imgString, tileXPos, tileYPos);
            }
            ;
            this.getHitBoxes(tileXPos, tileYPos);
            if (tileCounter >= this.size - 1) {
                tileYPos = tileYPos + 129;
                tileXPos = 0;
                tileCounter = 0;
            }
            else {
                tileXPos = tileXPos + 129;
                tileCounter++;
            }
        }
    }
    ;
    getHitBoxes(xPos, yPos) {
        this.anchorPointX.push(xPos);
        this.anchorPointY.push(yPos);
    }
    ;
    checkClick(X, Y) {
        for (let i = 0; i < this.anchorPointX.length; i++) {
            if (X > this.anchorPointX[i] &&
                X < this.anchorPointX[i] + 129 &&
                Y > this.anchorPointY[i] &&
                Y < this.anchorPointY[i] + 129) {
            }
        }
    }
    ;
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
class GameScreen {
    constructor(canvasElem) {
        this.level = new Level(canvasElem);
        this.levelData = new LevelData;
        this.player = new Bus(canvasElem, `./assets/images/vehicles/bus_yellow.png`, 64, 64);
    }
    ;
    init(size, lvlInfo) {
        this.player.drawBus();
        this.level.levelInfo = lvlInfo;
        this.level.size = size;
        if (this.level.levelInfo.length !== (this.level.size * this.level.size)) {
            console.error("Array 'levelInfo' isn't the right size. Check syntax when creating object 'level'!");
        }
        else {
            this.frameUpdater();
        }
    }
    frameUpdater() {
        setInterval(() => {
            this.level.writeLevel();
            this.player.moveBus();
        }, 10);
    }
    ;
    drawGame() {
        this.init(5, this.levelData.level1_2);
        console.log("game init");
        new Timer();
    }
    ;
}
class HighscoreScreen {
}
class MenuScreen {
    constructor(canvasElem) {
        this.canvas = new Canvas(canvasElem);
    }
    ;
    drawMenu() {
        this.canvas.writeTextToCanvas("DeliverRace", 70, 320, 100, "red");
        this.canvas.writeButtonToCanvas(175, 300, 300, 100, "limegreen");
        this.canvas.writeTextToCanvas("Play", 40, 325, 365, "black");
    }
    ;
}
//# sourceMappingURL=app.js.map