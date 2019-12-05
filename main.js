
let min=1; let max=6; //max is 6 because when 5 it doesnt pick up to 5 so i incremented by 1 :)
let randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;; // First Bot
let randomNumberA = Math.floor(Math.random() * (+max - +min)) + +min;; //2nd Bot
var playerPick = 0; 
var pScore = 0;//kester
var Bot1Score = 0;
var Bot2Score = 0;
var amntplay = 0;
var playerwinp= 0;
var cpu1p = 0;
var cpu2p = 0;
var rockpick = 0;
var paperpick = 0;
var scissorspick = 0;
var lizardpick = 0;
var spockpick = 0;
document.getElementById("statitable").innerHTML = ("STATISTICS");   

document.getElementById("message").innerHTML = ("SCORE:  " + pScore);   
document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   
document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   
document.getElementById("pickrecord").innerHTML = ("Amount of times Played:  " + amntplay);   
document.getElementById("playerwinp").innerHTML = ("Your Winning :  " + playerwinp + "%");   
document.getElementById("cpu1p").innerHTML = ("CPU1 Winning :  " + cpu1p + "%");   
document.getElementById("cpu2p").innerHTML = ("CPU2 Winning :  " + cpu2p + "%");   


playerwinp = ((pScore/amntplay)*100)
cpu1p = ((Bot1Score/amntplay)*100)
playerwinp = ((Bot2Score/amntplay)*100)




function randomCaller()
{
    console.log(randomNumber)
    console.log(randomNumberA)
    randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;;
    randomNumberA = Math.floor(Math.random() * (+max - +min)) + +min;; //2nd Bot


}
console.log(randomNumber)
console.log(randomNumberA)




function Calculator()
{
  document.getElementById("MathNumberOne").innerHTML = ("Rock Residual: " + ((amntplay-80)-rockpick));

}

function PickedR()
{
    
if (randomNumber === 3 || randomNumber === 4 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore);    
    console.log(pScore)
 
} else if (randomNumberA === 3 || randomNumberA === 4 ) {  
    
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore);    
   
  }else

  if (randomNumber === 2 || randomNumber === 5 ) {
    
    Bot1Score ++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);    
  
 
} if (randomNumberA === 2 || randomNumberA === 5 ) {  
     Bot2Score ++;
     document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);        
}else
pScore;
amntplay++;
rockpick++;
cpu1p = ((Bot1Score/amntplay)*100)
cpu2p = ((Bot2Score/amntplay)*100)
playerwinp = ((pScore/amntplay)*100)
rockresidual = (amntplay-80)
document.getElementById("MathNumberOne").innerHTML = ("Rock Residual: " + (rockpick-20));
document.getElementById("cpu1p").innerHTML = ("CPU1 Winning :  " + cpu1p + "%");   
document.getElementById("cpu2p").innerHTML = ("CPU2 Winning :  " + cpu2p + "%");   
document.getElementById("playerwinp").innerHTML = ("Your Winning :  " + playerwinp + "%");   


document.getElementById("pickrecord").innerHTML = ("Amount of times Played:  " + amntplay);   


console.log(pScore)
  
  BOTvBOT()

}


function PickedP()
{
if (randomNumber === 1 || randomNumber === 5 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore);  
   
    console.log(pScore)
 
} else if (randomNumberA === 1 || randomNumberA === 5 ) {  
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
     
      console.log(pScore)
   
  }if (randomNumber === 3 || randomNumber === 4 ) {
     

    Bot1Score ++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   
   
    console.log(Bot1Score)
 
} if (randomNumberA === 3 || randomNumberA === 4 ) {  
     Bot2Score ++;
     document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   

      console.log(Bot2Score)
}else


  pScore;
  amntplay++;
  paperpick++;
  paperresidual = (amntplay-80) 
document.getElementById("MathNumberTwo").innerHTML = ("Paper Residual: " + (paperpick-20));
  cpu1p = ((Bot1Score/amntplay)*100)
cpu2p = ((Bot2Score/amntplay)*100)
playerwinp = ((pScore/amntplay)*100)
document.getElementById("cpu1p").innerHTML = ("CPU1 Winning :  " + cpu1p + "%");   
document.getElementById("cpu2p").innerHTML = ("CPU2 Winning :  " + cpu2p + "%");   
document.getElementById("playerwinp").innerHTML = ("Your Winning :  " + playerwinp + "%");   

document.getElementById("pickrecord").innerHTML = ("Amount of times Played:  " + amntplay);   
  console.log(pScore)
  randomCaller()
  BOTvBOT()
    

}
function PickedS()
{
if (randomNumber === 2 || randomNumber === 4 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
    console.log(pScore)
 
} else if (randomNumberA === 2 || randomNumberA === 4 ) {  
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
      console.log(pScore)
   
  }if (randomNumber === 3 || randomNumber === 4 ) {
       
    Bot1Score ++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);    
   
    console.log(Bot1Score)
 
} if (randomNumberA === 3 || randomNumberA === 4 ) {  
     Bot2Score ++;
     document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   

      console.log(Bot2Score)
}else


  pScore;
  scissorspick++;
  scissorsresidual = (amntplay-80)
document.getElementById("MathNumberThree").innerHTML = ("Scissors Residual: " + (scissorspick-20));
  cpu1p = ((Bot1Score/amntplay)*100)
cpu2p = ((Bot2Score/amntplay)*100)
playerwinp = ((pScore/amntplay)*100)
document.getElementById("cpu1p").innerHTML = ("CPU1 Winning :  " + cpu1p + "%");   
document.getElementById("cpu2p").innerHTML = ("CPU2 Winning :  " + cpu2p + "%");   
document.getElementById("playerwinp").innerHTML = ("Your Winning :  " + playerwinp + "%");   

  amntplay++;
document.getElementById("pickrecord").innerHTML = ("Amount of times Played:  " + amntplay);   
  console.log(pScore)
  randomCaller()
  BOTvBOT()
    

}
function PickedL()
{
if (randomNumber === 2 || randomNumber === 5 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
    console.log(pScore)
 
} else if (randomNumberA === 2 || randomNumberA === 5 ) {  
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
      console.log(pScore)
   
    }if (randomNumber === 3 || randomNumber === 4 ) {
        

        Bot1Score ++;
        document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);    
       
        console.log(Bot1Score)
     
    } if (randomNumberA === 3 || randomNumberA === 4 ) {  
         Bot2Score ++;
         document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   

          console.log(Bot2Score)
    }else
    
    
      pScore;
      lizardpick++;
      document.getElementById("MathNumberFour").innerHTML = ("Lizard Residual: " + (lizardpick-20));

      cpu1p = ((Bot1Score/amntplay)*100)
cpu2p = ((Bot2Score/amntplay)*100)
playerwinp = ((pScore/amntplay)*100)
document.getElementById("cpu1p").innerHTML = ("CPU1 Winning :  " + cpu1p + "%");   
document.getElementById("cpu2p").innerHTML = ("CPU2 Winning :  " + cpu2p + "%");   
document.getElementById("playerwinp").innerHTML = ("Your Winning :  " + playerwinp + "%");   

      amntplay++;
document.getElementById("pickrecord").innerHTML = ("Amount of times Played:  " + amntplay);   
      console.log(pScore)
      randomCaller()
      BOTvBOT()
        
    
}
function PickedK()
{
if (randomNumber === 1 || randomNumber === 3 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
    console.log(pScore)
 
} else if (randomNumberA === 1 || randomNumberA === 3 ) {  
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
      console.log(pScore)
   
    }else if (randomNumber === 3 || randomNumber === 4 ) {
         

        Bot1Score ++;
        document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);    
       
        console.log(Bot1Score)
      
    }else if (randomNumberA === 3 || randomNumberA === 4 ) {  
         Bot2Score ++;
         document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   

          console.log(Bot2Score)
    }else
    
    amntplay++;
    spockpick++;
    document.getElementById("MathNumberFive").innerHTML = ("Spock Residual: " + (spockpick-20));

document.getElementById("pickrecord").innerHTML = ("Amount of times Played:  " + amntplay);   
      pScore;
      cpu1p = ((Bot1Score/amntplay)*100)
cpu2p = ((Bot2Score/amntplay)*100)
playerwinp = ((pScore/amntplay)*100)
document.getElementById("cpu1p").innerHTML = ("CPU1 Winning :  " + cpu1p + "%");   
document.getElementById("cpu2p").innerHTML = ("CPU2 Winning :  " + cpu2p + "%");   
document.getElementById("playerwinp").innerHTML = ("Your Winning :  " + playerwinp + "%");   

      console.log(pScore)
      randomCaller()
      BOTvBOT()
        
}

function BOTvBOT()
{
{
  if (randomNumberA === 3 || 4 && randomNumber === 1) {
  Bot1Score++;

  console.log(Bot1Score)

  document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   
}else
 if (randomNumberA === 1 || 5 && randomNumber === 2){
    Bot1Score++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   


}else
if (randomNumberA === 2 || 4 && randomNumber === 3){
  Bot1Score++;
  document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);  
  
}else
if (randomNumberA === 2 || 5 && randomNumber === 4){
  Bot1Score++;
  document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   
}else
  if (randomNumberA === 1 || 3 && randomNumber === 5){
    Bot1Score++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   

}else
Bot2Score++;
console.log(pScore)
  randomCaller()
}
}






