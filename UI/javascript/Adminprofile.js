var users = JSON.parse(localStorage.getItem('admin'));
if (users == null) {
  window.location.href = "login.html";
} else {
  const token = localStorage.getItem('token');
  document.getElementById('usname').innerHTML = 'Admin :' + (users.firstName).toUpperCase();
  document.getElementById('changepswd').addEventListener('submit', changepass);
    function changepass(e)  {
    e.preventDefault();
    var email=users.email;
    console.log(email)
    let cpassword = document.getElementById('cpassword');
    let password = document.getElementById('password');    
    fetch('https://rogerbrand.herokuapp.com/api/user'+'/'+email,{
        method:'put',        
      headers: {       
        'Accept': 'application/json,*/*',
        'Content-Type': 'application/json', 
              
      },
      body: JSON.stringify({       
        password:cpassword.Value,
        newpassword:password.Value
      })
    })
      .then(res => res.json())
      .then(message => {
        console.log(message);
       })
      .catch(err => {
        console.log(err);

      })
  }
  function logout() {
    localStorage.clear();
    window.location.href = "login.html";
  }
  
}