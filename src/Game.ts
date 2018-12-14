class Game {
    private _canvas: HTMLCanvasElement;
    private _levels: Level;
    public levelData: LevelData;

    // private _bus: Bus;

    public constructor(canvas:HTMLCanvasElement) {
        this._canvas = canvas
        this.levelData = new LevelData;
        this._levels = new Level(canvas)
        console.log('game.ts init')
        this._levels.init(5, this.levelData.level1_1)
    }

}

