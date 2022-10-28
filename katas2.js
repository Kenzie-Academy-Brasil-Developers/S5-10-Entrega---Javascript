function add(arg1,arg2){
    let sum = arg1+arg2
    return sum
}

console.log(add(2,4))





function multiply(arg1,arg2){

    let result = 0

    for(let i=0; i<arg2; i++){
        result = add(result,arg1)
    }

    return result
}

console.log(multiply(6, 8))








function power(x,n){
    let result = x

    for(let i=1; i<n; i++){
        result = multiply(result,x)
    }

    return result
}

console.log(power(2, 8))






function factorial(arg){

    let factor = 1

    for(let i=arg; i>=1; i--){
        factor = multiply(i,factor)
    }
    return factor
}

console.log(factorial(4))