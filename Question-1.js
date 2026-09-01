function describeValue(value){
    let v = typeof(value);

    if(v){
        return `"${v} | truty"`;
    }else{
        `"${v} | falsy"`;
    }
}


// console.log(describeValue("0"));