function larg(words, index , longest){
    if(index==words.length){
        return longest
    }

    if(words[index].length>longest.length){
        longest = words[index]
    }

    return larg(words, index+1, longest)
}

const sentence = "I love learning JavaScript recursion";
let words = sentence.split(" ")

console.log(larg(words, 0, ""));