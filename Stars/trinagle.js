var n = 4;
var star = 1;
var space = n-1;

for(i=0;i<4;i++){
    console.log(" ".repeat(space)+ "*".repeat(star));
    space--;
    star += 2;   
}
