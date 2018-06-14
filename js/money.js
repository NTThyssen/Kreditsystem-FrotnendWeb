(() =>{
	$(document).ready(() => {
        $('#moneyButton').on('click', () => state.depositMoney(document.getElementById("amount").value));
    })
})();
