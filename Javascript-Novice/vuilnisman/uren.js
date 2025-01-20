const uren = [
    [7, 4, 6, 8],
    [6, 8, 5],
    [5, 5, 8, 7, 6],
    [8, 6, 5, 8, 5],
];

let totaal = 0;

for (let i = 0; i < uren.length; i++) {
    const weekuren = uren[i].reduce((som, uur) => som + uur, 0);
    totaal += weekuren;
    console.log(`Week ${i + 1}: ${weekuren} uur`);
}

console.log(`Totaal: ${totaal} uur`);