// toString
const arr = ['apple', 'banana', 'tomato', 'orange'];
arr1 = arr.toString();
console.log(arr1);
console.log(typeof arr1);


// join
arr2 = arr.join(' + ');
console.log(arr2);


// push
arr3 = arr.push('jackfruit', 'hello');
console.log(arr);
console.log(arr3);

// unshift
arr4 = arr.unshift('lemon');
console.log(arr);
console.log(arr4);

// shift
arr5 = arr.shift();
console.log(arr);
console.log(arr5);

// pop
arr6 = arr.pop();
console.log(arr);
console.log(arr6);

// splice
//arr60 = arr.length - 1;
//console.log(arr60);
arr7 = arr.splice(1, 0, 'coconut');
console.log(arr);

// slice
arr8 = arr.slice(2,5);
console.log(arr8);

// changing Element
console.log(arr);
arr[0] = 'guava';
console.log(arr);

// Includes
arr9 = arr.includes('tomato');
console.log(arr9);

// Indexof
console.log(arr);
arr10 = arr.indexOf('banana');
arr[arr10] = 'jackfruit';
console.log(arr10);
console.log(arr);

arr12 = arr.indexOf('jackfruit');
console.log(arr12);

// lastindexof
arr13 = arr.lastIndexOf('jackfruit');
console.log(arr13);

// reverse
console.log(arr);
arr14 = arr.reverse();
console.log(arr);

// foreach
arr.forEach(function(fruit, fruitNumber, arr){
    console.log(fruit);
    console.log(fruitNumber);
    console.log(arr);
    
    console.log('My fruit name is ' + fruitNumber + " => " + fruit + " all => " + arr);
});

// filter
const newArr = [3,4,7,2,56,43,34,45,56,34,40];
arr15 = newArr.filter(function(number){
    //return number % 2 == 1;
    //return number % 2 == 0;
    //return number > 50;
    //return number < 10;
    return number % 10 == 0;

});
console.log(arr15);

// map
console.log(arr);
arr16 = arr.map(function(value){
    return "Md. " + value;
})
console.log(arr16);

console.log(newArr);
arr17 = newArr.map(function(value){
    return value * 2;
});
console.log(newArr);
console.log(arr17);

// reduce
arr18 = newArr.reduce(function(a, b){
    return a + b;
});
console.log(arr18);

// every
console.log(newArr);
arr19 = newArr.every(function(num){
    return num < 40;
});
console.log(arr19);

// some
console.log(newArr);
arr19 = newArr.some(function(num){
    return num < 40;
});
console.log(arr19);

// find
arr20 = newArr.find(function(num){
    return num > 50;
})
console.log(arr20);

// findIndex
arr21 = newArr.findIndex(function(num){
    return num > 50
})
console.log(arr21);

// sort
console.log(newArr);
arr22 = newArr.sort(function(a, b){
    return a-b;
})
console.log(arr22)

console.log(arr);
arr23 = arr.sort(function(a, b){
    if( a > b){
        return 1;
    }else if(a < b){
        return -1
    } else {
        return 0;
    }
});
console.log(arr23);

var fruits = ["APPLE", "apple", "Apple", "APPle"];
aaa = fruits.sort();
console.log(aaa);

