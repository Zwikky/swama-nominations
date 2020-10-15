function ajax_post() {
 
    const xhr = new XMLHttpRequest();
    const url = "https://zet-systems-inc.000webhostapp.com/api/receive.php";
    // const url = "http://34.72.209.20/systems/zet/swama/api/receive.php";
    // const url = "http://localhost/awards/api/receive.php";
    var cellphone = document.getElementById("cellphone").value;
    var category = document.getElementById("category").value;
    var nominee = document.getElementById("nominee").value;
    var params = "cellphone="+cellphone+"&category="+category+"&nominee="+nominee;
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var return_data = xhr.responseText;
            document.getElementById("status").innerHTML = return_data;
        }
        if (xhr.readyState == 1 && xhr.status == 0) {
            var return_data = xhr.responseText;
            document.getElementById("status").innerHTML = "Error Nominating, Try Again Later";
        }
    }
    xhr.send(params);
    document.getElementById("status").innerHTML = "processing...";
}