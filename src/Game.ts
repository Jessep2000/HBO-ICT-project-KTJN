///<reference path="./levels/Level.ts"/>
///<reference path="Bus.ts"/>

class Game
{
    private level: Level;
    private levelData: LevelData;
    private player: Bus;
    private timer: Timer


    public constructor() {
        const CanvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");

        this.level = new Level(CanvasElement);
        this.levelData = new LevelData;
        this.player = new Bus(CanvasElement, `./assets/images/vehicles/bus_yellow.png`, 64, 64);    //FIXME: Add the possibility to chose from different colors from 'Array' in class 'Bus'
        this.timer = new Timer();
    }

    //Init level
    public init(size: number, lvlInfo: Array<string>): void {
        this.player.drawBus();
        this.level.levelInfo = lvlInfo;
        this.level.size = size;
        if (this.level.levelInfo.length !== (this.level.size * this.level.size)) {
            console.error("Array 'levelInfo' isn't the right size. Check syntax when creating object 'level'!");
        } else {
            this.frameUpdater();
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
    public draw(): void {
        this.init(5, this.levelData.level1_2);
        console.log("game init");

        this.timer.timeVar;
    }

}

let init = function() {
    const DeliverRace = new Game();
    DeliverRace.draw()
}

window.addEventListener("load", init)