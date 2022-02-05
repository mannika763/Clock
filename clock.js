setInterval(() =>{
    d=new Date();
     const dhour=d.getHours();
     const dminute=d.getMinutes();
   const  dsecond=d.getSeconds();
    
    hrotation=30*dhour+dminute/2;
    mrotation=6*dminute;
    srotation=6*dsecond;
    
    hours.style.transform=`rotateZ(${hrotation}deg)`;
    minutes.style.transform=`rotateZ(${mrotation}deg)`;
   seconds.style.transform=`rotateZ(${srotation}deg)`;
            },1000);
