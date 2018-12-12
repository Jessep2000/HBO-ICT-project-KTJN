class Highscores {

    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    private readonly playerName: string;
    private readonly score: number;
    private readonly highscores: Array<any>;

    public constructor(canvasId: HTMLCanvasElement, playerName: string, score: number ) {
        this.canvas = canvasId;
        this.playerName = playerName;
        this.score = score;
        this.highscores = [
            {
                playerName: 'Kevin',
                score: 60
            },
            {
                playerName: 'Jesse',
                score: 50
            },
            {
                playerName: 'Tijs',
                score: 40
            },
            {
                playerName: 'Nick',
                score: 20
            }
        ]
    }
}