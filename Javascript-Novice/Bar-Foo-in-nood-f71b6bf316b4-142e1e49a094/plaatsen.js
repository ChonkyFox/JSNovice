const inwonersaantallen = [10234, 34567, 12354, "29567", 55555, "23412", 52978];
const postcodes = ["10234", "10101", "34633", "29567", "55555", "23412", "33669"];
const plaatsnamen = [
    "Foobarstad",
    "Nieuw Foo",
    "Bardorp",
    "Barfoo",
    "Prodstad",
    "Developerdorp",
    "Nieuw developerdorp",
];

inwonersaantallen.forEach((inwonersaantal, index) => {
    if (inwonersaantal !== Number(inwonersaantal)) {
        console.log(`Het inwonersaantal van ${plaatsnamen[index]} moet opnieuw bepaald worden.`);
    }
});

const som = postcodes
    .map((postcode) => parseInt(postcode, 10))
    .reduce((acc, curr) => acc + curr, 0);

console.log(`Het wachtwoord is ${som}`);