///<reference path='./Entity.ts'/>

class Bus extends Entity
{
    public constructor(imgSrc: string, xCoor: number, yCoor: number, width: number, height: number, canvas: HTMLCanvasElement)
    {
        super(imgSrc, xCoor, yCoor, width, height, canvas)
    }
}