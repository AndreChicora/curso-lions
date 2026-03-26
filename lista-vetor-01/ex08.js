let nums = [10,3,,8,5,12,7,6,9];

let soma = 0;

for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
        soma += nums[i];
    }
}
console.log("soma dos pares ", soma);