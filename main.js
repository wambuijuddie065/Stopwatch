function stopwatch() {
    let starttime,stoptime,duration,running=0;
    this.start=()=>{
        if (running) {
            throw new Error("stopwatch already running")
            
        } else {
            starttime=new Date()
            running=1;
            
        }
    }
    this.stop=()=>{
        if (!running){
            throw new Error("Stopwatch already stopped")
        }else{
            stoptime=new Date()
            running=0;
            duration= stoptime.getTime()-starttime.getTime()
            console.log(duration);
        }
    }
    this.reset=()=>{
        starttime,stoptime,duration,running=0;

    }
    
    Object.defineProperty(this,'duration',
    {
        get:()=> duration
    })
    
}


let sw= new stopwatch();
console.log(sw);
