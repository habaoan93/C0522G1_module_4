function fibonacci(number: number): number {
    if (number == 1 || number == 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
let sum:number = 0;
let count : number = 1;
while (count< 30){
    sum+= fibonacci((count));
    console.log(fibonacci(count));
    count++;
}
console.log(sum);