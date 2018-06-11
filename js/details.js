(() => {
    const inputList = [
        {id: 'firstname', label:'First name'},
        {id: 'lastname', label: 'Last name'},
        {id: 'customer.address', label: 'Addresse'},
        {id: 'zipCode', label: 'Postnummer'},
        {id: 'city' , label: 'By'},
        {id: 'customer.phonenumber', label: 'Tlf. Nummer'},
        {id: 'customer.mail', label: 'E-mail'},
        {id: 'passwordOld', label: 'Nuværende password'},
        {id: 'passwordNew', label: 'Nyt password'}
    ];

    const inputElements = inputList.map((inputEntry) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.id = inputEntry.id;
        input.placeholder = inputEntry.label;
        input.value = dotNotationLookUp(state.user, inputEntry.id) || '';
        label.innerHTML = inputEntry.label;

        if (inputEntry.id.includes('password')) {
            input.type = 'password';
        }
        return {label,input};
    });

    const insertElements = (elementList) => {
        const insertion = $('#inputForm');
        elementList.forEach(({label, input})=>{
            insertion.append(label);
            insertion.append(input);
        })
    };

    $(document).ready(() => {
        insertElements(inputElements);
    });
})();