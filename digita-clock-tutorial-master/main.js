const digitalClock =()=>{
    let date = new Date();
    let hour = date.getHours();
    let minitus = date.getMinutes();
    let sec = date.getSeconds();
    let timeformat = 'Am';

    //timeformat setup
        if(hour ===0){
           timeformat ='Am'
        }
        if(hour>=12){
            if(hour ===12){
                hour =12;
            }
            else{
                hour = hour-12;
            }
            
            timeformat ='Pm'
        }


    
    //digital Watch for Nice Move hour,min.seconds
    hour = hour<10 ?'0'+hour :hour;
    minitus  =minitus<10 ?'0'+minitus :minitus;
    sec  =sec<10 ?'0'+sec :sec;
    
    const time = `${hour} : ${minitus} : ${sec}`
    document.getElementById('time').innerText = time;
    document.querySelector('small').innerText = timeformat;
    setInterval(digitalClock,1000);
}

digitalClock()

