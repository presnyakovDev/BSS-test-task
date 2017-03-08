var numbers = [];
var number = 1000000;

function getLuckyNumbers() {
  if(String(number).length >= 6){
    for(var i = 0; i < 100; i ++){
      if(number >= 100000){
        var part1, part2, leftPart, rightPart, leftSum, rightSum;
        number = number - 1;
        leftPart = String(number).slice(0,3);
        rightPart = String(number).slice(3,6);
        leftSum = Number(leftPart[0]) + Number(leftPart[1]) + Number(leftPart[2]);
        rightSum = Number(rightPart[0]) + Number(rightPart[1]) + Number(rightPart[2]);
        if(leftSum === rightSum){
          numbers.push(number);
          window.document.getElementById("numbers").innerHTML = numbers;
        }
      }
    }
  }
  else{
    clearTimeout(id);
    console.log("done!")
  }
}


var id = setTimeout(function run() {
  getLuckyNumbers();
  setTimeout(run, 10);
}, 10);
