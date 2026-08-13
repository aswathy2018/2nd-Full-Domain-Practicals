const crypto = require('crypto')

function createOTP(){
    let otp = ''

    for(let i=0 ; i<4 ; i++){
        otp+=crypto.randomInt(1,10)
    }

    return{
        otp,
        expairesAt: Date.now()+2*60*1000
    }
}

console.log(createOTP())