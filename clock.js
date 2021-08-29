setInterval(() => {
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrotation = htime*30+0.5*mtime;
    mrotation = mtime*6 + stime*0.1;
    srotation = stime*6;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);