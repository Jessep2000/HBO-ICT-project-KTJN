///<reference path='./Entity.ts'/>

class Bus extends Entity {

    public constructor(imgSrc: string, xCoor: number, yCoor: number, width: number, height: number, canvas: HTMLCanvasElement) {
        super(imgSrc, xCoor, yCoor, width, height, canvas);
    }

    public busDirections: Array<number> = [64, 64, 193, 64, 322, 64, 322, 193, 322, 322, 451, 322, 451, 193, 580, 193, 580, 64, 64, 64 ]
    protected stepCounter: number = 0;

    //Change position of the bus
    public moveBus() {
        // let this.stepCounter = 0;
        let YstepReady: boolean
        let XstepReady: boolean
        let targetposX = this.busDirections[this.stepCounter];
        let targetposY = this.busDirections[this.stepCounter + 1];
        
        if(this.xPos != targetposX){
            if(this.xPos > targetposX){
                this.xPos --;
            } else if (this.xPos < targetposX){
                this.xPos ++;
            }
        } else {
            XstepReady = true;
        }

        if(this.yPos != targetposY){
            if(this.yPos > targetposY){
                this.yPos --;
            } else if (this.yPos < targetposY){
                this.yPos ++;
            }
        } else {
            YstepReady = true;
        }

        if(XstepReady == true && YstepReady == true){
            this.stepCounter = this.stepCounter +2;
            YstepReady = false;
            XstepReady = false;
        }
        this.drawBus();
    }

    //Draw the bus
    public drawBus() {
        this.helper.writeImageToCanvas(this.imageSource, this.xPos - 20, this.yPos)
    }
}