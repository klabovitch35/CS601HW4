(function () {
    var httpRequest;
    document.querySelector("button").onclick = function() { makeRequest('https://cdn.jsdelivr.net/gh/klabovitch35/CS601HW4@master/source.json');
    };
    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();
        if(!httpRequest) {
            alert('Failed to create HTTPRequest');
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
                var response = JSON.parse(httpRequest.responseText);
                createTable(response);
            } else {
                alert("failed request");
            }
        }
    }

    function createTable() {
        var table = document.getElementById('gable');
        data.forEach(function(object) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.school + '</td>' +
            '<td>' + object.major + '</td>' +
            '<td>' + object.type + '</td>' +
            '<td>' + object.year + '</td>';
        table.appendChild(tr);
        });
    }

}());
        
  