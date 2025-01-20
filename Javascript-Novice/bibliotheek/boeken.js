let catalogus = [
    {
        ISBN: "978-1449355739",
        aantal: 1,
    },
    {
        ISBN: "978-0596806750",
        aantal: 2,
    },
    {
        ISBN: "978-0596805524",
        aantal: 1,
    },
    {
        ISBN: "978-1491905012",
        aantal: 1,
    },
    {
        ISBN: "978-0596008642",
        aantal: 3,
    },
    {
        ISBN: "978-0596004897",
        aantal: 2,
    },
];

const dagverloop = [
    { ISBN: "978-0596806750", handeling: "uitlening" },
    { ISBN: "978-1491905012", handeling: "teruggave" },
    { ISBN: "978-0596805524", handeling: "uitlening" },
    { ISBN: "978-1449319243", handeling: "teruggave" },
    { ISBN: "978-1491905012", handeling: "uitlening" },
    { ISBN: "978-0596004897", handeling: "uitlening" },
    { ISBN: "978-1491908426", handeling: "teruggave" },
    { ISBN: "978-1449319243", handeling: "uitlening" },
    { ISBN: "978-0596004361", handeling: "teruggave" },
    { ISBN: "978-1491905012", handeling: "uitlening" },
    { ISBN: "978-1449355739", handeling: "uitlening" },
];

for (const actie of dagverloop) {
    const boek = catalogus.find(b => b.ISBN === actie.ISBN);

    if (actie.handeling === "uitlening") {
        if (boek) {
            boek.aantal -= 1;
            if (boek.aantal === 0) {
                catalogus = catalogus.filter(b => b.ISBN !== actie.ISBN);
            }
        }
    } else if (actie.handeling === "teruggave") {
        if (boek) {
            boek.aantal += 1;
        } else {
            catalogus.push({ISBN: actie.ISBN, aantal: 1});
        }
    }
}

console.log(JSON.stringify(catalogus, null, 1));
