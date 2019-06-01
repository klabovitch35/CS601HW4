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
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                alert("successful request");
                var data = JSON.parse(httpRequest.responseText);
                document.getElementById('container').innerHTML = createTable(data, '');
            } else {
                alert("failed request");
            }
        }
    }

    function createTable(data, classes) {
        var row = data.college_degrees.degree;
        // var cols = Object.keys(row);
        var headerRow = '';
        var bodyRows = '';
        headerRow += '<th>' + 'School' + '</th>';
        headerRow += '<th>' + 'Major' + '</th>';
        headerRow += '<th>' + 'Type' + '</th>';
        headerRow += '<th>' + 'Year' + '</th>';

        data.college_degrees.map(function(row) {
            bodyRows += '<tr>';
            // To do: Loop over object properties and create cells
            bodyRows += '<td>' + row.degree.school + '</td>';
            bodyRows += '<td>' + row.degree.major + '</td>';
            bodyRows += '<td>' + row.degree.type + '</td>';
            bodyRows += '<td>' + row.degree.year + '</td>';
            bodyRows += '</tr>';
        });
        
        var table = '<table class="' +
       classes +
       '"><thead><tr>' +
       headerRow +
       '</tr></thead><tbody>' +
       bodyRows +
       '</tbody></table>';
       return table;
        
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

}());
        
  