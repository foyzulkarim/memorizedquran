import quranData from './../data/quran.json';
import Surah from './../models/surah';

export class SurahService {
    async listSurah() {
        return quranData.map((surah, index) => new Surah({
            name: surah.title,
            nameAr: surah.titleAr,
            serialNo: index + 1,
            totalAyah: surah.count
        }));
    }
}