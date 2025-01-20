let data = ["Hello", 3, 3.2, "3", true, false, 3.0 + 3, 3 + "3"];

data.forEach((item) => {
    if (typeof item != "number") {
        console.log(`Waarde ${item} heeft als type ${typeof item}`);
    } else {
        const numberType = Number.isInteger(item) ? "int" : "float";
        console.log(`Waarde "${item}" heeft als type number ${numberType}`);
    }
});