
var users = JSON.parse(localStorage.getItem('user'));
if (users == null) {
    window.location.href = "login.html";
}
else {   
    
    document.getElementById('usname').innerHTML = 'Welcome:' + (users.firstName).toUpperCase();
    window.addEventListener('load', (event) => {   
        fetch("https://rogerbrand.herokuapp.com/api/article")
    .then(res => res.json())
    .then(res => {
        
            console.log(res);
            //var keys=res.Articles;
            var keys = res.Articles;
            console.log(keys);
            for (var i = 0; i < keys.length; i++) {
                
                var date = res.Articles[i].CreateDate;
                var title = res.Articles[i].Title;
                var body = res.Articles[i].Subject;
                var comment=res.Articles[i].comment;
                var table = document.getElementById('mytable'),
                    newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2);
                    cell4 = newRow.insertCell(3);
                cell1.innerHTML = date;
                cell2.innerHTML = title;
                cell3.innerHTML = body;
                cell4.innerHTML=comment;
            }
        
       
            
       
    }).catch(err=>{
        console.log(err);
    })
})
    function logout() {
        localStorage.clear();
        window.location.href = "login.html";
    }
}