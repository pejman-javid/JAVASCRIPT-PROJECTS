// pejvid
const numberOne = +prompt("ENTER YOUR FIRST NUMBER")
const operator = prompt("ENTER THE OPERAND YOU WANT")
const numberTwo = +prompt("ENTER YOUR second NUMBER")

if(operator === "+")
{
    console.log("YOUR ANSWER IS", numberOne + numberTwo)
}
if(operator === "-")
{
    console.log("YOUR ANSWER IS",numberOne - numberTwo)
}
if(operator === "*")
{
    console.log("YOUR ANSWER IS",numberOne * numberTwo)
}
if(operator === "/")
{
    console.log("YOUR ANSWER IS",numberOne / numberTwo)
}
if(operator === "**")
{
    console.log("YOUR ANSWER IS",numberOne ** numberTwo)
}
if(isNaN( numberOne) ||  isNaN (numberTwo))
{
    console.log("YOU DIDENT ENTER NUMBER")
}