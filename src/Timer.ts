class Timer
{
    public timeVar: any;
    private totalSeconds: number;

    public constructor() {
        this.timeVar = setInterval(() => this.countTimer(), 1000);
        this.totalSeconds = 0;
    };

    public countTimer(): void {
        ++this.totalSeconds;

        
        let hours = Math.floor(this.totalSeconds / 3600);
        let minutes = Math.floor((this.totalSeconds - hours * 3600) / 60);
        let seconds = this.totalSeconds - (hours * 3600 + minutes * 60);

        document.getElementById("timer").innerHTML = "Time: " + minutes + ":" + seconds;
    };
}