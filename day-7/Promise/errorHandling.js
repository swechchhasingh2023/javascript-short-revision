// console.log("try Catch");

// - erros backend(server) - for handling the errors and for maintaing th code error free we use the try catch block

// custom erros - sometimes we want display different which help users to understand what we need here
// let str = "amey";
// console.log("Hello")
// let str;
// if(str==undefined){
//     throw new Error("This is not undefined");
// }else{
//     console.log("Not error")
// }


// try catch block
// - We put all codes in try block, incase any error is come then JS engine will run the catch block

// functionFunc1();
try{
    function functionFunc1(){
        console.log("inside Func1");
    }
    console.log("We are inside try block");
    functionFunc1();
    console.log("Hello JS");
}
catch(error){
    console.log("Something is worng");
    console.log(error);
    alert(error.message);
}
// finally - if any error will occurs or not this block always run
// we will avoid finally block because it will ignore the errors also..
finally{
    console.log("Finally :  This is finally block");
    console.log("Finally : We are inside try block");
    functionFunc1();
    console.log(" Finally :  Hello JS");
}