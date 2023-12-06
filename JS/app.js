function enviarDatos() {
  let dado1, dado2, total;
  
  
  
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;
  total = dado1 + dado2;
  document.getElementsByName(`Dado1`)[0].value = ` ${dado1}`;
  document.getElementsByName(`Dado2`)[0].value = ` ${dado2}`;
  document.getElementsByName(`totalDados`)[0].value = ` ${total}`;
  if (dado1 == 1 ){
   document.getElementById("imagen1").src ="images/dice1.jpg";}

  if (dado1 == 2){
  document.getElementById("imagen1").src ="images/dice2.jpg";
 }

 if (dado1 == 3){
  document.getElementById("imagen1").src ="images/dice3.jpg";
 }

if (dado1 == 4){
document.getElementById("imagen1").src ="images/dice4.jpg";
 }

if (dado1 == 5){
document.getElementById("imagen1").src ="images/dice5.jpg";
 }
if (dado1 == 6){
 document.getElementById("imagen1").src ="images/dice6.jpg";
  }
            
          
        
      
if (dado2 == 1 ){
document.getElementById("imagen2").src ="images/dice1.jpg";}

if (dado2 == 2 ){
document.getElementById("imagen2").src ="images/dice2.jpg";}

if (dado2 == 3 ){
document.getElementById("imagen2").src ="images/dice3.jpg";}
if (dado2 == 4 ){
document.getElementById("imagen2").src ="images/dice4.jpg";}
if (dado2 == 5 ){
document.getElementById("imagen2").src ="images/dice5.jpg";}
if (dado2 == 6 ){
document.getElementById("imagen2").src ="images/dice6.jpg";}

}

