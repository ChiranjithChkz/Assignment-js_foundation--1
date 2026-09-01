
function getCngFare(distance, isNight, waitingMinutes){
    let fare = 50 ;

   

    if(distance > 2){
         fare = fare + ((distance - 2) * 15);
    }
    if ( isNight == true){
        fare = fare + (fare* (20/100));
    } 
    if ( waitingMinutes > 0){
          fare =  fare +  (waitingMinutes * 2);
    } 

    return fare;
    
}

  console.log(getCngFare(5, false, 10))