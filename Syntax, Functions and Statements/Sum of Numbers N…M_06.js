function slove(n,m){

    let startPoitn = Number(n);
    let endpoint = Number(m);

    let result = 0;

    for (let i = startPoitn; i <= endpoint; i++) {
        
        result += i;
         
    }
    console.log(result)

}

slove('1','5');