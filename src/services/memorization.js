import surahService from './surah';

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

            const newMemorizationInfo = surahList.map(surah => Object.assign({}, surah, { memorizedAyah: 1}));
            localStorage.setItem('memorizedQuran', JSON.stringify(newMemorizationInfo));

            return newMemorizationInfo;
        }

    }
}

const memorizationService = new MemorizationService();
export default memorizationService;