//level2
var level= 
[
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "8", "9", "wall", "wall", "wall"],
    ["13", "14", "15", "16", "17", "wall", "19", "20", "21", "22", "wall", "wall"],
    ["25", "26", "wall", "wall", "29", "30", "31", "wall", "wall", "34", "35", "wall"],
    ["37", "38", "wall", "wall", "wall", "42", "43", "44", "wall", "wall", "47", "48"],
    ["49", "50", "wall", "wall", "wall", "54", "55", "56", "57", "wall", "wall", "60"],
    ["wall", "62", "63", "64", "65", "wall", "wall", "wall", "69", "70", "71", "72"],
    ["wall", "wall", "75", "76", "77", "wall", "79", "wall", "81", "82", "83", "84"],
    ["wall", "86", "87", "88", "wall", "wall", "91", "wall", "wall", "wall", "wall", "96"],
    ["wall", "98", "99", "wall", "wall", "wall", "103", "104", "105", "106", "wall", "108"],
    ["wall", "wall", "111", "112", "wall", "wall", "wall", "wall", "wall", "118", "wall", "120"],
    ["wall", "wall", "wall", "124", "125", "wall", "127", "wall", "wall", "130", "131", "132"],
    ["wall", "wall", "wall", "wall", "137", "138", "139", "wall", "wall", "wall", "143", "144"]
];
//var player=  level[2][2];
//console.log(player);
//var key =false;//Flag
var x,y,temp;
var winner = 76;
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
document.getElementById("r1c1").style.backgroundColor = "red";

var temp2= level[x][y]; 
 document.body.style.backgroundColor ="blue";
//makes walls black
 
   //key = false;
    document.getElementsByName("level3")[0].style.backgroundColor="black";
    document.getElementsByName("level3")[1].style.backgroundColor="black";
    document.getElementsByName("level3")[2].style.backgroundColor="black";
    document.getElementsByName("level3")[3].style.backgroundColor="black";
    document.getElementsByName("level3")[4].style.backgroundColor="black";
    document.getElementsByName("level3")[5].style.backgroundColor="black";
    document.getElementsByName("level3")[6].style.backgroundColor="black";
    document.getElementsByName("level3")[7].style.backgroundColor="black";
    document.getElementsByName("level3")[8].style.backgroundColor="black";
    document.getElementsByName("level3")[9].style.backgroundColor="black";
    document.getElementsByName("level3")[10].style.backgroundColor="black";
    document.getElementsByName("level3")[11].style.backgroundColor="black";
    document.getElementsByName("level3")[12].style.backgroundColor="black";
    document.getElementsByName("level3")[13].style.backgroundColor="black";
    document.getElementsByName("level3")[14].style.backgroundColor="black";
    document.getElementsByName("level3")[15].style.backgroundColor="black";
    document.getElementsByName("level3")[16].style.backgroundColor="black";
    document.getElementsByName("level3")[17].style.backgroundColor="black";
    document.getElementsByName("level3")[18].style.backgroundColor="black";
    document.getElementsByName("level3")[19].style.backgroundColor="black";
    document.getElementsByName("level3")[20].style.backgroundColor="black";
    document.getElementsByName("level3")[21].style.backgroundColor="black";
    document.getElementsByName("level3")[22].style.backgroundColor="black";
    document.getElementsByName("level3")[23].style.backgroundColor="black";
    document.getElementsByName("level3")[24].style.backgroundColor="black";
    document.getElementsByName("level3")[25].style.backgroundColor="black";
    document.getElementsByName("level3")[26].style.backgroundColor="black";
    document.getElementsByName("level3")[27].style.backgroundColor="black";
    document.getElementsByName("level3")[28].style.backgroundColor="black";
    document.getElementsByName("level3")[29].style.backgroundColor="black";
    document.getElementsByName("level3")[30].style.backgroundColor="black";
    document.getElementsByName("level3")[31].style.backgroundColor="black";
    document.getElementsByName("level3")[32].style.backgroundColor="black";
    document.getElementsByName("level3")[33].style.backgroundColor="black";
    document.getElementsByName("level3")[34].style.backgroundColor="black";
    document.getElementsByName("level3")[35].style.backgroundColor="black";
    document.getElementsByName("level3")[36].style.backgroundColor="black";
    document.getElementsByName("level3")[37].style.backgroundColor="black";
    document.getElementsByName("level3")[38].style.backgroundColor="black";
    document.getElementsByName("level3")[39].style.backgroundColor="black";
    document.getElementsByName("level3")[40].style.backgroundColor="black";
    document.getElementsByName("level3")[41].style.backgroundColor="black";
    document.getElementsByName("level3")[42].style.backgroundColor="black";
    document.getElementsByName("level3")[43].style.backgroundColor="black";
    document.getElementsByName("level3")[44].style.backgroundColor="black";
    document.getElementsByName("level3")[45].style.backgroundColor="black";
    document.getElementsByName("level3")[46].style.backgroundColor="black";
    document.getElementsByName("level3")[47].style.backgroundColor="black";
    document.getElementsByName("level3")[48].style.backgroundColor="black";
    document.getElementsByName("level3")[49].style.backgroundColor="black";
    document.getElementsByName("level3")[50].style.backgroundColor="black";
    document.getElementsByName("level3")[51].style.backgroundColor="black";
    document.getElementsByName("level3")[52].style.backgroundColor="black";
    document.getElementsByName("level3")[53].style.backgroundColor="black";
    document.getElementsByName("level3")[54].style.backgroundColor="black";
    document.getElementsByName("level3")[55].style.backgroundColor="black";
    document.getElementsByName("level3")[56].style.backgroundColor="black";
    document.getElementsByName("level3")[57].style.backgroundColor="black";
    document.getElementsByName("level3")[58].style.backgroundColor="black";
    document.getElementsByName("level3")[59].style.backgroundColor="black";
    document.getElementsByName("level3")[60].style.backgroundColor="black";
    document.getElementsByName("level3")[61].style.backgroundColor="black";
    document.getElementsByName("level3")[62].style.backgroundColor="black";
    document.getElementsByName("level3")[63].style.backgroundColor="black";
    document.getElementsByName("level3")[64].style.backgroundColor="black";
    document.getElementsByName("level3")[65].style.backgroundColor="black";
    document.getElementsByName("level3")[66].style.backgroundColor="black";
    document.getElementsByName("level3")[67].style.backgroundColor="black";
    document.getElementsByName("level3")[68].style.backgroundColor="black";
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
    if(player==level[6][6])
    {
        var timer = player;
        for (var a = 1; a <= 12; a++)
    {
        for(var b = 1; b <= 12; b++)
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