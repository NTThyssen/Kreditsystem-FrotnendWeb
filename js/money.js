(() =>{
	$(document).ready(() => {
        $('#moneyButton').on('click', () => deposit());
    })
})();
function deposit(){
	state.depositMoney(123);
}