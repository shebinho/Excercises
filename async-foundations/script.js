// function callback(){
//     console.log("Coming from callback");
// }
// function higherOrder(fn){
//     console.log("About to call callback");
//     fn();
//     console.log("Callback has been invoked")
// }
// higherOrder(callback);

// function sendMessage (message,callback){
//     return callback(message);
// }
// sendMessage("Message for console",console.log);

// sendMessage("Message for alert",alert);

// var answer = sendMessage("Are you sure ?",confirm);


                                                    /// CALLBACKS WITH FUNCTION DECLARATIONS  ///

// function greet(name,formatter){
//     return "Hello " + formatter(name);
// }
// function upperCaseName(name){
//     return name.toUpperCase();
// }
// greet("Tim",upperCaseName);


                                                    /// CALLBACKS WITH ANONYMOUS FUNCTIONS ///

// function greet(name,formatter){
//     return "Hello " + formatter(name);
// }
// greet("Tim",function(name){
//     return name.toUpperCase();
// });
// greet("Tim",function(name){
//     return name + "!!!!!!";
// });


                                                             /// for FUNCTION ///

// var arr = [1,2,3,4,5,6];

// function double(arr){
//     for(var i = 0; i < arr.length; i++){
//         console.log(arr[i] * 2);
//     }
// }
// double(arr);


                                                            /// forEach FUNCTION ///

// var arr = [1,2,3,4,5,6];
// forEach(arr,function(number){
//     console.log(number * 2);
// });


                                                /// forEach EXAMPLE WITH ALL CALLBACK PARAMETERS ///

                                        
// var strings = ["my","forEach","example"];

// var result = "";

// forEach(strings,function(str,index,array){   
//     if (array.length - 1 !== index){
//         result += str + " ";
//     }else{
//         result += str + "!!!";
//     }
// });

/*  1st time (str = my , index = 0, array = strings, result = my) 2nd time (str = forEach , index = 1, array = strings, result = my forEach )
    3rd time (str = example , index = 2, array = strings, result = my forEach example!!!) 
*/

// var x = 0-1;
// console.log(x);

// function forEach(arr,callback){
//     for(var i = 0; i < arr.length; i++){
//         callback(arr[i], i, arr);
//     }
// }


                                                    /// findIndex DEFINITION ///
// function findIndex(array,callback){
//     //findIndex Code to be implemented
// }

// function callback(curElement,curIndex,array){
//     //callback implemented by caller of function (callback povrzano so gorniot callback)
// }


                                                /// findIndex EXAMPLE - FIND A NUMBER ///

// var arr = [3,4,6,2,1];
// findIndex(arr, function(num, index, array){
//     return num === 6;
// });

                                                /// findIndex EXAMPLE - FIND A FIRST EVEN ///

// var arr = [5,11,13,8,6,7];
// findIndex(arr, function(num, index, array){
//     return num % 2 === 0 ;
// });

                                                /// findIndex EXAMPLE - COULD NOT FIND ///


// var langs = ["Java", "Python", "C++", "Ruby"];
// findIndex(langs, function(lang, index, arr){
//     return lang === "JavaScript";
// });


// var arr = [5,11,13,8,6,7];
// function findIndex(arr,callback){
//     for(var i = 0; i < arr.length; i++){
//        if (callback(arr[i], i, arr)){
//         return i;
//     }
//     return -1;
// }
// }
// findIndex(arr,)










