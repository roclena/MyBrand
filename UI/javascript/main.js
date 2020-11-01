var valideemail = false;
const submitform=document.getElementById('signupform');
var email = document.getElementById('email').value;
function validatemai(email) {
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email.match(mailformat)) {
		valideemail = true;
	}
	else {
		alert("You have entered an invalid email address!");
		valideemail = false;
	}
}

submitform.addEventListener('submit', (e) => {
	e.preventDefault();
	var firstName = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var cpassword = document.getElementById('cpassword').value;
	var vemail = false;
	validatemai(email);
	if (password != cpassword) {
		alert("password not the same");
	} else if (valideemail == false) {
		alert("Use valide email");
	} else {
		fetch("https://rogerbrand.herokuapp.com/api/signup", {
			method: "post",
			headers: {
				'Accept': 'application/json,*/*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName:firstName,
				lastName:lastName,
				email:email,
				password:password
			})
		}).then(res=>res.json()).then(data=>{
			console.log(data);
			if(data.message==='Acount created'){
			document.querySelector('#arlet').style.display = 'block';
			setTimeout(()=> {
				document.querySelector('#arlet').style.display = 'none';
				document.getElementById('fname').value = '';
				document.getElementById('lname').value = '';
				document.getElementById('email').value = '';
				document.getElementById('password').value = '';
				document.getElementById('cpassword').value = '';
			}, 3000);
		window.location.href = "login.html";
			}else if(data==='Acount already exist'){
				alert('Acount already exist');
				setTimeout(()=> {
					document.querySelector('#arlet').style.display = 'none';
					document.getElementById('fname').value = '';
					document.getElementById('lname').value = '';
					document.getElementById('email').value = '';
					document.getElementById('password').value = '';
					document.getElementById('cpassword').value = '';
				}, 3000);
			}else if(data.status==400){
				alert(data.message);
				setTimeout(()=> {
					document.querySelector('#arlet').style.display = 'none';
					document.getElementById('fname').value = '';
					document.getElementById('lname').value = '';
					document.getElementById('email').value = '';
					document.getElementById('password').value = '';
					document.getElementById('cpassword').value = '';
				}, 3000);
			}
		}).catch(err=>{

		})
		/*document.querySelector('#arlet').style.display = 'block';
			setTimeout(function() {
				document.querySelector('#arlet').style.display = 'none';
				document.getElementById('fname').value = '';
				document.getElementById('lname').value = '';
				document.getElementById('email').value = '';
				document.getElementById('password').value = '';
				document.getElementById('cpassword').value = '';
			}, 3000);
		window.location.href = "login.html";*/
	}
})
