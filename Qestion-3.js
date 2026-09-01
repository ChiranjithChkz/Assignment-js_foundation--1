function validateuName(user){

    let u = user.toLowerCase();

    if( u.length < 4 ){
        console.log("Too short");
    }else if(u.includes(" ")){
        console.log("No Space Allowed")
    }else if(u.includes("admin")){
        console.log("Reserved word");
    }else {
        console.log("Available");
    }
}

validateuName("hf;sdfdjadmindfkl");