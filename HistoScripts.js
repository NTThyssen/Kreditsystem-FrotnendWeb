

let table = document.getElementById("myTable");
var cells = table.getElementsByTagName("td");
$(function fillTable(){
    let testEntry = '[{"date" : "2018-05-06", "id" : "1234", "company" : "sejtFirma", "total" : "100"}, {"date" : "2018-05-05", "id" : "1235", "company" : "AndetFirma", "total" : "200"}]';
    let inputData = JSON.parse(testEntry);
    alert("hey hey heyyy");
    for(var i = 0; i < inputData.length; i++){
        var row = table.insertRow();
        var cell1 = row.insertCell();
        cell1.innerHTML = inputData[i].date;
        cell1.id= "(" + i + ",0)";
        var cell2 = row.insertCell();
        cell2.innerHTML = inputData[i].id;
        cell2.id= "(" + i + ",1)";
        var cell3 = row.insertCell();
        cell3.innerHTML = inputData[i].company;
        cell3.id= "(" + i + ",2)";
        var cell4 = row.insertCell();
        cell4.innerHTML = inputData[i].total;
        cell4.id= "(" + i + ",3)";
    }
    var cells = table.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].onclick = function(){reactToClick(this.id)};
    }
})();

function reactToClick(id){
    var row = id.charAt(1);
    $("#rightMainPage").load("Ordre.html");
    document.getElementById("topTitle").innerText = "Ordredetaljer";
    //alert(inputData[row].id);
}
