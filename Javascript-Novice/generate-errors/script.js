function generateTypeError() {
    let constantValue = 42;
    constantValue.toUpperCase();
}

function generateReferenceError() {
    console.log(undefinedVariable);
}

function generateRangeError() {
    const arr = new Array(-5);
}

function logError(e) {
    console.log("Er is een error gevonden!");
    console.log(`ErrorType: "${e.name}"`);
    console.log(`Message: "${e.message}"`);
}

try {
    generateRangeError();
} catch (e) {
    logError(e);
}

try {
    generateReferenceError();
} catch (e) {
    logError(e);
}

try {
    generateRangeError();
} catch (e) {
    logError(e);
}