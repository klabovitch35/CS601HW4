(function () {
    var httpRequest;
    document.querySelector("button").onclick = function() { makeRequest('https://cdn.jsdelivr.net/gh/klabovitch35/CS601HW4@master/source.json');
    };
    alert("it works");
    function makeRequest(url) {
        alert("in make request");
        httpRequest = new XMLHttpRequest();
        if(!httpRequest) {
            alert('Failed to create httpRequest');
            return false;
        }
        httpRequest.onreadystatechange = jsonContent;
        httpRequest.open('GET', url);
        httpRequest.send(); 

    }
    function jsonContent() {
        alert("in jsonContent");
        alert("ready state: " + httpRequest.readyState);
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                alert("successful request");
                document.write(httpRequest.responseText);
            } else {
                alert("no good request");
            }
        }
        alert("done with json content");
    }

}());
        
  