import surahService from './surah';
import MemorizedInfo from '../models/memorized-info';

class MemorizationService {
    async saveMemorizationInfo(data) {
        localStorage.setItem('memorizedQuran', JSON.stringify(data));
    }

    async getMemorizationInfo() {
        const memorizationInfoString = localStorage.getItem('memorizedQuran');

        if (memorizationInfoString) {
            return JSON.parse(memorizationInfoString);
        } else {
            const surahList = await surahService.listSurah();
            const newMemorizationInfo = surahList.map(surah => new MemorizedInfo({
                surah,
                memorizedAyah: 0
            }));
            localStorage.setItem('memorizedQuran', JSON.stringify(newMemorizationInfo));

            return newMemorizationInfo;
        }
    }
}

const memorizationService = new MemorizationService();
export default memorizationService;