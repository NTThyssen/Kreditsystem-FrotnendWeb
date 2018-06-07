$(function hentForsideData() {
    let yes;
    let httpRequest;

        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;

        httpRequest.open('GET', "http://ec2-18-222-19-131.us-east-2.compute.amazonaws.com:8080/kreditsystem/api/customer" );
        httpRequest.send();

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {

                yes = JSON.parse(this.responseText);
                document.getElementById("brugerNavn").innerHTML = localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
                document.getElementById("brugerSaldo").innerHTML = localStorage.getItem("balance") + "kr.";
                document.getElementById("sidsteOrdre").innerHTML = "";
                document.getElementById("beløbSidsteOrdre").innerHTML = "";
            } else {
                alert('There was a problem with the request.');
            }
        }
    }

})();
