function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

let val = throttle(function (){
    console.log("Hii hloo")
}, 2000)

setInterval(()=>{
    val()
},1000)