const sentence: string = "This is a random sentence with some repeated characters";

function findLongestWordWithoutDuplicates(sentence: string): string {
    const words: string[] = sentence.split(/\s+/); // Tách câu thành các từ

    let longestWordWithoutDuplicates: string = "";
    let maxUniqueLength: number = 0;

    for (const word of words) {
        const uniqueChars: Set<string> = new Set(word); // Tạo một Set để loại bỏ các ký tự trùng lặp
        if (uniqueChars.size > maxUniqueLength) {
            maxUniqueLength = uniqueChars.size;
            longestWordWithoutDuplicates = word;
        }
    }

    return longestWordWithoutDuplicates;
}

const longestWord = findLongestWordWithoutDuplicates(sentence);
console.log("Longest word without duplicates:", longestWord);
