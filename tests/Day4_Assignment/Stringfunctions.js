
console .log("Example 1")
function stringLength() {

const S = "hello world"

const string = S.trim().split(" ");
const lastWord = string[string.length - 1];

console.log("The string is: " + S);
console.log("The last word of the string is: " + lastWord);
console.log("The length of the lastWord of the string is: " + lastWord.length);
    
}

stringLength();

console.log("***********************************************************");
//Example 2
console .log("Example 2")

let str1 = "   fly me to the moon  ";
console.log("String is ",str1)

let trimmedStr = str1.trim();
console.log("String is ",trimmedStr)

let trimmedStrArray = trimmedStr.split(" ");
console.log("String Array is ",trimmedStrArray)

console.log("String Array length is ",trimmedStrArray.length);

console.log("The last wordlength is ",trimmedStrArray[(trimmedStrArray.length)-1].length);
console.log("***********************************************************");
//Example 2
console .log("Example 3")
function isAnagram(word1, word2) {

        const cleanString = (str) => {

        const result1 = str.toLowerCase()
        const result2 = result1.replace(/[^a-zA-Z0-9]/g, "");
        const result3 = result2.split('');
        const result4 = result3.sort() 
        const result = result4.join('');
        
        return result;
        }

    console.log("cleanString1: " + cleanString(word1));
    console.log("cleanString2: " + cleanString(word2));
    return cleanString(word1) === cleanString(word2);

}
console.log(isAnagram("listen", "silent"));   // Output: true
console.log(isAnagram("hello", "world"));       // Output: false
