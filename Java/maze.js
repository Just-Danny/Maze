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
var winner =15;
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
function checkWinner()
{
    
}
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
<<<<<<< Updated upstream
        xx=x+1;
        yy=y+1;
        var tag ="r"+yy+"c"+xx;
        console.log(tag);
        document.getElementById(tag).style.backgroundColor="red";
=======
        // document.player.backgroundColor="red";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        console.log(tag);
        document.getElementById(tag).style.backgroundColor="red";
        //document.getElementById().style.backgroundColor="red";
=======
        // document.player.backgroundColor="red";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        console.log(tag);
        document.getElementById(tag).style.backgroundColor="red";
        //document.getElementById("player").style.backgroundColor="red";
=======
        // document.player.style.backgroundColor="red";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        console.log(tag);
        document.getElementById(tag).style.backgroundColor="red";
        //document.getElementById("player").style.backgroundColor="red";
=======
        // document.player.b.style.backgroundColor="red";
>>>>>>> Stashed changes
    }
    //console.log(currentID);
    //console.log(y+""+x);
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
    if(player==level[4][0])
    {
        var timer = player;
        for (var a=1;a<6;a++)
    {
        for(var b=1;b<6;b++)
        {
            player=level[a-1][b-1];
            console.log("player"+player)
            var win=player;
            var marker = "r"+a+"c"+b;
            console.log("marker"+win);
            var temper =document.getElementById(marker).style.backgroundColor;
            
            
            
           
            if(temper == "red")
            {
                winner -= 1;
            }
        }
        
    }
    win = timer;
    console.log("winner"+winner);
    console.log("player"+player);
    if(win != "wall" && winner ==0)
    {
        alert("you Win");
    }
    }
    /*
    for (var a=1;a<=6;a++)
    {
        for(var b=1;b<6;b++)
        {
            player=level[a-1][b-1];
            var win=player;
            var marker = "r"+a+"c"+b;
            console.log(marker);
            var temper =document.getElementById(marker).style.backgroundColor;
            
            console.log(winner);
            if(win != "wall" && winner ==0)
            {
                alert("you Win");
            }
            if(temper == "red")
            {
                winner -= 1;
                break;break;
            }
        }
    }
    */
}

 function identify(x)
 {
    var tag = "r" +x+ "c"+y;
    currentID = tag.id;
    currentPosX = currentID[1];
    currentPosY = currentID[3];
    console.log(currentID);
    document.getElementById(tag).style.backgroundColor="red";
 }