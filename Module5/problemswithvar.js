var a = 21

var a = 35//redeclaration of same variable

console.log(a)

if(a===35){
    var b = 40
    console.log(b)
}

// variables declare with var keyword are not blocked scoped they are function scoped

console.log(b)

function test(){
    var c =100
    console.log(c)
}

test()

console.log(c)