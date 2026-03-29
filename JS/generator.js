
function* counter(){
    for(i=1;i<=50;i++){
        yield i;
    }
}
const count = counter()
for( let num of count){
    console.log(num)
}