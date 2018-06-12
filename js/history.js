(() => {
    const fillTable = (ordersFromApi) => {
        const table = document.getElementById('myTable');

        const orders = ordersFromApi.map(order => new Order(order));
        //const orders = OrderData.map(order => new Order(order));

        const htmlToInsert = orders.reduce((tbodyReduction, listElement) => {

            const row = [
                listElement.date,
                listElement.id,
                listElement.company.name,
                listElement.total
            ].reduce((reduction, item) => {
                const td = document.createElement('td');
                td.appendChild(document.createTextNode(item))
                reduction.appendChild(td);
                return reduction;
            }, document.createElement('tr'));

            row.onclick = () => state.transitionTo('order', listElement['id']);

            tbodyReduction.appendChild(row);

            return tbodyReduction;
        }, document.createElement('tbody'));

        table.appendChild(htmlToInsert);
    };

    $(document).ready(() => {
        //fillTable();
        state.fetchCustomerOrders().then((orders) => fillTable(orders));
    });
})();