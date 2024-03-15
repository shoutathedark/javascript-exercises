const palindromes = function (inword) {
    const filteredword = inword.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().replace(/ /g,'')
    function checkLetters(word){

        if (word.length ==1 || word.length ==0){
            return true
        }

       else if(word.slice(0,1)=== word.slice(-1)){
        return checkLetters(word.slice(1,word.length-1))
       }

       else return false


    }

    return checkLetters(filteredword);
};

// Do not edit below this line
module.exports = palindromes;
