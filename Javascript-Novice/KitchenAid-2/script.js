const invoer = document.getElementById("invoer")
const startEenheid = document.getElementById("startEenheid");
const convertEenheid = document.getElementById("convertEenheid");
const output = document.getElementById("output");

[invoer, startEenheid, convertEenheid].forEach(element => {
    element.addEventListener("input", updateOutput);
});

document.addEventListener("keydown", handleKeyPress);

const convert = {
    ml:  1, 
    cl:  10, 
    dl:  100, 
    l:   1000,
};

function updateOutput() {
    const waarde = parseFloat(invoer.value);
    if (isNaN(waarde) || waarde < 0) {
        output.innerText = "Voer een geldig positief getal in.";
        return;
    }

    const startFactor = convert[startEenheid.value];
    const convertFactor = convert[convertEenheid.value];
    const resultaat = (waarde * startFactor) / convertFactor;
    output.innerText = `${resultaat.toFixed(2)} ${convertEenheid.value}`;
}

function handleKeyPress(event) {
    const key = event.key;

    switch (key) {
        case "ArrowUp":
            invoer.value = parseFloat(invoer.value || 0) + 10;
            break;
        case "ArrowDown":
            invoer.value = parseFloat(invoer.value || 0) - 10;
            break;
        case "ArrowRight":
            invoer.value = parseFloat(invoer.value || 0) + 1;
            break;
        case "ArrowLeft":
            invoer.value = parseFloat(invoer.value || 0) - 1;
            break;

        case "q":
            startEenheid.value = "ml";
            break;
        case "w":
            startEenheid.value = "cl";
            break;
        case "e":
            startEenheid.value = "dl";
            break;
        case "r":
            startEenheid.value = "l";
            break;

        case "a":
            convertEenheid.value = "ml";
            break;
        case "s":
            convertEenheid.value = "cl";
            break;
        case "d":
            convertEenheid.value = "dl";
            break;
        case "f":
            convertEenheid.value = "l";
            break;
    }

    updateOutput();
}

updateOutput();
