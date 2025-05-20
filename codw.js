let arr = new Array("String ", 1,2,3,"Ta")
let newarr = new Array();
for(let i = 0; i < arr.length; i++){
    if(typeof arr[i]=="number"){
        newarr.push(arr[i]);        
    }
    
}
console.log(newarr);