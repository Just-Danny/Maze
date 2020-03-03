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
var player=  level[2][2];
    var Nplayer= player;
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
        x=2;
        y=2;
}
 //var x,y,temp3;
 //temp3=0;

function specifickey(event)
{
    
    //console.log("player:"+player)
    //console.log("x"+x+"y"+y);

    var z=event.key;
    if(z=="D"||z=="d")
            {
        y+=0;
        x+=1;
        //console.log(player);
        player= level[y][x];
        console.log(player);
        var tag = "r" +x+ "c"+y;
        currentID = x.id;
        currentPosX = currentId[2];
        currentPosY = currentId[4];
        document.getElementById(tag).style.backgroundColor="red";
            }
    else if(z=="A" || z=="a")
    {
        y+=0;
        x-=1;
        player= level[y][x];
        console.log(player);
        //document.getElementById().style.backgroundColor="red";
    }
    else if(z=="W" || z=="w")
    {
        y-=1;
        x+=0;
        player= level[y][x];
        console.log(player);
        //document.getElementById("player").style.backgroundColor="red";
    }
    else if(z=="S" || z=="s")
    {
        y+=1;
        x+=0;
        player= level[y][x];
        console.log(player);
        //document.getElementById("player").style.backgroundColor="red";
    }
}
