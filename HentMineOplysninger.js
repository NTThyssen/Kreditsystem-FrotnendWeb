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

                    oplysFirstNavn = yes[1].firstname;
                    oplysLastName = yes[1].lastname;
                    oplysAdrasse = yes[1].adresse; //Skal rettes
                    oplysPostNummer = yes[1].postnummer; //Skal rettes
                    oplysBy = yes[1].by; //Skal rettes
                    oplysTlf = yes[1].nummer; //Skal rettes
                    oplysEmail = yes[1].Email; //Skal rettes

                    document.getElementById("oplysFirstNavn").placeholder = oplysFirstNavn;
                    document.getElementById("oplysLastNavn").placeholder = oplysLastName;
                    document.getElementById("oplysAdrasse").placeholder = oplysAdrasse;
                    document.getElementById("oplysPostnummer").placeholder = oplysPostNummer;
                    document.getElementById("oplysBy").placeholder = oplysBy;
                    document.getElementById("oplysTlf").placeholder = oplysTlf;
                    document.getElementById("oplysEmail").placeholder = oplysEmail;
                } else {
                    alert('There was a problem with the request.');
                }
            }
        }
})();
