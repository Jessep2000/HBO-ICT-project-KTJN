class Game {
    private _canvas: HTMLCanvasElement;
    private _levels: Level;
    private _levelData: LevelData;

    // private _bus: Bus;

    public constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas
        this._canvas.width = 800;
        this._canvas.height = 800;
        this._levelData = new LevelData;
        this._levels = new Level(canvas)
        console.log('game.ts init')

    }

    public init() {
        this._levels.init(5, this._levelData.level1_1);
        console.log('game init');
    }

}

const canvas = <HTMLCanvasElement>document.getElementById('canvas')

let init = function () {
    const DeliverRace = new Game(canvas);
    DeliverRace.init();
}

window.addEventListener("load", init);
