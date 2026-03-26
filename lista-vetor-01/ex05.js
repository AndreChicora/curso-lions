let nums = [10, 25, 7, 89, 32, 14];

let maior = nums[0];
for(let i = 1; i < nums.length; i++){
    if(nums[i] > maior){
        maior = nums[i];
    }
}

console.log("maior valor ", maior);