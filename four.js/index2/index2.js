// pejvid
function searchWord (sentence="wellcome to mern stack.you learn a front end hereee",word){
    if(sentence.includes(word)){
        return "thats it. we find it"

    } else{
        return "soorrry,we cant find it "
    }
  
}
console.log(searchWord(sentence,word))