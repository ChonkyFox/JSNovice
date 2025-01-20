function optellen(x) {
    const getal = 0;
    getal = getal + x;
}

function check(x) {
    if (x < 0) {
        throw new RangeError("Getal moet groter zijn dan 0");
    }
}

function logError(e) {
    const pElement = document.createElement("p");
    pElement.textContent = `ErrorType: "${e.name}", Message: "${e.message}"`;
    document.body.appendChild(pElement);
}

try {
    optellen(5);
} catch (e) {
    logError(e);
}

try {
    check(-1);
} catch (e) {
    logError(e);
}