function groupAnagrams(strings) {
    const anagramsMap = {};

    strings.forEach(str => {
        const key = str.split('').sort().join('');

        anagramsMap[key] = [...(anagramsMap[key] || []), str];
    });

    const result = Object.values(anagramsMap);

    return result;
}

const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strings));
