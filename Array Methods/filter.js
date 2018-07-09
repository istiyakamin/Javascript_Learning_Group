var arr = ['santo', 'rakib', 'emon', 'suhan'];

arr1 = arr.filter(function(item){
    if(item == 'santo'){
        console.log(item);
        return item;
    }
})

console.log(arr1);