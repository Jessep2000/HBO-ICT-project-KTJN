///<reference path="./Timer.ts"/>

class Scores extends Timer {
    private totalScore: number;
    protected totalSeconds: number;
    protected oneStar: boolean;
    protected twoStar: boolean;
    protected threeStar: boolean;
    private canvas: Canvas;
    private imageSource: string;
    private timer: Timer
    public starSpace = 0



    public constructor(timer: Timer) {
        super()
        this.timer = timer;
        this.canvas = new Canvas(<HTMLCanvasElement>document.getElementById("canvas"))
        this.oneStar = false
        this.twoStar = false
        this.threeStar = false
        this.totalSeconds = this.yourTime();


    }
    /**
     *  
     */
    public getScore(): void {
        if (this.totalSeconds <= 60) {
            alert('☆☆☆');
            document.location.reload();

        }
        else if (this.totalSeconds > 60 && this.totalSeconds <= 120) {
            alert('☆☆');
            document.location.reload();

        }
        else {
            alert('☆');
            document.location.reload();

        }




    }
}