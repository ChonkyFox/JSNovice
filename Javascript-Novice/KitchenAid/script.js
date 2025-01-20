const invoer = document.getElementById("invoer")
const startEenheid = document.getElementById("startEenheid");
const convertEenheid = document.getElementById("convertEenheid");
const output = document.getElementById("output");

[invoer, startEenheid, convertEenheid].forEach(element => {
    element.addEventListener("input", updateOutput);
});

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
