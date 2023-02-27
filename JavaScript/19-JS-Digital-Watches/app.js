// indian watch
let indianWatch = () => {
    let options = {timeZone : "Asia/Kolkata"};
    let currentDate = new Date().toLocaleDateString("en-US",options);
    let currentTime = new Date().toLocaleTimeString("en-US",options);
    document.querySelector("#indian-date").textContent = currentDate;
    document.querySelector("#indian-time").textContent = currentTime;
};
setInterval(indianWatch, 1000);

// usa watch
let usaWatch = () => {
    let options = {timeZone : "America/New_York"};
    let currentDate = new Date().toLocaleDateString("en-US",options);
    let currentTime = new Date().toLocaleTimeString("en-US",options);
    document.querySelector("#usa-date").textContent = currentDate;
    document.querySelector("#usa-time").textContent = currentTime;
};
setInterval(usaWatch, 1000);

// china watch
let chinaWatch = () => {
    let options = {timeZone : "Asia/Shanghai"};
    let currentDate = new Date().toLocaleDateString("en-US",options);
    let currentTime = new Date().toLocaleTimeString("en-US",options);
    document.querySelector("#china-date").textContent = currentDate;
    document.querySelector("#china-time").textContent = currentTime;
};
setInterval(chinaWatch, 1000);