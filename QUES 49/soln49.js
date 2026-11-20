let numbers=process.argv.slice(2).map(Number);
let max=numbers[0];
let min=numbers[0];
let sum=0;
for(let i=0;i<numbers.length;i++){
if(numbers[i]>max){
max=numbers[i];
}
if(numbers[i]<min){
min=numbers[i];
}
sum=sum+numbers[i];
}
let average=sum/numbers.length;
console.log("Maximum number is:",max);
console.log("Minimum number is:",min);
console.log("Average is:",average);