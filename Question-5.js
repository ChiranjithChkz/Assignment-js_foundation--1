function getChaseVerdict(target, scored, ballsLeft){
    let runsNeeded = target - scored;

    let requiredRate = (runsNeeded / ballsLeft) * 6;


    if(runsNeeded <= 0){
        return "Won";
    }else if(ballsLeft <= 0){
        return "Lost";
    }else{
       if(requiredRate <=6){
           return `"Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable"`;
       }else if(6 < requiredRate < 12){
           return  `"Need ${runsNeeded} runs in ${ballsLeft} balls | Tough"`;
       }
       else {
        return  `"Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible"`;
       }
    }
}

console.log(getChaseVerdict(100,70,12))