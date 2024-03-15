const fibonacci = function(index) {

    function fib(number){
        if(number==0){
            return 0
        }

        else if(number < 0){
            return "OOPS"
        }

        else if(number ==1 || number ==2){
            return 1
        }
        else{return fib(number-1)+fib(number-2)}
    }

    return fib(index);
    
};

// Do not edit below this line
module.exports = fibonacci;
