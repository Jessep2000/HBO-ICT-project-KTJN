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
        if (this.totalSeconds <= 90) {
            alert('onestar');
            document.location.reload();

        }
        else if (this.totalSeconds > 90 && this.totalSeconds <= 180) {
            this.oneStar = false;
            this.twoStar = true;
            this.threeStar = false;

        }
        else {
            this.oneStar = true;
            this.twoStar = false;
            this.threeStar = false;

        }




    }
    /**
     * writeStar
     */
    public writeStar(): void {
        console.log("writestar")
        this.canvas.writeImageToCanvas("./assets/images/star2.png", 0 + this.starSpace, 0)
    }
    /**
     * showPlayerScore
     */
    public showPlayerScore(): void {

        if (this.oneStar == true) {
            for (let i = 0; i < 1; i++) {
                this.writeStar()

            }

        }
        else if (this.twoStar == true) {
            for (let i = 0; i < 2; i++) {
                this.writeStar()
                this.starSpace += 130


            }
        }
        else if (this.threeStar == true) {
            for (let i = 0; i < 3; i++) {
                this.writeStar(),
                    this.starSpace += 130

            }
        }


    }




}