function slove(month,year){
    
    return new Date(year,month,0).getDate();
}

console.log(slove(1,2021));
