// pejvid
function numbers(numberOne = 0 , operator , numberTwo = 0){
    if(!isNaN(numberOne  , numberTwo)){
        switch(operator){
            case '+' :
            return (numberOne + numberTwo)
            case '-' :
            return (numberOne - numberTwo)
            case '/' :
            return (numberOne / numberTwo)
            case '*' :
            return (numberOne * numberTwo)
            default:
                return("check your operators please (:")
        }
    }
    return ("your number isnt true,check it")
}

const numberOne = +prompt("ENTER YOUR FIRST NUMBER")
const operator = prompt("ENTER THE OPERAND YOU WANT")
const numberTwo = +prompt("ENTER YOUR second NUMBER")
console.log(numbers(numberOne,operator,numberTwo))