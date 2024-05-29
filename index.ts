// console.log("Hello from typescript");



// let age: number = 30;

// age = 3

// let ages: any = 40


// type NumberOrArraysOfStrings = number | string[]

// let reusableVariable: any = 30;

// reusableVariable = ["hello"]

// let testVariable: number | string[] = 30 

// testVariable = ["hi"]



// type NumberAndStringTupleType = [number, string]
// let tupleVariable: NumberAndStringTupleType;
// tupleVariable = [1, "goodbye"]



// type Triple = [number, string, string[]]
// let tripleVirable: Triple;
// tripleVirable = [1, "whoop", ["first, second, third"]]



function add(a:number, b:number){
    return a + b
}

const addLambda = (a:number, b:number) => a + b

const sum = add(3,4)
const sumLambda = addLambda (3,4)



const multiply = (a:number, b?:number) => {
    if (b) {
        return a * b 
    }

  return a * 2  
}

console.log(multiply(3))
