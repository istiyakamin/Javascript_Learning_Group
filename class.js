// toSting 
const arr = ['banana', 'apple', 'orange'];
const num = 35;
arr1 = arr.toString();
console.log(arr1);
console.log(typeof arr1);

// join
arr2 = arr.join(' + ');
console.log(arr2);

// push 
arr3 = arr.push('guava');
console.log(arr);
console.log(arr3);

// pop
arr4 = arr.pop();
console.log(arr);
console.log(arr4);

// shift
arr5 = arr.shift();
console.log(arr);
console.log(arr5);

// unshift
arr6 = arr.unshift('lemon');
console.log(arr);
console.log(arr6);

// splice
console.log(arr);
arr7 = arr.splice(2,0, 'cucumber');
console.log(arr);

// slice
arr8 = arr.slice(2,4);
console.log(arr)
console.log(arr8);

// changing element 
arr[2] = 'guava';
console.log(arr);

// include
arr9 = arr.includes('apple');
console.log(arr9);

// indexof
arr10 = arr.push('apple')
arr11 = arr.indexOf('guava');
console.log(arr);
arr12 = arr.indexOf('apple');
console.log(arr12);

// lastindexof
arr13 = arr.lastIndexOf('apple');
console.log(arr13);

// reverse
console.log(arr);
arr14 = arr.reverse();
console.log(arr)

// foreach
arr.forEach(function(fruits, fruitsNumber, arr){
    console.log(" Index number is " + fruitsNumber + " And fruit Name is " + fruits + " full fruits name " + arr);
});

// map
arr15 = arr.map(function(fruits){
    return "Md. " + fruits;
})
console.log(arr15);

const newNum = [4,5,6,80,34,45,23,9,87,44,5];
arr16 = newNum.map(function(num1){
    return num1 % 2 ;
})
console.log(newNum)
console.log(arr16);

// every
arr17 = newNum.every(function(num1){
    return num1 > 30;
})
console.log(arr17);

// some
arr18 = newNum.some(function(num1){
    return num1 > 30
});
console.log(arr18);

// reduce
console.log(newNum);
arr19 = newNum.reduce(function(a, b){
    return a + b;
});
console.log(arr19);

// filter
console.log(newNum);
arr20 = newNum.filter(function(a){
    return a > 50;
});
console.log(arr20);

// sort 
console.log(arr);
arr21 = arr.sort();
console.log(arr21);
const newArr = ['apple', 'Apple', 'APPle', 'APPLE'];
arr22 = newArr.sort();
console.log(arr22);


console.log(newNum);

arr23 = newNum.sort(function(a,b){
    if(a > b){
        return 1;
    } else if(a < b){
        return -1;
    } else {
        return 0
    }
});

arr24 = newNum.sort();
console.log(arr24);
console.log(arr23);




