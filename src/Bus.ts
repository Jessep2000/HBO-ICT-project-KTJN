class Bus
{
    private canvas: Canvas;
    private imageSource: string;
    private xPos: number;
    private yPos: number;
    //private width: number;
    //private height: number;
    
    //left: X-coor | right: Y-coor
    public busDirection: Array<number> = [64, 64, 194, 64, 322, 64, 322, 193, 322, 322, 451, 322, 451, 193, 580, 193, 580, 64, 64, 64]
    protected stepCounter: number = 0;
    
    //Chose from different color vehicles
    public vehicleColor: Array<string> = [
        "bus_blue",                 //0 -> blauw
        "bus_green",                //1 -> groen
        "bus_orange",               //2 -> oranje
        "bus_pink",                 //3 -> roze
        "bus_red",                  //4 -> rood
        "bus_yellow"                //5 -> geel
    ];
    
    
    public constructor(canvas: HTMLCanvasElement, imgSrc: string, xCoor: number, yCoor: number, /*width: number, height: number*/) {
        this.canvas = new Canvas(canvas);
        this.imageSource = imgSrc;
        this.xPos = xCoor;
        this.yPos = yCoor;
        //this.width = width;
        //this.height = height;
    };

    //Method to move the bus
    public moveBus(): void {
        let YstepReady: boolean;
        let XstepReady: boolean;
        let targetPosX: number = this.busDirection[this.stepCounter];
        let targetPosY: number = this.busDirection[this.stepCounter + 1];

        if (this.xPos != targetPosX) {
            if (this.xPos > targetPosX) {
                this.xPos--;
            } else if (this.xPos < targetPosX) {
                this.xPos++;
            } 
        } else {
                XstepReady = true;
        };

        if (this.yPos != targetPosY) {
            if (this.yPos > targetPosY) {
                this.yPos--;
            } else if (this.yPos < targetPosY) {
                this.yPos++;
            } 
        } else {
                YstepReady = true;
        };

        if (XstepReady == true && YstepReady == true) {
            this.stepCounter = this.stepCounter + 2;
            YstepReady = false;
            YstepReady = false;
        }
        this.drawBus();
    };

    //Draw bus to canvas
    public drawBus(): void {
        this.canvas.writeImageToCanvas(this.imageSource, this.xPos - 20, this.yPos)
    };

}