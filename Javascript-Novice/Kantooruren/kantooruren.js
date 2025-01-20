const uren = [
    {
        bellen: 3,
        emails: 4,
        meetings: 1,
    },
    {
        bellen: 3,
        emails: 3,
        meetings: 2,
    },
    {
        bellen: 3,
        emails: 5,
    },
    {
        bellen: 2,
        emails: 4,
        meetings: 2,
    },
    {
        bellen: 3,
        emails: 2,
    },
];

const totaal = {
    bellen: 0,
    emails: 0,
    meetings: 0,
    alles: 0,
};

for (const dag of uren) {
    totaal.bellen += dag.bellen || 0;
    totaal.emails += dag.emails || 0;
    totaal.meetings += dag.meetings || 0;
}

totaal.alles = totaal.bellen + totaal.emails + totaal.meetings;

console.log(`Totaal bellen: ${totaal.bellen} uur`);
console.log(`Totaal emails: ${totaal.emails} uur`);
console.log(`Totaal meetings: ${totaal.meetings} uur`);
console.log(`Totaal: ${totaal.alles} uur`);
