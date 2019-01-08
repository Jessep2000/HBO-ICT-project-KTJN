class Bus {
    private canvas: Canvas;
    private imageSource: string;
    private xPos: number;
    private yPos: number;
    private levelData: LevelData;
    //private width: number;
    //private height: number;

    //left: X-coor | right: Y-coor
    public busDirection: Array<number> = [64, 64]
    protected stepCounter: number = 0;
    protected preStepCounter: number = 0;
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
        this.levelData = new LevelData();
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
        let lineBeginX = this.stepX;
        let lineBeginY = this.stepY;
        let optionUp: boolean = true;
        let optionDown: boolean = true;
        let optionLeft: boolean = true;
        let optionRight: boolean = true;
        let getIndex: number;
        getIndex = (((this.stepY - 64) / 128) * 5) + ((this.stepX - 64) / 128)
        let currentTile: string = this.levelData.level1_2[getIndex];
        if(currentTile.includes('t_split')){
            if(currentTile.includes('_0_')){
                optionUp = false
            }
            if(currentTile.includes('_90_')){
                optionLeft = false
            }
            if(currentTile.includes('_180_')){
                optionDown = false
            }
            if(currentTile.includes('_270_')){
                optionRight = false
            }
        }
        if(currentTile.includes('turn')){
            if(currentTile.includes('_0_')){
                optionUp = false
                optionLeft = false
            }
            if(currentTile.includes('_90_')){
                optionLeft = false
                optionDown = false
            }
            if(currentTile.includes('_180_')){
                optionDown = false
                optionRight = false
            }
            if(currentTile.includes('_270_')){
                optionRight = false
                optionUp = false
            }
        }
        if(currentTile.includes('straight')){
            if(currentTile.includes('_0_')){
                optionUp = false
                optionDown = false
            }
            if(currentTile.includes('_90_')){
                optionLeft = false;
                optionRight = false;
            }
        }
        if (this.stepX <= 64) {
            optionLeft = false;
        }
        if (this.stepX >= 576) {
            optionRight = false;
        }
        if (this.stepY <= 64) {
            optionUp = false;
        }
        if (this.stepY >= 576) {
            optionDown = false;
        }
        // console.log(optionDown);
        // console.log(optionDown, optionUp, optionLeft, optionRight)
        if (event.keyCode == 38) { //up
            if (optionUp == true) {
                newPosY = this.stepY - 128
                this.stepY = newPosY
            }
        }
        if (event.keyCode == 40) { //down
            if (optionDown == true) {
                newPosY = this.stepY + 128
                this.stepY = newPosY
            }
        }
        if (event.keyCode == 37) { //left
            if (optionLeft == true) {
                newPosX = this.stepX - 128
                this.stepX = newPosX
            }
        }
        if (event.keyCode == 39) { //right
            if (optionRight == true) {
                newPosX = this.stepX + 128
                this.stepX = newPosX
            }
        }
        this.busDirection.push(this.stepX);
        this.busDirection.push(this.stepY);
        // console.log(this.busDirection);
        this.canvas.writeLineToCanvas(lineBeginX, lineBeginY, newPosX, newPosY, 15)
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
        
        //Condition when game-over
        if (this.stepX == 64 && this.stepY == 64) {
            clearTimeout(Timer.prototype.timeVar);
            alert("✪ JE BENT EEN GEWELDIGE BEZORGER ✪ \n Je was zo snel dat we je score helaas niet konden berekenen :(");
            document.location.reload()
        }
        this.drawBus();
        // })
    };

    //Draw bus to canvas
    public drawBus(): void {
        // console.log(this.imageSource, this.xPos - 20, this.yPos)
        this.canvas.writeImageToCanvas(this.imageSource, this.xPos, this.yPos)
    };

}