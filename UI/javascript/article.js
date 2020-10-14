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
var messagesref = firebase.database().ref('articles');
document.getElementById('articleform').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();
    var title = document.getElementById('title').value;
    var subject = document.getElementById('subject').value;
    var PostedDate =Date();
    savemessage(title, subject, PostedDate);
    document.getElementById('title').value = '';
    document.getElementById('subject').value = '';

}
function savemessage(title, subject, PostedDate) {
    var newmessref = messagesref.push();
    newmessref.set({
        Title: title,
        Body: subject,
        PostedDate: PostedDate

    });
}
//retrieve//
ref.on('value',gotData)
function gotData(data){

}