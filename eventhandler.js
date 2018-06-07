 let yes;
$(function() {
  let httpRequest;
  $("#getLogin").on('click', makeRequest)
  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    
    httpRequest.open('GET', "http://ec2-18-222-19-131.us-east-2.compute.amazonaws.com:8080/kreditsystem/api/customer" );
    httpRequest.send();
  }
  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
            
        yes = JSON.parse(this.responseText);
          if(document.getElementById("bruger").value ==yes[0].id){
            if(document.getElementById("pass").value== yes[0].password){
                //alert(this.responseText);
                $("#maincontainer").load("mainPage.html")
            }else{
              alert("invalid info")

            }
        }else{
              alert("invalid info")
        }
                    
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();


