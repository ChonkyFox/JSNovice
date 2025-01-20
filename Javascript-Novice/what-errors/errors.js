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
    console.log("Er is een error gevonden!");
    console.log(`ErrorType: "${e.name}"`);
    console.log(`Message: "${e.message}"`);
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