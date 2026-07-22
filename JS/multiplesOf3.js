let i=1
let count = 0
while(i<=16){
    if(i%3==0){
        console.log(i)
        count++
        if(count==5){
            break
        }
    }
    i++
}