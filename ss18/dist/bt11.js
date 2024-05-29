"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorator để tìm từ dài nhất không có ký tự trùng nhau trong câu
function findLongestUniqueWord(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (sentence) {
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
function isUnique(word) {
    const charMap = {};
    for (const char of word) {
        if (charMap[char]) {
            return false;
        }
        charMap[char] = true;
    }
    return true;
}
class WordProcessor {
    static findLongestUniqueWordInSentence(sentence) {
        return sentence;
    }
}
__decorate([
    findLongestUniqueWord
], WordProcessor, "findLongestUniqueWordInSentence", null);
// Khai báo câu và tìm từ dài nhất không có ký tự trùng nhau
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = WordProcessor.findLongestUniqueWordInSentence(sentence);
console.log("Longest word without repeating characters:", longestWord);
