function findLongestUniqueWord(sentence: string): string {
    // Tách câu thành các từ
    const words = sentence.split(' ');

    // Hàm kiểm tra xem từ có ký tự trùng lặp hay không
    function hasUniqueCharacters(word: string): boolean {
        const charSet = new Set();
        for (let char of word) {
            if (charSet.has(char)) {
                return false;
            }
            charSet.add(char);
        }
        return true;
    }

    let longestUniqueWord = '';

    // Duyệt qua từng từ để tìm từ dài nhất mà không có ký tự trùng lặp
    for (let word of words) {
        if (hasUniqueCharacters(word) && word.length > longestUniqueWord.length) {
            longestUniqueWord = word;
        }
    }

    return longestUniqueWord;
}

// Khai báo biến câu và gán giá trị
const sentence = "hello world apple banana orange pumpkin cucumber";

// Tìm từ dài nhất trong câu mà không có các ký tự trùng nhau
const longestUniqueWord = findLongestUniqueWord(sentence);

// In kết quả ra màn hình
console.log("Từ dài nhất mà không có ký tự trùng lặp là:", longestUniqueWord);
