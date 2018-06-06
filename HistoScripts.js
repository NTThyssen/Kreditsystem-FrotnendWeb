(() => {
    const reactToClick = (id, inputData) => {
        const targetData = inputData.find(data => data.id === id);
        $("#rightMainPage").attr('data-id', id);

        $("#rightMainPage").load("Ordre.html", targetData);
    }

    const fillTable = () => {
        const table = document.getElementById("myTable");

        const orders = OrderData.map(order => new Order(order));

        const htmlToInsert = orders.reduce((tbodyReduction, listElement) => {

            const row = [
                listElement.date,
                listElement.id,
                listElement.company,
                listElement.total
            ].reduce((reduction, item) => {
                const td = document.createElement('td');
                td.appendChild(document.createTextNode(item))
                reduction.appendChild(td);
                return reduction;
            }, document.createElement('tr'));

            row.onclick = () => reactToClick(listElement['id'], OrderData);

            tbodyReduction.appendChild(row);

            return tbodyReduction;
        }, document.createElement('tbody'));

        table.appendChild(htmlToInsert);
    }

    fillTable();
})();