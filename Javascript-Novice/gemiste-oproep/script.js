const warning = document.getElementById("warning");
const acceptKnop = document.getElementById("accept-knop");
const rejectKnop = document.getElementById("reject-knop");
const cookieBanner = document.getElementById("cookie-banner");

const textwarning = (message) => {
    warning.innerText = message;
};

const alertwarning = (message) => {
    alert(message); 
};

const showtime = (callback) => {
    const time = new Date().toLocaleTimeString();
    callback(`Het is ${time}. Tijd voor pauze?`);
};

setTimeout(() => {
    time(textwarning); 
}, 2000);

setTimeout(() => {
    time(alertwarning);
}, 4000);

acceptKnop.addEventListener("click", () => {
    cookieBanner.innerHTML = "<p>Bedankt voor je toestemming!</p>";
});

rejectKnop.addEventListener("click", () => {
    cookieBanner.innerHTML = "<p>Sad... :(</p>";
});
