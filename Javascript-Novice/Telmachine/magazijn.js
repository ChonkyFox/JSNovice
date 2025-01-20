const magazijn = {
    borden: 42,
    glazen: 57,
    messen: 85,
    vorken: 96,
    lepels: 103,
};

const verkocht = [
    "lepel", "vork", "vork", "bord",
    "lepel", "mes", "glas", "glas",
    "bord", "lepel", "lepel", "bord",
    "glas", "bord", "mes", "bord",
    "lepel", "vork", "glas", "bord",
    "vork", "vork",
];

const enkelvoud = {
    bord: "borden",
    glas: "glazen",
    mes: "messen",
    vork: "vorken",
    lepel: "lepels",
};

for (const item of verkocht) {
    const meervoud = enkelvoud[item];
    if (meervoud && magazijn[meervoud] !== undefined) {
        magazijn[meervoud]--;
    }
}

console.log(JSON.stringify(magazijn));
