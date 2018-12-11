class Timer
{
    private _element: any;
    private _endTime: any;
    //private _hours: number;        [OPTIONAL]
    private _mins: number;
    private _msLeft: number;
    private _time: any;
    
    private _canvas: Canvas;

    public constructor(min: number, sec: number)
    {
        
    }

    public twoDigits(n: any): number {
        return(n <= 9 ? "0" + n : n);
    };

    public updateTimer(): void {
        this._msLeft = this._endTime - (+new Date);
        if (this._msLeft < 1000) {
            // this._canvas.drawTextToCanvas("Time's up")
        }
    }
}