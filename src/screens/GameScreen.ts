///<reference path="../levels/Level.ts" />
///<reference path="../Bus.ts"/>

class GameScreen {
    private level: Level;
    private levelData: LevelData;
    private canvasHelper: Canvas;
    private player: Bus;
    private timer: Timer;
    public frameTimer: any;


    public constructor(canvasElem: HTMLCanvasElement) {
        this.level = new Level(canvasElem);
        this.levelData = new LevelData;
        this.canvasHelper = new Canvas(canvasElem)
        this.player = new Bus(canvasElem, `./assets/images/vehicles/bus_yellow.png`, 64, 64);    //FIXME: Add the possibility to chose from different colors from 'Array' in class 'Bus'
    };

    //Init level
    public init(size: number, lvlInfo: Array<string>): void {
        this.player.drawBus();
        this.level.levelInfo = lvlInfo;
        this.level.size = size;
        if (this.level.levelInfo.length !== (this.level.size * this.level.size)) {
            console.error("Array 'levelInfo' isn't the right size. Check syntax when creating object 'level'!");
        } else {
            this.addResetButton();
            this.level.writeLevel();
            window.addEventListener('keyup', (event) => {
                this.player.getBusDirction(event);
            })
            window.addEventListener('keyup', (event) => {
                if (event.keyCode == 13) {
                    // this.frameUpdater();
                    this.frameTimer = setInterval(() => this.frameUpdater(), 30);
                }
            })
            // this.frameUpdater();
        }
    }

    //Update level
    public frameUpdater(): void {
        // setInterval(() => {
            this.level.writeLevel();
            this.player.moveBus();
        // }, 10);
    };

    //Draw level
    public drawGame(): void {
        this.init(5, this.levelData.level1_3);
        // console.log("game init");

        //Start timer
        new Timer();
        // console.log("level drawn");
    };

    public addResetButton() {
        const buttonContainer = document.getElementById('buttons')
        let resetButton = document.createElement('button')
        resetButton.id = 'reset'
        resetButton.innerText = 'begin opnieuw';
        if (document.getElementById('reset') == null) {
            buttonContainer.appendChild(resetButton);
            resetButton.addEventListener('click', () => {
                this.reset();
            })
        } else {
            resetButton.addEventListener('click', () => {
                this.reset();
            })
        }
    }

    public reset() {
        this.canvasHelper.clearCanvas();
        clearTimeout(this.frameTimer);
        this.timer = null;
        this.player.busDirection = [];
        this.drawGame();
    }
}   