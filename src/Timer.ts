//NOT SURE IF THIS IS GOING TO WORK AFTER ALL
class Timer
{
    private _element: Canvas;
    private _endTime: any;
    //private _hours: number;        [OPTIONAL]
    private _minutes: number;
    private _seconds: number
    private _msLeft: number;
    private _time: any;

    public constructor(mins: number, secs: number)
    {
        
    }

    public twoDigits(n: number) {
        return(n <= 9 ? "0" + n : n);
    };

    public updateTimer(): void {
        this._msLeft = this._endTime - (+new Date);
        if (this._msLeft < 1000) {
            this._element.writeTextToCanvas("Time's up", 20, 50, 50, "black");
        } else {
            this._time = new Date(this._msLeft);
            this._minutes = this._time.getUTCMinutes();
            this._seconds = this._time.getUTCSeconds();
            //TODO: add writeTimerToCanvas
            setTimeout(this.updateTimer, this._time.getUTCMiliseconds() + 500 );
        }
    }
    
    element = document.getElementById("canvas");
    endTime = (+new Date) + 1000 * (60*this._minutes + this._seconds) + 500;
    //TODO add updateTimer()
}
