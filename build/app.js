class Bus {
    constructor(canvas, imgSrc, xCoor, yCoor) {
        this.busDirection = [64, 64];
        this.stepCounter = 0;
        this.preStepCounter = 0;
        this.stepX = 64;
        this.stepY = 64;
        this.vehicleColor = [
            "bus_blue",
            "bus_green",
            "bus_orange",
            "bus_pink",
            "bus_red",
            "bus_yellow"
        ];
        this.levelData = new LevelData();
        this.canvas = new Canvas(canvas);
        this.imageSource = imgSrc;
        this.xPos = xCoor;
        this.yPos = yCoor;
    }
    ;
    getBusDirction(event) {
        let newPosX = this.stepX;
        let newPosY = this.stepY;
        let lineBeginX = this.stepX;
        let lineBeginY = this.stepY;
        let optionUp = true;
        let optionDown = true;
        let optionLeft = true;
        let optionRight = true;
        let getIndex;
        getIndex = (((this.stepY - 64) / 128) * 5) + ((this.stepX - 64) / 128);
        let currentTile = this.levelData.level1_3[getIndex];
        if (currentTile.includes('t_split')) {
            if (currentTile.includes('_0_')) {
                optionUp = false;
            }
            if (currentTile.includes('_90_')) {
                optionLeft = false;
            }
            if (currentTile.includes('_180_')) {
                optionDown = false;
            }
            if (currentTile.includes('_270_')) {
                optionRight = false;
            }
        }
        if (currentTile.includes('turn')) {
            if (currentTile.includes('_0_')) {
                optionUp = false;
                optionLeft = false;
            }
            if (currentTile.includes('_90_')) {
                optionLeft = false;
                optionDown = false;
            }
            if (currentTile.includes('_180_')) {
                optionDown = false;
                optionRight = false;
            }
            if (currentTile.includes('_270_')) {
                optionRight = false;
                optionUp = false;
            }
        }
        if (currentTile.includes('straight')) {
            if (currentTile.includes('_0_')) {
                optionUp = false;
                optionDown = false;
            }
            if (currentTile.includes('_90_')) {
                optionLeft = false;
                optionRight = false;
            }
        }
        if (this.stepX <= 64) {
            optionLeft = false;
        }
        if (this.stepX >= 576) {
            optionRight = false;
        }
        if (this.stepY <= 64) {
            optionUp = false;
        }
        if (this.stepY >= 576) {
            optionDown = false;
        }
        if (event.keyCode == 38) {
            if (optionUp == true) {
                newPosY = this.stepY - 128;
                this.stepY = newPosY;
            }
        }
        if (event.keyCode == 40) {
            if (optionDown == true) {
                newPosY = this.stepY + 128;
                this.stepY = newPosY;
            }
        }
        if (event.keyCode == 37) {
            if (optionLeft == true) {
                newPosX = this.stepX - 128;
                this.stepX = newPosX;
            }
        }
        if (event.keyCode == 39) {
            if (optionRight == true) {
                newPosX = this.stepX + 128;
                this.stepX = newPosX;
            }
        }
        this.busDirection.push(this.stepX);
        this.busDirection.push(this.stepY);
        this.canvas.writeLineToCanvas(lineBeginX, lineBeginY, newPosX, newPosY, 15);
    }
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
        if (this.xPos == 64 && this.yPos == 64) {
            if (this.stepCounter != 2) {
                clearTimeout(Timer.prototype.timeVar);
                alert("✪ JE BENT EEN GEWELDIGE BEZORGER ✪ \n Je was zo snel dat we je score helaas niet konden berekenen :(");
                document.location.reload();
            }
        }
        this.drawBus();
    }
    ;
    drawBus() {
        this.canvas.writeImageToCanvas(this.imageSource, this.xPos, this.yPos);
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
    writeImageToCanvas(src, xPos, yPos) {
        let image = new Image();
        image.addEventListener("load", () => {
            this.ctx.drawImage(image, xPos, yPos);
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
    writeLineToCanvas(sX, sY, eX, eY, width) {
        this.ctx.beginPath();
        this.ctx.moveTo(sX, sY);
        this.ctx.lineTo(eX, eY);
        this.ctx.lineWidth = 15;
        this.ctx.strokeStyle = '#ffff00';
        this.ctx.stroke();
    }
}
class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this.canvas = new Canvas(canvasElement);
        this.menuScreen = new MenuScreen(canvasElement);
        this.gameScreen = new GameScreen(canvasElement);
    }
    ;
    draw() {
        this.menuScreen.drawMenu();
        let buttonX = 630;
        let buttonY = 330;
        let buttonW = 300;
        let buttonH = 100;
        this.canvas.canvas.addEventListener("click", (event) => {
            if (event.x > buttonX &&
                event.x < buttonX + buttonW &&
                event.y > buttonY &&
                event.y < buttonY + buttonH) {
                this.canvas.clearCanvas();
                buttonW = 0;
                buttonH = 0;
                this.gameScreen.drawGame();
            }
        });
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
    yourTime() {
        return this.totalSeconds;
    }
}
class Scores extends Timer {
    constructor() {
        super();
        this.starSpace = 0;
        this.canvas = new Canvas(document.getElementById("canvas"));
        this.oneStar = false;
        this.twoStar = false;
        this.threeStar = false;
    }
    getScore() {
        if (this.totalSeconds <= 90) {
            this.oneStar = false;
            this.twoStar = false;
            this.threeStar = true;
        }
        else if (this.totalSeconds > 90 && this.totalSeconds <= 180) {
            this.oneStar = false;
            this.twoStar = true;
            this.threeStar = false;
        }
        else {
            this.oneStar = true;
            this.twoStar = false;
            this.threeStar = false;
        }
    }
    writeStar() {
        console.log("writestar");
        this.canvas.writeImageToCanvas("./assets/images/star2.png", 0 + this.starSpace, 0);
    }
    showPlayerScore() {
        if (this.oneStar == true) {
            for (let i = 0; i < 1; i++) {
                this.writeStar();
            }
        }
        else if (this.twoStar == true) {
            for (let i = 0; i < 2; i++) {
                this.writeStar();
                this.starSpace += 130;
            }
        }
        else if (this.threeStar == true) {
            for (let i = 0; i < 3; i++) {
                this.writeStar(),
                    this.starSpace += 130;
            }
        }
    }
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
        this.level1_3 = [
            '1_0_t_split', '2_0_t_split', '1_0_straight', '3_270_turn', 'grass',
            '1_90_t_split', '1_x_split', '3_0_t_split', '2_x_split', '1_90_deadend',
            '1_90_straight', '2_90_turn', '3_x_split', '2_180_turn', '1_deadend',
            '1_90_turn', '1_0_straight', '2_x_split', '1_0_straight', '2_270_t_split',
            'grass', '1_270_deadend', '1_180_t_split', '3_0_straight', '2_180_turn'
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
            this.level.writeLevel();
            window.addEventListener('keyup', (event) => {
                this.player.getBusDirction(event);
            });
            window.addEventListener('keyup', (event) => {
                if (event.keyCode == 13) {
                    this.frameUpdater();
                }
            });
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
        this.init(5, this.levelData.level1_3);
        new Timer();
    }
    ;
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
        this.canvas.writeTextToCanvas("Versie: 0.6.1a Beta", 20, 80, 630, "black");
    }
    ;
}
//# sourceMappingURL=app.js.map