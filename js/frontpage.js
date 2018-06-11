(() => {
    $(document).ready(() => {
        $('#brugerNavn').text(`${state.user.firstname} ${state.user.lastname}`);
        $('#brugerSaldo').text('1000kr');
        $('#sidsteOrdre').text('?');
        $('#beløbSidsteOrdre').text('1kr');
    })
})();