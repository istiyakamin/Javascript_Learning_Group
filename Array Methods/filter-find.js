// filter 
var arr = ['santo', 'rakib', 'emon', 'suhan'];

arr1 = arr.filter(function(item){
    if(item == 'santo'){
        console.log(item);
        return item;
    }
})

console.log(arr1);

// find 

arr2 = arr.find(function(item){
    console.log(item);
    return item
})

console.log(arr2);


const arr12 = [1, 3, 234, 65, 4, 3];
const foundIndex = arr12.findIndex(function(item){
  return item > 4;
});
console.log(foundIndex);

const arr14 = ['item1', 'item2', 'item3', 'item4', 'item5'];
const include = arr14.includes('item44');
console.log(include);

