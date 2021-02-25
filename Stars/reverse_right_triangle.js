var k=5;
star = k;
var space = 0 ;

for(var i=0;i<k;i++){
    console.log(" ".repeat(space) + "*".repeat(star))
    star--;
    space++;
}