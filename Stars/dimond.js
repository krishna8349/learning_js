var n = 5;

var first_half =  Math.ceil(n/2);
var second_half = Math.floor(n/2);

console.log(first_half);
console.log(second_half);

var first_half_star = 1;
var first_half_space = first_half-1;

for(var i=0;i<first_half;i++){
    console.log(" ".repeat(first_half_space) + "*".repeat(first_half_star));
    first_half_star += 2;
    first_half_space --;
}

var second_half_star = second_half +1;
var second_half_space = 1;
for(var i=0;i<second_half;i++){
    console.log(" ".repeat(second_half_space) + "*".repeat(second_half_star));
    second_half_star -= 2;
    second_half_space += 1;
}