///<reference path='./Entity.ts'/>

class Bus extends Entity {

    public constructor(imgSrc: string, xCoor: number, yCoor: number, width: number, height: number, canvas: HTMLCanvasElement) {
        super(imgSrc, xCoor, yCoor, width, height, canvas);
    }

    public testArray: Array<number> = [300, 500, 100, 0, 400, 100, 600, 200, 100]

    //Change position of the bus
    public moveBus() {
        let stepCounter = 0;
        let YstepReady: boolean
        let XstepReady: boolean
        let targetposX = this.testArray[stepCounter];
        let targetposY = this.testArray[stepCounter + 1];
        
        if(this.xPos != this.testArray[stepCounter]){
            if(this.xPos > this.testArray[stepCounter]){
                this.xPos --;
            } else if (this.xPos < this.testArray[stepCounter]){
                this.xPos ++;
            }
        } else {
            XstepReady = true;
        }

        if(this.yPos != this.testArray[stepCounter + 1]){
            if(this.yPos > this.testArray[stepCounter + 1]){
                this.yPos --;
            } else if (this.yPos < this.testArray[stepCounter + 1]){
                this.yPos ++;
            }
        } else {
            YstepReady = true;
        }

        if(XstepReady == true && YstepReady == true){
            stepCounter = stepCounter +2;
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