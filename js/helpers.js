const collectFormData = formSelector => {
    const keyValueFormData = $(formSelector).serializeArray();

    return keyValueFormData.reduce((reduction, data) => ({
        ...reduction,
        [data.name]: data.value,
    }), {});
};

const dotNotationLookUp = (object, path) =>
    path.split('.').reduce((reduction, key) => reduction[key], object);

class Order {
    constructor(data) {
        this.date = data.date;
        this.id = data.id;
        this.company = data.company;
        this.products = data.products;
    }

    get total() {
        return this.products.reduce((reduction, product) => reduction + product.price,0)
    }
}