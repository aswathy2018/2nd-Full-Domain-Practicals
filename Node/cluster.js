const cluster = require('cluster')
const os = require('os')

if(cluster.isPrimary){
    let totalCPUs = os.cpus().length

    for(let i=0 ; i<totalCPUs ; i++){
        cluster.fork()
    }
}else{
    console.log(`Currently running: ${process.pid}`);
}