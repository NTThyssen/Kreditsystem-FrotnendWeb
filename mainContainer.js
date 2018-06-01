$(function startOp() {
    $("#rightMainPage").load("forside.html");
    document.getElementById("topTitle").innerText = "Velkommen";
})

$(function () {
    $("#forside").on("click",function(){
        $("#rightMainPage").load("forside.html");
        document.getElementById("topTitle").innerText = "Velkommen";
    })
});
$(function () {
    $("#indsaetPenge").on("click",function(){
        $("#rightMainPage").load("indaetPenge.html");
        document.getElementById("topTitle").innerText = "Indbetal penge";
    })
});
$(function () {
    $("#mineOplysninger").on("click",function(){
        $("#rightMainPage").load("mineOplysninger.html");
        document.getElementById("topTitle").innerText = "Mine Oplysninger";
    })
});

