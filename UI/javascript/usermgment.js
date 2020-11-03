var users = JSON.parse(localStorage.getItem('admin'));
if (users == null) {
  window.location.href = "login.html";
} else {
  const token = localStorage.getItem('token');
    
    window.addEventListener('load', (event) => {
        fetch("https://rogerbrand.herokuapp.com/api/users", {
            method: "get",
            headers: {
                'Accept': 'application/json,*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(res => res.json())
            .then(res => {           
                console.log(res);                
                var keys = res;
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {         
                    
                    var name = res[i].firstName + '    ' + res[i].lastName;
                    var email = res[i].email;
                    var role=res[i].Role;                   
                    var table = document.getElementById('usertable'),
                    newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                     cell2 = newRow.insertCell(1),
                     cell3 = newRow.insertCell(2);
                     cell4=newRow.insertCell(3);                                       
                    cell1.innerHTML = i + 1;
                    cell2.innerHTML = name.toUpperCase();
                    cell3.innerHTML = email;  
                    cell4.innerHTML=role;                 
                   
                }
            }).catch(err => {
                console.log(err);
            })
    })
    const formdeluser = document.getElementById('userform');
    var email=document.getElementById('email');
formdeluser.addEventListener('submit', (e) => {
  e.preventDefault();
 
  console.log(email.value);
  fetch("https://rogerbrand.herokuapp.com/api/user"+'/'+email.value, {
            method: "delete",
            headers: {
                'Accept': 'application/json,*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
           
        }).then(res=>res.json()).then(message=>{
            console.log(message);
            alert(message);
            location.reload();
        }).catch(err=>{
            console.log(err);
        })
})

  function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

}
    
