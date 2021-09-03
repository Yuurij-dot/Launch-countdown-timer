export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate;
    }
    get _actualDate(){
        return new Date();
    }

    get _futureDate(){
        return new Date(this.futureDate);
    }

    get _timeStemp(){
        return this._futureDate.getTime() - this._actualDate.getTime()
    }

    get days(){
        return Math.floor(this._timeStemp / (24 * 60 * 60 * 1000));
    }
    get hours(){
        return Math.floor(this._timeStemp / (60 * 60 * 1000));
    }
    get minutes(){
        return Math.floor(this._timeStemp / (60 * 1000));
    }
    get secounds(){
        return Math.floor(this._timeStemp / 1000);
    }
    get total(){
        const days = this.days < 10 ? "0" + this.days : this.days;
        const hours = this.hours % 24 < 10 ? "0" + (this.hours % 24) : this.hours % 24;
        const minutes = this.minutes % 60 < 10 ? "0" + (this.minutes % 60) : this.minutes % 60;
        const secounds = this.secounds % 60 < 10 ? "0" + (this.secounds % 60) : this.secounds % 60;

        return [days,hours,minutes,secounds]
    }
}