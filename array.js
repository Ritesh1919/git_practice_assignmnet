//  I am unable to find the count of all prime numbers presnent inside the array

let count = 0;
let num = 12;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log("Yes");
} else {
  console.log("No");
}
// console.log("ritesh");
