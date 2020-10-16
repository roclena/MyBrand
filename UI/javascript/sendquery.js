var users = JSON.parse(localStorage.getItem('user'));
if (users == null) {
    window.location.href = "login.html";
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
    var messagesref = firebase.database().ref('email');
    document.getElementById('usname').innerHTML = 'Welcome :' + (users.firstName).toUpperCase();
    document.getElementById('queryform').addEventListener('submit', submitform);
    var firstName = users.firstName;
    var lastname = users.lastName;
    var email = users.email;
    document.getElementById('fname').value = firstName.toUpperCase();
    document.getElementById('lname').value = lastname.toUpperCase();
    document.getElementById('email').value = email;

    function submitform(e) {
        e.preventDefault();
        var subject = document.getElementById('subject').value;
        var datee = Date();
        savemessage(firstName, lastname, email, subject, datee);       
        document.querySelector('#arlet').style.display = 'block';
        setTimeout(function () {
            document.querySelector('#arlet').style.display = 'none'; 
            document.getElementById('subject').value = '';

        }, 3000);
    }
    function savemessage(firstName, lastname, email, subject, datee) {
        var newmessref = messagesref.push();
        newmessref.set({
            firstName: firstName,
            lastName: lastname,
            email: email,
            message: subject,
            date: datee
        });
    }
}