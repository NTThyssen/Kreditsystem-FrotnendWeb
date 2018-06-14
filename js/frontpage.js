(() => {
	//Når dokumentet er klart og renderet bliver et par informationer om kunden indsat.
    $(document).ready(() => {
        $('#brugerNavn').text(`${state.user.firstname} ${state.user.lastname}`);
        $('#brugerSaldo').text(`${state.user.customer.account.balance}`);
        $('#brugerHumoer').text('Glad!');
    })
})();