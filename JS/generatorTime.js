function* counter(){
    let i=1
    while(i<=10){
        yield i++
    }
}

const gen = counter()

const id = setInterval(()=>{
    let val = gen.next()
    if(val.done){
        clearInterval(id)
        return
    }

    console.log(val.value);

}, 1000)

