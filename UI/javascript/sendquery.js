var users = JSON.parse(localStorage.getItem('user'));
if (users == null) {
    window.location.href = "login.html";
} else {
    const token = localStorage.getItem('token');
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
        var body = document.getElementById('body').value;
        var subject = document.getElementById('subject').value;
        var datee = Date();
        fetch("https://rogerbrand.herokuapp.com/api/query", {
			method: "post",
			headers: {
				'Accept': 'application/json,*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
                senderFirstname:firstName,
                senderLastName:lastname,
                senderEmail:email,	
                Subject:subject,
                Mail:body			
			})
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
  
}