var bam = function(){
var score = document.getElementById("score");
var answer = document.getElementById("answer")
var x = "A";
var a = score.value;
var q = 0;
var w = 0;
var magic = /\d+/g;
var z = a.match(magic);



  while (q<z.length) {
    w -= z[q];
  q++}
  w=-w/z.length;


if (w>90){x="A";}
else if (w>80){x="B";}
else if (w>70){x="C";}
else if (w>60){x="D";}
else {x="F"};

w = Math.floor(w);
  
answer.innerHTML = "You got a <span style='color:green;'>" + x + "</span> with an average of <span style='color:green'>" + w + "</span>";}

var dontDoIt = function(){
bam();
score.value="";
return false;

                         };