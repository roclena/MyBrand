// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional  
var users = JSON.parse(localStorage.getItem('admin'));
if (users == null) {
    window.location.href = "login.html";
} else {
    const token = localStorage.getItem('token');
    window.addEventListener('load', (event) => {
        fetch("https://rogerbrand.herokuapp.com/api/query", {
            method: "get",
            headers: {
                'Accept': 'application/json,*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(res => res.json())
            .then(res => {

                console.log(res);
                //var keys=res.Articles;
                var keys = res.queries;
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {

                    var date = res.queries[i].CreateDate;
                    var email=res.queries[i].senderEmail;
                    var name = res.queries[i].senderFirstName + '' + res.queries[i].senderLastName;
                    var Subject = res.queries[i].Subject;
                    var body = res.queries[i].Mail;
                    var table = document.getElementById('contacttable'),
                    newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                     cell2 = newRow.insertCell(1),
                     cell3 = newRow.insertCell(2);
                    cell4 = newRow.insertCell(3);
                    cell5 = newRow.insertCell(4);
                    cell6 = newRow.insertCell(5);
                    cell1.innerHTML = i + 1;
                    cell2.innerHTML = date
                    cell3.innerHTML = email;
                    cell4.innerHTML = name.toUpperCase();
                    cell5.innerHTML = Subject;
                    cell6.innerHTML=body;
                }
            }).catch(err => {
                console.log(err);
            })
    })
}
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}


