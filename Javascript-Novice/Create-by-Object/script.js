const personen = [
    {
        naam: "Mustafa",
        leeftijd: 15,
        hobby: "vissen",
    },
    {
        naam: "Leonie",
        leeftijd: 23,
        hobby: "lezen",
    },
    {
        naam: "Jasper",
        leeftijd: 18,
        hobby: "tuinieren",
    },
];

personen.forEach(persoon => {

    const h1Element = document.createElement('h1');
    h1Element.innerText = persoon.naam;

    const leeftijdElement = document.createElement('p');
    leeftijdElement.innerText = `Leeftijd: ${persoon.leeftijd}`;

    const hobbyElement = document.createElement('p');
    hobbyElement.innerText = `Hobby: ${persoon.hobby}`;

    document.body.appendChild(h1Element);
    document.body.appendChild(leeftijdElement);
    document.body.appendChild(hobbyElement);
});
