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

function voegtoe(tekst, kleur) {
    const pElement = document.createElement("p");
    pElement.innerText = tekst;
    pElement.style.color = kleur;
    document.body.appendChild(pElement);
}

const testWaardes = [3, "onbekend", -2, 7, 2, 8, 4];

testWaardes.forEach((getal) => {
    let tekst = "";
    let kleur = "";

    try {
        const dag = dagVanDeWeek(getal);
        tekst = dag;
        kleur = "green";
    } catch (error) {
        tekst = "Onbekend";
        kleur = "red";
    } finally {
        voegtoe(tekst, kleur);
    }
});
