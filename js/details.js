(() => {
    //liste over felte der skal vises på "Mine oplysninger" siden
    //samt en id for disse felter.
    const inputList = [
        {id: 'firstname', label:'First name'},
        {id: 'lastname', label: 'Last name'},
        {id: 'customer.address', label: 'Addresse'},
        {id: 'customer.phonenumber', label: 'Tlf. Nummer'},
        {id: 'customer.mail', label: 'E-mail'},
        {id: 'passwordOld', label: 'Nuværende password'},
        {id: 'passwordNew', label: 'Nyt password'}
    ];

    //Her defineres en variabel der hedder "inputElements"
    //inputElements bliver en liste af HTML elementer, med samme længde som inputList.
    // inputList.map() udfører koden inde i på alle elementerne på inputList.
    const inputElements = inputList.map((inputEntry) => {
        //opret label og input felter, samt giver ID og placeholder.
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.id = inputEntry.id;
        input.placeholder = inputEntry.label;
        //Tjekker om id har "customer." foran den brugbare del, og fjerner det.
        if(input.id.includes('.')){
            input.name = input.id.substring(input.id.indexOf(".")+1, input.id.length)
            console.log(input.id.substring(input.id.indexOf(".")+1, input.id.length))
        }else{
            input.name = input.id;
        }
        //henter evt data om brugeren hvis denne vides. Ellers vil placeholder blive indsat.
        input.value = dotNotationLookUp(state.user, inputEntry.id) || '';
        label.innerHTML = inputEntry.label;

        //Hvis feltet skal indeholde et password,
        //og erstatter input med prikker.
        if (inputEntry.id.includes('password')) {
            input.type = 'password';
        }
        return {label,input};
    });
    //Metode som tager en liste af html elementer og indsætter dem
    const insertElements = (elementList) => {
        const insertion = $('#inputForm');
        elementList.forEach(({label, input})=>{
            insertion.append(label);
            insertion.append(input);
        })
    };

    //Tager fat i 'opdater' knappen som er af typen 'submit',
    //og ændrer dens almindelige opførsel.
    //Når knappen trykkes på hentes felterne og så kaldes updateCustomerData() med dataen.
    const bindSubmitHandler = formSelector => {
        $(formSelector).on('submit', function(e){
            e.preventDefault();
            const  {address, phonenumber, mail} = collectFormData(formSelector);
            const customer = {address, phonenumber, mail};
            const {firstname, lastname} = collectFormData(formSelector);
            state.updateCustomerData(firstname, lastname , customer);
            return false;
        });
    };
    //Når dokumentet er renderet og klart indsættes dataen.
    $(document).ready(() => {
        //state.fetchCustomerData(state.token);
        insertElements(inputElements);
        bindSubmitHandler('#detailsForm');
    });
})();