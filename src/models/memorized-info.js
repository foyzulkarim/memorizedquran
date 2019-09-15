export default class MemorizedInfo{
    constructor(options){
        this.surah = options.surah;
        this.memorizedAyah = options.memorizedAyah;
        this.percent = 100 * (this.memorizedAyah / this.surah.totalAyah);
    }
}