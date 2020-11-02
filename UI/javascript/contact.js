
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
	let firstName=document.getElementById('fname').value;
	let lastname=document.getElementById('lname').value;
	let email=document.getElementById('email').value;
	let body = document.getElementById('body').value;
	let subject = document.getElementById('subject').value;	
	fetch("https://rogerbrand.herokuapp.com/api/queri", {
		method: "post",
		headers: {
			'Accept': 'application/json,*/*',
			'Content-Type': 'application/json'
			
		},
		body: JSON.stringify({
			senderFirstname:firstName,
			senderLastName:lastname,
			senderEmail:email,	
			Subject:subject,
			Mail:body,		
		}),
	}).then(res=>res.json()).then(data=>{
		console.log(data);
		if(data.message==='query sent !!!!'){
	   // alert(data.message);
		document.querySelector('#arlet').style.display = 'block';
		setTimeout(function () {
			document.querySelector('#arlet').style.display = 'none'; 
			document.getElementById('subject').value = '';
			document.getElementById('body').value = '';

		}, 3000);
		
		}else if(data.status===400){
			alert(data.message);
			
		}
	}).catch(err=>{
		console.log(err);
	})
  
}	
