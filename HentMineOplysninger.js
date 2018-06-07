$(function hentMineOplysningerData() {
    $("#mineOpBut").on('click', makeRequest)
    function makeRequest() {

    }
        let yes;
        let httpRequest;

        let oplysFirstNavn;
        let oplysLastName;
        let oplysAdrasse;
        let oplysPostNummer;
        let oplysBy;
        let oplysTlf;
        let oplysEmail

        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;

        httpRequest.open('GET', "http://ec2-18-222-19-131.us-east-2.compute.amazonaws.com:8080/kreditsystem/api/customer");
        httpRequest.send();

        function alertContents() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {

                    yes = JSON.parse(this.responseText);

                    oplysFirstNavn = localStorage.getItem("firstname");
                    oplysLastName = localStorage.getItem("lastname");
                    oplysAdrasse = localStorage.getItem("adrasse");
                    oplysTlf = localStorage.getItem("phonenumber");
                    oplysEmail = localStorage.getItem("mail");
                    oplysPostNummer = localStorage.getItem("postnummer");
                    oplysBy = localStorage.getItem("by");

                    document.getElementById("oplysFirstNavn").placeholder = oplysFirstNavn;
                    document.getElementById("oplysLastNavn").placeholder = oplysLastName;
                    document.getElementById("oplysAdrasse").placeholder = oplysAdrasse;
                    document.getElementById("oplysTlf").placeholder = oplysTlf;
                    document.getElementById("oplysEmail").placeholder = oplysEmail;
                    document.getElementById("oplysPostnummer").placeholder = oplysPostNummer;
                    document.getElementById("oplysBy").placeholder = oplysBy;
                } else {
                    alert('There was a problem with the request.');
                }
            }
        }
})();
