
function bblSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length - i - 1); j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
   
}


const array1000 = [];
for (let i = 1; i <= 1000; i++) {
    array1000.push(i);
}
// Randomly shuffle the array
for (let i = array1000.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array1000[i], array1000[j]] = [array1000[j], array1000[i]];
}

let tempArr = [5,9,4,3,1,8,4,2,9,10];




const array10000 = [];
for (let i = 1; i <= 10000; i++) {
    array10000.push(i);
}

for (let i = array10000.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array10000[i], array10000[j]] = [array10000[j], array10000[i]];
}
//bblSort(tempArr);
//console.log(tempArr);

//bblSort(array1000);
//console.log(array1000);

bblSort(array10000);
console.log(array10000);