function ajax_post() {
 
    const xhr = new XMLHttpRequest();
    const url = "https://zet-systems-inc.000webhostapp.com/api/receive.php";
    // const url = "http://34.72.209.20/systems/zet/swama/api/receive.php";
    // const url = "http://localhost/awards/api/receive.php";
    var cellphone = document.getElementById("cellphone").value;
    var category = document.getElementById("category").value;
    var nominee = document.getElementById("nominee").value;
    var messages = document.getElementById("status");
    var params = "cellphone="+cellphone+"&category="+category+"&nominee="+nominee;
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded, application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var return_data = xhr.responseText;
            try {
                return_data = JSON.parse(return_data);
            } catch (err) {
                console.error(err)
            }

            if (return_data) {
                console.log(return_data)
               handleResponse(return_data); 
            }
            // document.getElementById("status").innerHTML = return_data;
        }
    }
    xhr.send(params);
    document.getElementById("status").innerHTML = "processing...";
    messages.style.display = "block"
            messages.style.color = "orange"
            messages.style.border = "1px solid orange"

    function handleResponse(res) {
        if (res.ok) {
            while(messages.firstChild){
                messages.removeChild(messages.firstChild);
            }

            res.messages.forEach((message) => {
                const li = document.createElement('li');
                li.textContent = message;
                messages.appendChild(li);
            });
            cellphone = "";
            nominee = "";
            messages.style.display = "block"
            messages.style.color = "green"
            messages.style.border = "1px solid green"
        } else {
            while(messages.firstChild){
                messages.removeChild(messages.firstChild);
            }

            res.messages.forEach((message) => {
                const li = document.createElement('li');
                li.textContent = message;
                messages.appendChild(li);
            });
            cellphone = "";
            nominee = "";
            messages.style.display = "block"
            messages.style.color = "red"
            messages.style.border = "1px solid red"
        }
    }
}