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
        '1_0_straight', '1_0_t_split', '2_0_t_split', '2_0_straight', '1_270_turn',
        'grass', '1_90_t_split', '1_x_split', '2_0_t_split', '2_180_turn',
        'grass', '2_90_turn', '2_270_t_split', '2_90_turn', '1_90_deadend',
        '2_0_turn', '1_0_t_split', '2_x_split', '1_0_t_split', '1_270_turn',
        '1_90_turn', '2_180_t_split', '1_180_turn', '2_90_turn', '2_180_turn'
    ]
    var loadlevel1: Level = new Level(5, level1, canvas)

    var level2: Array<string> = [
        '1_0_t_split', '1_0_t_split', '2_0_t_split', '2_0_straight', '1_270_turn',
        '1_90_straight', '1_90_t_split', '1_x_split', '2_0_t_split', '2_270_t_split',
        '1_90_straight', '2_90_turn', '3_x_split', '2_180_turn', '1_90_straight',
        '2_90_t_split', '1_0_straight', '2_x_split', '1_0_straight', '2_270_t_split',
        '1_90_turn', '2_0_straight', '1_180_t_split', '3_0_straight', '2_180_turn'

    ]

    var loadlevel2: Level = new Level(5, level2, canvas)

    //loadlevel1.init();
    loadlevel2.init();

}

window.addEventListener("load", init);


const canvas = <HTMLCanvasElement>document.getElementById('canvas');

