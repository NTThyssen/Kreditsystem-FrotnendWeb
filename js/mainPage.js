(() => {
	//Når siden er klar indsættes clickhandlers på knapperne i venstre side
    $(document).ready(() => {
        state.transitionTo('frontpage');
        $('#forside').on('click', () => state.transitionTo('frontpage'));
        $('#indsaetPenge').on('click', () => state.transitionTo('money'));
        $('#mineOplysninger').on('click', () => state.transitionTo('details'));
        $('#historik').on('click', () => state.transitionTo('history'));
    })
})();
