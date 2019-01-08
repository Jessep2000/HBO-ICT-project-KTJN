class Timer
{
    public timeVar: any;
    protected totalSeconds: number;

    public constructor() {
        this.timeVar = setInterval(() => this.countTimer(), 1000);
        this.totalSeconds = 0;
    };

    public countTimer(): void {
        ++this.totalSeconds;

        
        let hours = Math.floor(this.totalSeconds / 3600);
        let minutes = Math.floor((this.totalSeconds - hours * 3600) / 60);
        let seconds = this.totalSeconds - (hours * 3600 + minutes * 60);

        if (this.totalSeconds <= seconds) {
            document.getElementById("timer").innerHTML = "totale speeltijd<br>" + seconds + " sec";
        } else {
            document.getElementById("timer").innerHTML = "totale speeltijd<br>" + minutes + " min" + " " + seconds + " sec";
        };
    };

    public yourTime(): number {
        return this.totalSeconds
    }
}