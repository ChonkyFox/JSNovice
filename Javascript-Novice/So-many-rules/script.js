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

let htmlContent = '';

personen.forEach(persoon => {
    htmlContent += `
        <h1>${persoon.naam}</h1>
        <p>Leeftijd: ${persoon.leeftijd}</p>
        <p>Hobby: ${persoon.hobby}</p>
    `;
});

const container = document.createElement('div');
container.innerHTML = htmlContent;

document.body.appendChild(container);
