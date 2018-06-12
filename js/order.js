(() => {

    const insertionPoint = document.getElementById('orderContainer');

    const init = () => {
        const id = $('#rightMainPage').attr('data-id');
        console.log(id);
        const order = state.getOrder(id);
        
        insertionPoint.appendChild(makeOrderDOM(order));
        insertionPoint.appendChild(makeProductTable(order.products));

    }
    const makeOrderDOM = data => {
        const wrapper = document.createElement('div');

        [
            {title: 'Date', value: data.date},
            {title: 'Order Number', value: data.id},
            {title: 'Company', value: data.company.name},
            {title: 'Total', value: data.total},
        ].reduce((reduction, item) => {
            reduction.appendChild(
                makeOrderInfoItem(item.title, item.value)
            );

            return reduction;
        }, wrapper);

        return wrapper;
    };

    const makeProductTable = products => {

        const table = document.createElement('table');
        table.className = 'scrollable-table';
        table.id = 'ordreID';

        const header = document.createElement('thead');

        const productHeader = Object.keys(products[0]).reduce(
            (reduction, key) => appendTd(reduction, key, true),
            document.createElement('tr')
        );

        header.append(productHeader);

        table.append(header);

        // {title: 'banana', amount: 3, unitPrice: 20},
        const productRows = products.reduce((reduction, product) => {

           /* const row = Object.values(product).reduce(
                (rowReduction, productAttribute) => appendTd(rowReduction, productAttribute),
                document.createElement('tr')
            );*/


            const row = Object.values(product).reduce(
                (rowReduction, productAttribute) => {
                console.log("hallo" + productAttribute);
                if(typeof productAttribute === 'object'){
                    appendTd(rowReduction, productAttribute.name);

                }else{
                    appendTd(rowReduction, productAttribute)
                }
                return rowReduction;
            },document.createElement('tr'));

            reduction.appendChild(row);

            return reduction;
        }, document.createElement('tbody'));

        table.appendChild(productRows);

        return table;
    };

    const appendTd = (tr, text, isHeader) => {
        const d = document.createElement(isHeader ? 'th' : 'td');
        d.appendChild(
            document.createTextNode(
                text
            )
        );
        tr.appendChild(d);
        return tr;
    };

    const makeOrderInfoItem = (title, value) => {
        const paragraph = document.createElement('p');
        paragraph.className = 'info-item';
        const bold = document.createElement('b');
        bold.appendChild(document.createTextNode(title))
        const br = document.createElement('br');
        const text = document.createTextNode(value);

        paragraph.appendChild(bold);
        paragraph.appendChild(br);
        paragraph.appendChild(text);

        return paragraph;
    };

    init();
})();