function berekenWisselgeld(bedrag) {
    const biljetten = [50, 20, 10, 5];
    const resultaat = {};
    let index = 0;

    console.log(`Wisselgeld voor €${bedrag}:`);

    while (bedrag > 0 && index < biljetten.length) {
        const biljet = biljetten[index];
        const aantal = Math.floor(bedrag / biljet);
        if (aantal > 0) {
            resultaat[biljet] = aantal;
            console.log(`${aantal}x €${biljet}`);
        }
        bedrag %= biljet;
        index++;
    }
}

berekenWisselgeld(process.argv[2]);