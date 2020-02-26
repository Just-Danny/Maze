var level= 
[
    ["1","2","3","4","5"],
    ["6","7","8","9","10"],
    ["11","12","13","14","15"],
    ["16","17","18","19","20"]
];



function game()
{
 var player=level[0][0];
 console.log=(player);
 document.body.style.backgroundColor ="blue";
}
var x,y,temp;
temp=0;
function specifickey(event)
{
    x=temp;y=0;
    var z=event.key;
    for( x=0;x<=4;x+=0)
    {
    for( y=0;y<4;y+=0)
    {
        if(z=="D"||z=="d")
    {
        x+=1;
        temp =x;
        
        console.log(level[y][x]);
        x=5;y=5;
    }
        
}
}
}