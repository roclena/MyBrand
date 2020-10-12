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
    var messagesref=firebase.database().ref('email');
    document.getElementById('contactform').addEventListener('submit',submitform);
    var email=document.getElementById('email').value;
function validatemai(email){
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(email.match(mailformat))
{
valideemail=true;
}
else
{
alert("You have entered an invalid email address!");
valideemail=false;
}

}
 
function submitform(e){
	e.preventDefault();
	var firstName=document.getElementById('fname').value;	
	var lastName=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var emailbody=document.getElementById('subject').value;	
    var date=new Date();
	var vemail=false;
	validatemai(email);
	 if(valideemail==false){
		alert("Use valide email");
	}else{
	savemessage(firstName,lastName,email,emailbody,new date());
	document.querySelector('#arlet').style.display='block';
	setTimeout(function(){
		document.querySelector('#arlet').style.display='none';
		document.getElementById('fname').value='';
		document.getElementById('lname').value='';
		document.getElementById('email').value='';
		document.getElementById('subject').value='';
		
	},3000);
	}
}
function savemessage(firstName,lastName, email,emailbody,date){
	var newmessref=messagesref.push();
	newmessref.set({
firstName:firstName,
lastName:lastName,
email:email,
message:emailbody,
date:new Date()
	});
}