function dagVanDeWeek(dagGetal) {
    let dagen = [
        "Maandag",
        "Dinsdag",
        "Woensdag",
        "Donderdag",
        "Vrijdag",
        "Zaterdag",
        "Zondag",
    ];

    if (typeof dagGetal !== "number" || dagGetal < 0 || dagGetal >= dagen.length) {
        throw new Error("Geen geldige dag!");
    }

    return dagen[dagGetal];
}

const testWaardes = [3, "onbekend", -2, 7, 2, 8, 4];

testWaardes.forEach((getal) => {
    try {
        console.log(dagVanDeWeek(getal));
    } catch (error) {
        console.error(error.message);
    }
});
