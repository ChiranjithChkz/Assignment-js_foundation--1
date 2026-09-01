function getDayType(day){
     switch(day) {
        case "Friday":
        case "Saturday":
            console.log("Weekend");
            break;
        case "Sunday": 
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
            console.log("Working day");
            break;
        default: 
             console.log("Invalid day");
             break;

     }
}


getDayType("Thursday");