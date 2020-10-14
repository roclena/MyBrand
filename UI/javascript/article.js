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
messagesref.on('value',gotData);
function gotData(data){
    var article=data.val();
    var keys=Object.keys(article);  
    
    var row;
    var cell; 
 
    for(var i=0; i<keys.length;i++){
      var k=keys[i];
      var date=article[k].PostedDate;
      var title=article[k].Title;
      var body=article[k].Body;
      var table=document.getElementById('mytable'),
      newRow=table.insertRow(table.length),
      cell1=newRow.insertCell(0),
      cell2=newRow.insertCell(1),
      cell3=newRow.insertCell(2);
      cell1.innerHTML= date;
      cell2.innerHTML= title;
      cell3.innerHTML= body;
     
      console.log(date +":"+title+":"+body);
    }
  

}