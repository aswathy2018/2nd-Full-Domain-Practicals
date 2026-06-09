function clo(){
    let a=0
    function sure(){
        a++
        console.log(a)
    }
    return sure
}

let val = clo()

val()
val()
val()
val()