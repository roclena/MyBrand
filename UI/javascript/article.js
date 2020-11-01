 
var users = JSON.parse(localStorage.getItem('admin'));
if (users == null) {
    window.location.href = "login.html";
} else {
    const token = localStorage.getItem('token');
    document.getElementById('usname').innerHTML = 'Admin :' + (users.firstName).toUpperCase();
    document.getElementById('articleform').addEventListener('submit', submitform);

    function submitform(e) {
        e.preventDefault();
        var title = document.getElementById('title').value;
        var subject = document.getElementById('subject').value;
        fetch("https://rogerbrand.herokuapp.com/api/article", {
			method: "post",
			headers: {
				'Accept': 'application/json,*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				Title:title,
				Subject:subject				
			})
		}).then(res=>res.json()).then(data=>{
            console.log(data);
            if(data.message==='Article Posted'){
            alert(data.message);
            location.reload();
            }else if(data.status===400){
                alert(data.message);
                location.reload();
            }
        }).catch(err=>{
            console.log(err);
        })
      
    }
   
    //retrieve//
 
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
}