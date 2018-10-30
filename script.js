const GAMES_TO_PLAY = 10;

//byrjar ballid
function start() {
  let result = confirm("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er");
  if (result == true) {
    play();
  } 
}

//heldur utan um leikinn
function play() {
  let startTime = new Date();//timinn nuna
  let answerCount = 0;
  let correctAnswerCount = 0;

  //keyrum leikinn
  for (let i = 0; i < GAMES_TO_PLAY; i++) {
    let question = ask();
    if (question == true) {
      correctAnswerCount++;
      answerCount++;
    } else if (question == null) {
      break;
    } else {
      answerCount++;
    }
  }
  
  //latum spilara vita hvernig honum gekk
  if (answerCount == 10) {
    let totalTime = ((new Date())-startTime)/1000;
    let averageTime = totalTime/10;
    let endTime = new Date();
    alert(`Thu svaradir ${correctAnswerCount} af 10 rett a ${totalTime} sekundum\nMedaltimi thinn var ${averageTime}`);

    let result = confirm("Villtu spila aftur?");
    if (result == true) {
      play();
    }
  }
  
}

// spyr spurningar
function ask() {
  let question = problem(randomNumber(1,4));
  let answer = question[3];
  let result = prompt(`${question[0]} ${question[1]} ${question[2]} = ?`);
  if (Number(result) == answer) {
    return true;
  } else if (result == null) { 
    return;
  } else {
    return false;
  }
}

// byr til random stae spurningu
// 1 fyrir samlagning, 2 fyrir fradratt, osfrv..
function problem(rand) {
  if (rand == 1) {
    let sign= '+';
    let num1 = randomNumber(1,100);
    let num2 = randomNumber(1,100);
    let answer = num1+num2;
    return [num1,sign,num2,answer];
  } else if (rand == 2) {
    let sign= '-';
    let num1 = randomNumber(1,100);
    let num2 = randomNumber(1,100);
    let answer = num1-num2;
    return [num1,sign,num2,answer];
  } else if (rand == 3) {
    let sign= '*';
    let num1 = randomNumber(1,10);
    let num2 = randomNumber(1,10);
    let answer = num1*num2;
    return [num1,sign,num2,answer];
  } else {
    let sign= '/';
    let num1 = randomNumber(2,10);
    let num2 = num1*randomNumber(2,10);
    let answer = num2/num1;
    return [num2,sign,num1,answer];
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();
