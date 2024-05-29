// Hàm decorator để tìm từ dài nhất không có ký tự trùng nhau trong câu
function findLongestUniqueWord(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(sentence: string): string {
        // Tách các từ trong câu
        const words = sentence.split(/\s+/);

        // Tìm từ dài nhất không có ký tự trùng nhau
        let longestWord = '';
        for (const word of words) {
            if (isUnique(word) && word.length > longestWord.length) {
                longestWord = word;
            }
        }

        return longestWord;
    };

    return descriptor;
}

// Hàm kiểm tra xem từ có ký tự trùng nhau không
function isUnique(word: string): boolean {
    const charMap: { [key: string]: boolean } = {};
    for (const char of word) {
        if (charMap[char]) {
            return false;
        }
        charMap[char] = true;
    }
    return true;
}

class WordProcessor {
    @findLongestUniqueWord
    static findLongestUniqueWordInSentence(sentence: string): string {
        return sentence;
    }
}

// Khai báo câu và tìm từ dài nhất không có ký tự trùng nhau
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = WordProcessor.findLongestUniqueWordInSentence(sentence);
console.log("Longest word without repeating characters:", longestWord);
