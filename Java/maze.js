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
    var currentID,currentPosX,currentPosY;
temp=0;
x=0;
y=0;
var life= 3;
function game()
{
 document.getElementById("life").innerHTML ="3 lives";
 document.getElementById("r3c3").style.backgroundColor = "red";

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
    //alert("you hit a wall now you have 1 less life");
        }
  if(player == "wall")
  {
      life-=1;
      alert("you hit a wall, lose 1 life");
      document.getElementById("life").innerText= life;
  }
        x=2;
        y=2;
}
 //var x,y,temp3;
 //temp3=0;
var xx,yy;
function specifickey(event)
{
    
    var z=event.key;
    if(z=="D"||z=="d")
            {
        y+=0;
        x+=1;
        //console.log(player);
        player= level[y][x];
        console.log(player);
        xx=x+1;
        yy=y+1;
        var tag ="r"+yy+"c"+xx;
        console.log(tag);
        document.getElementById(tag).style.backgroundColor="red";
            }
    else if(z=="A" || z=="a")
    {
        y+=0;
        x-=1;
        xx=x+1;
        yy=y+1;
        var tag ="r"+yy+"c"+xx;
        player= level[y][x];
        console.log(player);
        document.getElementById(tag).style.backgroundColor="red";
        //document.getElementById().style.backgroundColor="red";
    }
    else if(z=="W" || z=="w")
    {
        y-=1;
        x+=0;
        xx=x+1;
        yy=y+1;
        var tag ="r"+yy+"c"+xx;
        player= level[y][x];
        console.log(player);
        document.getElementById(tag).style.backgroundColor="red";
        //document.getElementById("player").style.backgroundColor="red";
    }
    else if(z=="S" || z=="s")
    {
        y+=1;
        x+=0;
        xx=x+1;
        yy=y+1;
        var tag ="r"+yy+"c"+xx;
        player= level[y][x];
        console.log(player);
        document.getElementById(tag).style.backgroundColor="red";
        //document.getElementById("player").style.backgroundColor="red";
    }
    console.log(currentID);
    console.log(y+""+x);
    if(player == "wall")
  {
      life-=1;
      alert("you hit a wall, lose 1 life");
      document.getElementById("life").innerText= life;
  }
    if(life==0)
    {
        alert("you lose!");
        location.reload();
    }
   /* for (a=0;x<5;x++)
    {
        for(b=0;y<5;y++)
        {
            player=level[b][a];
            var win=player;
            var marker = "r"+y+"c"+x;
            var temper =document.getElementById(marker).style.backgroundColor;
            if(win != "wall" && temper =="white")
            {
                alert("you Win");
            }
        }
    }*/
}

 function identify(x)
 {
    var tag = "r" +x+ "c"+y;
    currentID = tag.id;
    currentPosX = currentID[1];
    currentPosY = currentID[3];
    //console.log(currentID);
    document.getElementById(tag).style.backgroundColor="red";
 }