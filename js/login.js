(() => {
    const formId = '#LoginForm';

    $(document).ready(() => {
        bindSubmitHandler(formId);
    });

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
