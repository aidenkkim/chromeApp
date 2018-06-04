

var data = document.documentElement.innerHTML;

function webglassReq(){
var req = new XMLHttpRequest();
        req.open('POST', 'http://localhost:3000/');
        req.setRequestHeader('Content-type', 'application/json');
        var data={html:document.documentElement.innerHTML};
        req.send(JSON.stringify(data));
        req.onreadystatechange = function (e) {
            if (req.readyState === XMLHttpRequest.DONE) {
                if(req.status === 200) {
                    console.log(req.responseText);
                    console.log("Response Success");
                } else {
                    console.log('Error!');
                }
            }
        };
}
webglassReq(data);