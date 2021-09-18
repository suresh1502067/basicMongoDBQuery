
// Returns Vivek, bike details: TS0452, Thunderbird

function randomFunc(){
  var obj1 = {name:"Vivian", age:45};

  return function(){
    console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure(); 

// function add(number) {
//   console.log("number--1",number)

//   if (number <= 0) {
//     return 0;
//   } else {
//     // console.log("number-----------2",number, add(number - 1))
//     return `${number + add(number - 1)}`;
//   }
// }

// console.log("addd",add(3) )

function add(number) {
  if(number<=0){
    return 0
  }else{
    return number+add(number-1)
  }
}

console.log("resukt",add(5))