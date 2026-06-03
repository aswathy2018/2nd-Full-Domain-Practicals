const crypto = require('crypto')

function createOTP(){
    const otp = crypto.randomInt(100000, 999999).toString()

    return{
        otp,
        expairesAt: Date.now()+2*60*1000
    }
}

console.log(createOTP())