(function () {
    var httpRequest;
    document.querySelector("button").onclick = function() { makeRequest('https://cdn.jsdelivr.net/gh/klabovitch35/CS601HW4@master/source.json');
    };
    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();
        if(!httpRequest) {
            document.getElementById('container').innerHTML = "Invalid Request";
            return false;
        }
        httpRequest.onreadystatechange = jsonContent;
        httpRequest.open('GET', url);
        httpRequest.send(); 

    }

    function jsonContent() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                document.getElementById('container').innerHTML = createTable(data, '');
            } else {
                document.getElementById('container').innerHTML = "Failed to get Data";
            }
        }
    }

    function createTable(data, classes) {
        //take individual rows and render their information in column cells
        var row = data.college_degrees.degree;  
        var headerRow = '';
        var bodyRows = '';
        //create table headers
        headerRow += '<th>' + 'School' + '</th>';
        headerRow += '<th>' + 'Major' + '</th>';
        headerRow += '<th>' + 'Type' + '</th>';
        headerRow += '<th>' + 'Year' + '</th>';

        data.college_degrees.map(function(row) {
            bodyRows += '<tr>';
            // Loop over object properties and create cells
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
        
  