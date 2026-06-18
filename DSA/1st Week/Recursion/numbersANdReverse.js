function num(n){
    if(n>10){
        return
    }
    console.log(n)

    num(n+1)
    console.log(n)

}
num(1)
