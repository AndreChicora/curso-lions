let nums = [5, 12, 8, 20, 3, 15, 7, 11];

let contador = 0;

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 10){
        contador++
    }
}
console.log("quantidades de numeros maiores que 10 ",contador);