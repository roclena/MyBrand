var users = JSON.parse(localStorage.getItem('admin'));
if (users == null) {
  window.location.href = "login.html";
} else {
  const token = localStorage.getItem('token');
  document.getElementById('usname').innerHTML = 'Admin :' + (users.firstName).toUpperCase();
 window.addEventListener('load',(event)=>{
  fetch("https://rogerbrand.herokuapp.com/api/article")
  .then(res=>res.json())
  .then(data=>{
    document.getElementById('artnu').innerHTML=data.Articles.length;
  })

 })
 
    window.addEventListener('load',(Event)=>{
      fetch("https://rogerbrand.herokuapp.com/api/query", {
        method: "get",
        headers: {
            'Accept': 'application/json,*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(res=>res.json())
    .then(data=>{
      document.getElementById('qnu').innerHTML=data.queries.length;
    })
    })
  function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
}