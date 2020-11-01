 
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
            }else if(data.status===400){
                alert(data.message);
            }
        }).catch(err=>{
            console.log(err);
        })
      
    }
   
    //retrieve//
   /* messagesref.on('value', gotData);
    function gotData(data) {
        var article = data.val();
        var keys = Object.keys(article);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var date = article[k].PostedDate;
            var title = article[k].Title;
            var body = article[k].Body;
            var table = document.getElementById('mytable'),
                newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2);
            cell1.innerHTML = date;
            cell2.innerHTML = title;
            cell3.innerHTML = body;
        }
    }
    //-------select---------
    var table = document.getElementById('mytable'), rindex;
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rindex = this.rowIndex;
            console.log(rindex);
        }
    }
    function logout() {
        localStorage.clear();
        window.location.href = "login.html";
    }*/
}