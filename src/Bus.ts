class Bus {
    private canvas: Canvas;
    private imageSource: string;
    private xPos: number;
    private yPos: number;
    //private width: number;
    //private height: number;

    //left: X-coor | right: Y-coor
    public busDirection: Array<number> = [64, 64]
    protected stepCounter: number = 0;
    protected stepX: number = 64;
    protected stepY: number = 64;

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

    public getBusDirction(event: KeyboardEvent) {
        let newPosX = this.stepX
        let newPosY = this.stepY
        let optionUp: boolean;
        let optionDown: boolean;
        let optionLeft: boolean;
        let optionRight: boolean;
        if (this.stepX <= 64) {
            optionLeft = false;
        } else {
            optionLeft = true;
        }
        if (this.stepX >= 576) {
            optionRight = false;
        } else {
            optionRight = true;
        }
        if (this.stepY <= 64) {
            optionUp = false;
        } else {
            optionUp = true;
        }
        if (this.stepY >= 576) {
            optionDown = false;
        } else {
            optionDown = true;
        }
        console.log(optionDown, optionUp, optionLeft, optionRight)
        if (event.keyCode == 38) { //up
            if (optionUp == true) {
                newPosY = this.stepY - 128
                this.stepY = newPosY
                console.log('up')
            }
        }
        if (event.keyCode == 40) { //down
            if (optionDown == true) {
                newPosY = this.stepY + 128
                this.stepY = newPosY
                console.log('down')
            }
        }
        if (event.keyCode == 37) { //left
            if (optionLeft == true) {
                newPosX = this.stepX - 128
                this.stepX = newPosX
                console.log('left')
            }
        }
        if (event.keyCode == 39) { //right
            if (optionRight == true) {
                newPosX = this.stepX + 128
                this.stepX = newPosX
                console.log('right')
            }
        }
        this.busDirection.push(this.stepX);
        this.busDirection.push(this.stepY);
        console.log(this.busDirection);
    }

    //Method to move the bus
    public moveBus(): void {
        // const startButton = document.getElementById('moveBusButton')
        // startButton.addEventListener('click', () => {
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
        // })
    };

    //Draw bus to canvas
    public drawBus(): void {
        this.canvas.writeImageToCanvas(this.imageSource, this.xPos - 20, this.yPos)
    };

}