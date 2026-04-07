setTimeout(()=>{
    console.log("Level 1")
    
    setTimeout(()=>{
        console.log("Level 2")
        
        setTimeout(()=>{
            console.log("Level 3")
            
            setTimeout(()=>{
                console.log("Level 4")
                
                setTimeout(()=>{
                    console.log("Level 5")
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
},1000)