document.write("<div id='clock' aria-hidden='true'><span class='time'><span class='hour'>12</span><span class='colon'>:</span><span class='minute'>34</span><span class='colon'>:</span><span class='second'>56</span></span></div>");
document.addEventListener("DOMContentLoaded", function() {
    function updateClock() {
        const time = new Date().toLocaleTimeString('no-NB', { timeZone: 'Europe/Oslo' });
        const currentTime = {
            hour: time.split(":")[0],
            minute: time.split(":")[1],
            second: time.split(":")[2],
        }
        document.querySelector("#clock .time .hour").innerText = currentTime.hour;
        document.querySelector("#clock .time .minute").innerText = currentTime.minute;
        document.querySelector("#clock .time .second").innerText = currentTime.second;

        if(currentTime.second % 2) {
            document.querySelector("#clock .time").classList.add("showcolons");
        } else {
            document.querySelector("#clock .time").classList.remove("showcolons");
        }
    }
    updateClock();
    setInterval(updateClock,500)
})