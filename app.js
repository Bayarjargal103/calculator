var arr = [];
var x = "";
var y = "";
var z = "";
var current  = 1;
function getValue(id)
{
    if(id === "plus") {
        arr[0] = x;
        arr[1] = "+";
        document.getElementById("too").textContent = arr[1];
        current = 0;
    }
    else if(id === "clear"){
        arr[0] ="";
        arr[1] = "";
        arr[2] = "";
        document.getElementById("too").textContent = 0;
        x = "";
        y = "";
    }
    else if(id === "substract"){
        arr[1] = "-";
        arr[0] = x;
        current = 0;
    }
    else if(id === "multiply"){
        arr[1] = "*";
        arr[0] = x;
        current = 0;
    }
    else if(id === "devide"){
        arr[1] = "/";
        arr[0] = x;
        current = 0;
    }
    else if(id === "equals"){
        current = 1;
        if(arr[1] === "+"){
            console.log(arr);
            y = y.slice(1, y.length)
            arr[2] = y;
            var hariu = parseFloat(arr[0]) +parseFloat(arr[2]);
            document.getElementById("too").innerHTML = hariu;
        }
        else if(arr[1] === "-"){
            console.log(arr);
            y = y.slice(1, y.length)
            arr[2] = y;
            var hariu = parseFloat(arr[0]) - parseFloat(arr[2]);
            document.getElementById("too").innerHTML = hariu;
        } 
        else if(arr[1] === "*"){
            console.log(arr);
            y = y.slice(1, y.length)
            arr[2] = y;
            var hariu = parseFloat(arr[0]) * parseFloat(arr[2]);
            document.getElementById("too").textContent = hariu;
        } 
        else if(arr[1] === "/"){
            console.log(arr);
            y = y.slice(1, y.length)
            arr[2] = y;
            var hariu = parseFloat(arr[0]) / parseFloat(arr[2]);
            
            document.getElementById("too").textContent = hariu;
        } 
        
    }
    else if(current === 1){
        var utga = document.getElementById(id).textContent;
        x += utga;
        document.getElementById("too").textContent = x;
    }
    if(current === 0 && id !=="equals"){
        var utga = document.getElementById(id).textContent;
        y +=utga;
        var k = y.slice(1, y.length)
        document.getElementById("too").textContent = k;
    }
}