class Canvas {
    private helper: Helper;
    private game: Game;

    public constructor(canvas: HTMLCanvasElement) {
        this.helper = new Helper(canvas);
        this.game = new Game(canvas);
    }

    public initGame(){
        this.game.init();
    }
}

