var n=4;
var star = n + (n-1);
var space = 0;

for(var i=0;i<n;i++){
    console.log(" ".repeat(space) + "*".repeat(star));
    space += 1;
    star -= 2;
}