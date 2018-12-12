///<reference path='./level.ts'/>

class Game {
    private _canvas: Canvas;
    private _timer: Timer;

    public constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);
    }
}

let init = function () {
    // const Deliveration = new Game()
    var level1: Array<string> = [
        '3_270_t_split', 'grass', '2_0_turn', '2_0_straight', '2_90_turn',
        '2_90_turn', '2_0_straight', '4_x_split', '2_90_turn', '2_90_turn',
        '2_90_turn', '2_90_turn', '4_270_t_split', '2_90_turn', '2_90_turn',
        '2_90_turn', '2_90_turn', 'grass', '2_x_split', '2_90_turn',
        '2_90_turn', '2_90_turn', '2_90_turn', '2_90_turn', '3_90_straight'
    ]
    var Loadlevel1: Level = new Level(5, level1, canvas)

    // var level2: Array<string> = [

    // ]

    // var loadlevel2: Level = new Level(5, level2, canvas)

    Loadlevel1.init();

}

window.addEventListener("load", init);


const canvas = <HTMLCanvasElement>document.getElementById('canvas');

