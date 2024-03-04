   
function partition(arr, low, high) { 
    let pivot = arr[high]; 
    let i = low - 1; 
  
    for (let j = low; j <= high - 1; j++) { 
        if (arr[j] < pivot) { 
            i++; 
            [arr[i], arr[j]] = [arr[j], arr[i]];  
        } 
    } 
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  
    return i + 1; 
} 
  
function quickSort(arr, low, high) { 
    if (low >= high) return; 
    let pi = partition(arr, low, high); 
  
    quickSort(arr, low, pi - 1); 
    quickSort(arr, pi + 1, high); 
} 

const array1000 = [];
for (let i = 1; i <= 1000; i++) {
    array1000.push(i);
}
for (let i = array1000.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array1000[i], array1000[j]] = [array1000[j], array1000[i]];
}
const array10000 = [];
for (let i = 1; i <= 10000; i++) {
    array10000.push(i);
}

for (let i = array10000.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array10000[i], array10000[j]] = [array10000[j], array10000[i]];
}





let testArr = [5,9,4,3,1,8,4,2,9,10];
quickSort(array10000, 0, testArr.length - 1);

console.log(testArr);

