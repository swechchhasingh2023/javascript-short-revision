// console.log("promise");

function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            const error=false;
            if(!error){
                console.log("Your Promise is fullfilled");
                resolve()
            }
            else{
                console.log("Sorry Your Promise is not fullfilled");
                reject("Something is wrong");
            }
        }, 2000);
    });
}
func1().then(function(){
    console.log("Your promise is completed");
}).catch(function(error){
    console.log(error);
    console.log("Your promise is rejected"); 
});