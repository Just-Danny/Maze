var level= 
[
    ["wall","2","3","4","5"],
    ["6","7","wall","wall","10"],
    ["11","wall","13","14","15"],
    ["16","wall","18","19","wall"],
    ["21","wall","wall","wall","wall"]
];
//var player=  level[y][x];

var x,y,temp;
temp=0;
x=0;
y=0;
function game()
{
var temp2= level[y][x]; 
 document.body.style.backgroundColor ="blue";
//makes walls black
 //for( x=0;x<=4;x++)
    //{
        //for(y=0;y<=4;y++)
            //{
 if (temp2 == "wall")
        {
    document.getElementsByName("level1")[0].style.backgroundColor="black";
    document.getElementsByName("level1")[1].style.backgroundColor="black";
    document.getElementsByName("level1")[2].style.backgroundColor="black";
    document.getElementsByName("level1")[3].style.backgroundColor="black";
    document.getElementsByName("level1")[4].style.backgroundColor="black";
    document.getElementsByName("level1")[5].style.backgroundColor="black";
    document.getElementsByName("level1")[6].style.backgroundColor="black";
    document.getElementsByName("level1")[7].style.backgroundColor="black";
    document.getElementsByName("level1")[8].style.backgroundColor="black";
        }
            //}
    //}
}
var x,y,temp;
temp=0;

function specifickey(event)
{
    x=temp;y=0;
    var z=event.key;
    for( x=0;x<=4;x+=1)
    {
    for( y=0;y<=4;y+=0)
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

