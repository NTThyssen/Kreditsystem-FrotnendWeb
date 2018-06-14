//Dette dokument indeholder diverse metoder som er brugbare i flere forskellige steder.

//Denne metode tager en form (fx login eller Mine Oplysninger)
const collectFormData = formSelector => {
    const keyValueFormData = $(formSelector).serializeArray();

    return keyValueFormData.reduce((reduction, data) => ({
        ...reduction,
        [data.name]: data.value,
    }), {});
};

const dotNotationLookUp = (object, path) =>
    path.split('.').reduce((reduction, key) => reduction[key], object);
//en klasse der beskriver en enkelt ordre.
class Order {
    constructor(data) {
        this.date = data.date;
        this.id = data.id;
        this.products = data.products;
    }
    //Beregner den totale pris på en ordre.
    get total() {
        return this.products.reduce((reduction, product) => reduction + ( product.price) ,0)
    }
}

