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
        return this.products.reduce((reduction, product) => reduction + (product.amount * product.unitPrice) ,0)
    }
}

const OrderData = [
    {
        date : '2018-05-06',
        id : '1234',
        company : 'sejtFirma',
        total : '100',
        products: [
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
        ]
    }, {
        date : '2018-05-05',
        id : '1235',
        company : 'AndetFirma',
        total : '200',
        products: [
            {title: 'banana', amount: 3, unitPrice: 20},
            {title: 'golf club', amount: 3, unitPrice: 20},
            {title: 'salami', amount: 3, unitPrice: 20},
        ]
    }
];

const getDataFromId = id => {
    const data = OrderData.find(order => order.id === id);
    if (!data) {
        return null;
    }
    return new Order(data);
};
