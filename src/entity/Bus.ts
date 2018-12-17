///<reference path='./Entity.ts'/>

class Bus extends Entity {

    public constructor(imgSrc: string, xCoor: number, yCoor: number, width: number, height: number, canvas: HTMLCanvasElement) {
        super(imgSrc, xCoor, yCoor, width, height, canvas);
    }

    public testArray: Array<number> = [192, 64, 321, 64]

    //Chance position of the bus
    public moveBus() {
        for (let i = 0; i <= 4; i = i + 2) {
            let newXpos = this.testArray[i]
            let newYpos = this.testArray[i + 1]
            this.xPos = newXpos;
            this.yPos = newYpos;
            // this.helper.clearScreen();
            this.drawBus();
            console.log(i)
        }

    }

    //Draw the bus
    public drawBus() {
        this.helper.writeImageToCanvas(this.imageSource, this.xPos - 20, this.yPos)
    }
}