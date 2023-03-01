//1. Design a method to delete the element at a particular index. 

let array1 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
let index = prompt("Enter the index : ");
delete (array1[index]);
console.log(array1);
document.write(array1);

let length = prompt("Enter the index : ");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let store = [];
let s = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] !== array[length]) {
        store[s] = array[i];
        s++;
    }
}
console.log(store);