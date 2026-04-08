class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(even, listener) {
        if (!this.events[even]) {
            this.events[even] = []
        }

        this.events[even].push(listener)
    }

    emit(even, ...args) {
        if (!this.events[even]) {
            if (even === 'error') {
                throw new Error(args[0] || "Error happened..")
            }
            return
        }

        this.events[even].forEach(listener => {
            try {
                listener(...args)
            } catch (error) {
                this.emit('error', err.message)
            }
        });
    }
}


let emitter = new EventEmitter()

emitter.on('data', (msg)=>{
    console.log("Data received.. ", msg);
})

emitter.emit('data', 'hello world..')

emitter.emit('error', 'Something wen wrong, an error occured..')

emitter.on('test', () =>{
    throw new Error('Listener failed!!')
})

emitter.emit('test')