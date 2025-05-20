let arr = new Array("String ", 1,2,3,"Ta")
let newarr = new Array();
for(let i = 0; i < arr.length; i++){
    if(typeof arr[i]=="number"){
        newarr.push(arr[i]);        
    }
    
}
console.log(newarr); 
//  optimized code for this 
function filter_list(l) {
  return l.filter(v => typeof v == "number");
}
//here l.filter (is a built in array function used to filer array on a specified condition)
// v=> is arrow function which means for every element in l condition is checked
