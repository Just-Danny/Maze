//level1
var level= 
[
    ["wall","2","3","4","5"],
    ["6","7","wall","wall","10"],
    ["11","wall","13","14","15"],
    ["16","wall","18","19","wall"],
    ["21","wall","wall","wall","wall"]
];
//var player=  level[2][2];
//console.log(player);
//var key =false;//Flag
var x,y,temp;
temp=0;
x=0;
y=0;
function game()
{
 document.getElementById("player").style.backgroundColor = "red";

var temp2= level[x][y]; 
 document.body.style.backgroundColor ="blue";
//makes walls black
 if (temp2 == "wall")
        {
   //key = false;
    document.getElementsByName("level1")[0].style.backgroundColor="black";
    document.getElementsByName("level1")[1].style.backgroundColor="black";
    document.getElementsByName("level1")[2].style.backgroundColor="black";
    document.getElementsByName("level1")[3].style.backgroundColor="black";
    document.getElementsByName("level1")[4].style.backgroundColor="black";
    document.getElementsByName("level1")[5].style.backgroundColor="black";
    document.getElementsByName("level1")[6].style.backgroundColor="black";
    document.getElementsByName("level1")[7].style.backgroundColor="black";
    document.getElementsByName("level1")[8].style.backgroundColor="black";
    document.getElementsByName("level1")[9].style.backgroundColor="black";
        }
}
 //var x,y,temp3;
 //temp3=0;

function specifickey(event)
{
    var player=  level[2][2];
    var Nplayer= player;
    console.log("player:"+player)
    console.log("x"+x+"y"+y);

    var z=event.key;
    for( var x=0;x<=4;x+=1)
    {
    for( var y=0;y<=4;y+=1)
        {
        if(z=="D"||z=="d")
            {
        y+=0;
        x+=0;
        console.log(level[y][x]);
        
            }
        
        }
    }
}
