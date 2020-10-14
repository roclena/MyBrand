// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional  
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
database = firebase.database();
var users = JSON.parse(localStorage.getItem('user'));
document.getElementById('usname').innerHTML = 'Welcome:' + (users.firstName).toUpperCase();


document.getElementById('cuserpass').addEventListener('submit', upuserform);

function upuserform(e) {
  e.priventDefault();
  var cupassword = document.getElementById('cpassword').Value;
  var newpassword = document.getElementById('password').Value;
  var copassword = document.getElementById('copassword').Value;

  console.log(cupassword);
}