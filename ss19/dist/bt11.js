"use strict";
const sentence = "This is a random sentence with some repeated characters";
function findLongestWordWithoutDuplicates(sentence) {
    const words = sentence.split(/\s+/); // Tách câu thành các từ
    let longestWordWithoutDuplicates = "";
    let maxUniqueLength = 0;
    for (const word of words) {
        const uniqueChars = new Set(word); // Tạo một Set để loại bỏ các ký tự trùng lặp
        if (uniqueChars.size > maxUniqueLength) {
            maxUniqueLength = uniqueChars.size;
            longestWordWithoutDuplicates = word;
        }
    }
    return longestWordWithoutDuplicates;
}
const longestWord = findLongestWordWithoutDuplicates(sentence);
console.log("Longest word without duplicates:", longestWord);
