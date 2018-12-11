///<reference path='./level.ts'/>

class Game {
    private _canvas: Canvas;
    private _timer: Timer;

    public constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);

        this._timer = new Timer(1, 0);
    }
}

let init = function () {
    var level1: Array<string> = [
        '3_270_t_split', 'grass', '2_0_turn', '2_0_straight', '2_90_turn',
        '2_90_turn', '2_0_straight', '4_x_split', '2_90_turn', '2_90_turn',
        '1_90_turn', '1_90_turn', '4_270_t_split', '1_90_turn', '1_90_turn',
        '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn',
        '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn', '1_90_turn'
    ]
    var level: Level = new Level(5, level1, canvas)

    level.writeLevel();
    const Deliveration = new Game()
}

window.addEventListener("load", init);


const canvas = <HTMLCanvasElement>document.getElementById('canvas');

