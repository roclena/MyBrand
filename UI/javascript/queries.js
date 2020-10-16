// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional  
var users = JSON.parse(localStorage.getItem('admin'));
if (users == null) {
  window.location.href = "AdminLogin.html";
} else {
var firebaseConfig = {
    apiKey: "AIzaSyCttetuD8PgZQXFCiDQ7w0qcI4PfqknbVM",
    authDomain: "myweb-64a8a.firebaseapp.com",
    databaseURL: "https://myweb-64a8a.firebaseio.com",
    projectId: "myweb-64a8a",
    storageBucket: "myweb-64a8a.appspot.com",
    messagingSenderId: "605134341919",
    appId: "1:605134341919:web:df86688d8634978bbf122a",
    measurementId: "G-XDE7ZTEJLS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
document.getElementById('usname').innerHTML = 'Admin :' + (users.firstName).toUpperCase();
var messagesref = firebase.database().ref('email');

messagesref.on('value', gotData);
function gotData(data) {
    var mess = data.val();
    var keys = Object.keys(mess);

    var row;
    var cell;

    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var date = mess[k].date;
        var email = mess[k].email;
        var firstName = mess[k].firstName;
        var lastname = mess[k].lastName;
        var message = mess[k].message;
        var table = document.getElementById('contacttable'),
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);
        cell1.innerHTML = i + 1;
        cell2.innerHTML = date;
        cell3.innerHTML = email;
        cell4.innerHTML = (firstName + "  " + lastname).toUpperCase();
        cell5.innerHTML = message;
    }
}
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
}

