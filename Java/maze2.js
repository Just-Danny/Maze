//level2
var level= 
[
    ["1", "wall", "wall", "4", "wall", "6", "7", "8"],
    ["9", "10", "wall", "12", "wall", "14", "15", "16"],
    ["17", "18", "wall", "20", "wall", "wall", "23", "24"],
    ["25", "26", "27", "28", "29", "wall", "31", "32"],
    ["wall", "wall", "wall", "36", "37", "38", "39", "40"],
    ["wall", "42", "43", "44", "45", "46", "wall", "wall"],
    ["wall", "50", "51", "52", "53", "54", "55", "56"],
    ["wall", "58", "59", "60", "61", "62", "63", "64"],
];
//var player=  level[2][2];
//console.log(player);
//var key =false;//Flag
var x,y,temp;
// This has to be changed to the amount of white tiles in the maze.
var winner = 47;
// This also has to be changed to which tile the player will start at.
var player=  level[0][0];
document.getElementById("r1c1").style.backgroundColor="red";
    var Nplayer= player;
    var currentID,currentPosX,currentPosY;
temp=0;
x=0;
y=0;
var life= 3;
function game()
{
 document.getElementById("life").innerHTML ="3 lives";
// This also has to be changed to which tile the player will start at. 
 document.getElementById("r1c1").style.backgroundColor = "red";

var temp2= level[x][y]; 
 document.body.style.backgroundColor ="blue";
//makes walls black
 
   //key = false;
    document.getElementsByName("level2")[0].style.backgroundColor="black";
    document.getElementsByName("level2")[1].style.backgroundColor="black";
    document.getElementsByName("level2")[2].style.backgroundColor="black";
    document.getElementsByName("level2")[3].style.backgroundColor="black";
    document.getElementsByName("level2")[4].style.backgroundColor="black";
    document.getElementsByName("level2")[5].style.backgroundColor="black";
    document.getElementsByName("level2")[6].style.backgroundColor="black";
    document.getElementsByName("level2")[7].style.backgroundColor="black";
    document.getElementsByName("level2")[8].style.backgroundColor="black";
    document.getElementsByName("level2")[9].style.backgroundColor="black";
    document.getElementsByName("level2")[10].style.backgroundColor="black";
    document.getElementsByName("level2")[11].style.backgroundColor="black";
    document.getElementsByName("level2")[12].style.backgroundColor="black";
    document.getElementsByName("level2")[13].style.backgroundColor="black";
    document.getElementsByName("level2")[14].style.backgroundColor="black";
    document.getElementsByName("level2")[15].style.backgroundColor="black";
    document.getElementsByName("level2")[16].style.backgroundColor="black";
    //alert("you hit a wall now you have 1 less life");
       
  if(player == "wall")
  {
      life-=1;
      alert("you hit a wall, lose 1 life");
      document.getElementById("life").innerText= life;
  }
        x=0;
        y=0;
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
        console.log(tag);
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
        console.log(tag);
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
        console.log(tag);
        document.getElementById(tag).style.backgroundColor="red";
        //document.getElementById("player").style.backgroundColor="red";
    }
    //console.log(currentID);
    //console.log(y+""+x);
    if(player == "wall")
  {
      life-=1;
      alert("You hit a wall, you lose 1 life");
      document.getElementById("life").innerText= life;
  }
    if(life==0)
    {
        alert("You lose!");
        location.reload();
    }
    // This has to be changed to where the programmer wants to assign te ending spot to be. To tell the playe that they have won.
    if(player==level[0][7])
    {
        var timer = player;
        // These have to be changed to the number of rows and columns of the maze. 
        for (var a = 1; a <= 8; a++)
    {
        // These have to be changed to the number of rows and columns of the maze. 
        for(var b = 1; b <= 8; b++)
        {
            player=level[a-1][b-1];
            console.log("player"+player)
            var win=player;
            var marker = "r"+b+"c"+a;
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
        alert("You Win!");
    }
    //}
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
}