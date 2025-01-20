const gemeente = {
    naam: 'Bar',
    hoofdstad: 'Foobarstad',
    steden: [
        {
            postcode: '10234',
            naam: 'Foobarstad',
            inwoners: 10234,
            burgemeester: {
                naam: 'nhoJ',
                aangetreden: 2020,
            },
        },

        {
            postcode: '10101',
            naam: 'Nieuw Foo',
            inwoners: 34567,
            burgemeester: {
                naam: 'enaJ',
                aangetreden: 2019,
            },
        },

        {
            postcode: '34633',
            naam: 'Bardorp',
            inwoners: 12354,
            burgemeester: {
                naam: 'hargaZ',
                aangetreden: 2020,
            },
        },

        {
            postcode: '29567',
            naam: 'Barfoo',
            inwoners: 1376,
            burgemeester: {
                naam: 'leraK',
                aangetreden: 2022,
            },
        },

        {
            postcode: '55555',
            naam: 'Prodstad',
            inwoners: 55555,
            burgemeester: {
                naam: 'iL',
                aangetreden: 2018,
            },
        },

        {
            postcode: '23412',
            naam: 'Developerdorp',
            inwoners: 3,
            burgemeester: {
                naam: 'nalA',
                aangetreden: 2021,
            },
        },

        {
            postcode: '33669',
            naam: 'Nieuw developerdorp',
            inwoners: 52978,
            burgemeester: {
                naam: 'regsdE',
                aangetreden: 2020,
            },
        },
    ],
};

gemeente.steden.forEach((stad) => {
    stad.burgemeester.naam = stad.burgemeester.naam.split('').reverse().join('');
});

gemeente.steden.forEach((stad, index) => {
    const rowIndex = index + 1;
    document.getElementById(`naam${rowIndex}`).textContent = stad.naam;
    document.getElementById(`inwonersaantal${rowIndex}`).textContent = stad.inwoners;
    document.getElementById(`burgemeester${rowIndex}`).textContent = stad.burgemeester.naam;
    document.getElementById(`postcode${rowIndex}`).textContent = stad.postcode;
});