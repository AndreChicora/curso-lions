let a = [1,2,3,4,5,6];
let b = [6,5,4,,3,2,1];

for(let i = 0; i < a.length; i++){
    b[i] = a[a.length-1-i];
}
console.log("Array A",a);
console.log("Array B (invertido)",b);