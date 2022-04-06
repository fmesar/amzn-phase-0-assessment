// 1. Write your functions here
const katzDeli = []

function takeANumber(array, name){
    array.push(name)
    console.log(`Welcome, ${name}. You are number ${array.length} in line.`)
  }
function line(array){
    let result = "The line is currently: "
    for(let i = 0; i < array.length; i++){
        result += i + 1  + ". " + array[i] + " "
    }
    console.log(result)
}
function nowServing(array){
    if(array[0] === undefined){
        console.log("There is nobody waiting to be served!")
        return
    }
    console.log("Currently serving "+array[0]+".")
    array.shift()
}


// 2. Example Usage

// const katzDeli = []

 takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
 takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
 takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.
 line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"
 nowServing(katzDeli) //=> "Currently serving Ada."
 line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"
 takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.
 line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"
 nowServing(katzDeli) //=> "Currently serving Grace."
 line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"
 