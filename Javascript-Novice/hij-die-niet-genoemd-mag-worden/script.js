const acceptKnop = document.getElementById("accept-knop");
const rejectKnop = document.getElementById("reject-knop");
const cookieBanner = document.getElementById("cookie-banner");

acceptKnop.addEventListener("click", () => {
    cookieBanner.innerHTML = "<p>Bedankt voor je toestemming!</p>";
});

rejectKnop.addEventListener("click", () => {
    cookieBanner.innerHTML = "<p>Sad... :(</p>";
});
