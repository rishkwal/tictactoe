 //yaha pe get element by id karna aur onclick wale function me appendchild karke O ya x ghusana
    /*var crossElement = document.createElement('h1');
    var cross = document.createTextNode("x");
    crossElement.appendChild(cross);
    var circle = document.createTextNode("o");
    var circleElement = document.createElement('h1');
    circleElement.appendChild(circle);*/
    var moveCount = 0;
    var boxNumArray = new Array();
    var clickCount = 0;
    var boxContent = new Array();
    for(var j=0;j<10;j++)
    {
      boxContent[j] = Math.random()
    }
    var win = 0;
    
    function MadeChoice(boxNum){
      console.log(clickCount);
      if(win==0){
        
      var match = 0;
      for(var i=0; i<clickCount; i++)
      {
        if(boxNumArray[i]==boxNum)
        { 
          match=1;
        }
      }
      if(match==0){

      boxNumArray[clickCount] = boxNum;
      clickCount++;
      moveCount++;
      
      var boxElement = document.getElementById(boxNum);
      if(moveCount%2 == 0){
var circle = document.createTextNode("o");
    var circleElement = document.createElement('h1');
    circleElement.appendChild(circle);
    
      
        boxElement.appendChild(circleElement);
        console.log(moveCount);
        boxContent[boxNum] = 1;
      }
      else
      {
var crossElement = document.createElement('h1');
    var cross = document.createTextNode("x");
    crossElement.appendChild(cross);
        
        boxElement.appendChild(crossElement);
        boxContent[boxNum] = 0;
        console.log(boxContent);
      }
      if(boxContent[1]==boxContent[2]&&boxContent[2]==boxContent[3])
      {
        var dec = document.getElementById("declaration");
        if(boxContent[1]==0)
          var winText = document.createTextNode("X Wins!");
        else
        var winText = document.createTextNode("O Wins!");
        
        var winTextEle = document.createElement('h1');
        winTextEle.appendChild(winText);
        declaration.appendChild(winTextEle);
        document.getElementById("1").style.background = "green";
        document.getElementById("2").style.background = "green";
        document.getElementById("3").style.background = "green";
        win++;
      }
else if(boxContent[4]==boxContent[5]&&boxContent[5]==boxContent[6])
      {
        
var dec = document.getElementById("declaration");
        if(boxContent[4]==0)
          var winText = document.createTextNode("X Wins!");
        else
        var winText = document.createTextNode("O Wins!");
        
        var winTextEle = document.createElement('h1');
        winTextEle.appendChild(winText);
        declaration.appendChild(winTextEle);
        
document.getElementById("4").style.background = "green";
        document.getElementById("5").style.background = "green";
        document.getElementById("6").style.background = "green";
        win++;
      }
else if(boxContent[7]==boxContent[8]&&boxContent[8]==boxContent[9])
      {
        var dec = document.getElementById("declaration");
        if(boxContent[7]==0)
          var winText = document.createTextNode("X Wins!");
        else
        var winText = document.createTextNode("O Wins!");
        
        var winTextEle = document.createElement('h1');
        winTextEle.appendChild(winText);
        declaration.appendChild(winTextEle);
        
document.getElementById("7").style.background = "green";
        document.getElementById("8").style.background = "green";
        document.getElementById("9").style.background = "green";
        win++;
      }
else if(boxContent[1]==boxContent[4]&&boxContent[4]==boxContent[7])
      {
       var dec = document.getElementById("declaration");
        if(boxContent[1]==0)
          var winText = document.createTextNode("X Wins!");
        else
        var winText = document.createTextNode("O Wins!");
        
        var winTextEle = document.createElement('h1');
        winTextEle.appendChild(winText);
        declaration.appendChild(winTextEle);
        document.getElementById("1").style.background = "green";
        document.getElementById("4").style.background = "green";
        document.getElementById("7").style.background = "green";
        win++;
      }
 else if(boxContent[2]==boxContent[5]&&boxContent[5]==boxContent[8])
      {
        var dec = document.getElementById("declaration");
        if(boxContent[2]==0)
          var winText = document.createTextNode("X Wins!");
        else
        var winText = document.createTextNode("O Wins!");
        
        var winTextEle = document.createElement('h1');
        winTextEle.appendChild(winText);
        declaration.appendChild(winTextEle);
        document.getElementById("2").style.background = "green";
        document.getElementById("5").style.background = "green";
        document.getElementById("8").style.background = "green";
        win++;
      }
else if(boxContent[3]==boxContent[6]&&boxContent[6]==boxContent[9])
      {
        var dec = document.getElementById("declaration");
        if(boxContent[3]==0)
          var winText = document.createTextNode("X Wins!");
        else
        var winText = document.createTextNode("O Wins!");
        ;
        var winTextEle = document.createElement('h1');
        winTextEle.appendChild(winText);
        declaration.appendChild(winTextEle);
        document.getElementById("3").style.background = "green";
        document.getElementById("6").style.background = "green";
        document.getElementById("9").style.background = "green";
        win++;
      }
else if(boxContent[1]==boxContent[5]&&boxContent[5]==boxContent[9])
      {
        var dec = document.getElementById("declaration");
      
        if(boxContent[1]==0)
          var winText = document.createTextNode("X Wins!");
        else
        var winText = document.createTextNode("O Wins!");
        
        var winTextEle = document.createElement('h1');
        winTextEle.appendChild(winText);
        declaration.appendChild(winTextEle);
        console.log("win");
        document.getElementById("1").style.background = "green";
        document.getElementById("5").style.background = "green";
        document.getElementById("9").style.background = "green";
        win++;
      }
else if(boxContent[3]==boxContent[5]&&boxContent[5]==boxContent[7])
      {
        var dec = document.getElementById("declaration");
if(boxContent[3]==0)
          var winText = document.createTextNode("X Wins!");
        else
        var winText = document.createTextNode("O Wins!");
        
        var winTextEle = document.createElement('h1');
        winTextEle.appendChild(winText);
        declaration.appendChild(winTextEle);
        document.getElementById("3").style.background = "green";
        document.getElementById("5").style.background = "green";
        document.getElementById("7").style.background = "green";
        win++;
      }
      
      }
      else
      {
        console.log("already selected");
      }
      }
      else
      {
        alert("Game Over");
      }
if(clickCount==9 && win ==0)
{
  var dec = document.getElementById("declaration");
  var drawText = document.createTextNode("It's a draw!");
  var drawTextEle = document.createElement('h1');
  drawTextEle.appendChild(drawText);
  dec.appendChild(drawTextEle);
  clickCount++;
  
}
    }