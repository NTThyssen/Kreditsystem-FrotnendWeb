(() => {
    //opretter en form til loginsiden, så man kan indsamle det senere.
    const formId = '#LoginForm';

    $(document).ready(() => {
        bindSubmitHandler(formId);
    });
    //Tager fat i 'Login' knappen som er af typen 'submit',
    //og ændrer dens almindelige opførsel.
    //Når knappen trykkes på hentes felterne og så kaldes state.Login() med dataen.
    const bindSubmitHandler = formSelector => {
        $(formSelector).on('submit', function(e){
            e.preventDefault();

            // Collect all data from #LoginForm as array of key/value pairs with element name as key, and element value as value. ie [{[name]: value}]
            const {username, password} = collectFormData('#LoginForm');
            state.login(username, password);

            return false;
        });
    };
})();
