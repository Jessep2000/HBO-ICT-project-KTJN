///<reference path="../levels/Level.ts" />
///<reference path="../Bus.ts"/>

class GameScreen {
    private level: Level;
    private levelData: LevelData;
    private player: Bus;

    private timer: Timer;


    public constructor(canvasElem: HTMLCanvasElement) {

        this.level = new Level(canvasElem);
        this.levelData = new LevelData;
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
            this.level.writeLevel();
            window.addEventListener('keyup', (event) => {
                this.player.getBusDirction(event);
            })
            window.addEventListener('keyup', (event) => {
                if(event.keyCode == 13){
                    this.frameUpdater();
                }
            })
            // this.frameUpdater();
        }
    }

    //Update level
    public frameUpdater(): void {
        setInterval(() => {
            this.level.writeLevel();
            this.player.moveBus();
        }, 10);
    };

    //Draw level
    public drawGame(): void {
        this.init(5, this.levelData.level1_2);
        console.log("game init");

        //Start timer
        new Timer();
        console.log("level drawn");
    };
}