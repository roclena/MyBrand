  
var users = JSON.parse(localStorage.getItem('user'));
if(users==null){
  window.location.href = "login.html";
}else{
  const token = localStorage.getItem('token');
  document.getElementById('usname').innerHTML = 'Welcome :' + (users.firstName).toUpperCase();
document.getElementById('cuserpass').addEventListener('submit', upuserform);

function upuserform(e) {
  e.priventDefault();
  var cupassword = document.getElementById('cpassword').Value;
  var newpassword = document.getElementById('password').Value;
  var copassword = document.getElementById('copassword').Value;

  console.log("amakuru");
}
function logout(){
  localStorage.clear();
window.location.href = "login.html";
}
}