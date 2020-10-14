 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional  
  var firebaseConfig = {
    apiKey: "AIzaSyCttetuD8PgZQXFCiDQ7w0qcI4PfqknbVM",
    authDomain: "myweb-64a8a.firebaseapp.com",
    databaseURL: "https://myweb-64a8a.firebaseio.com",
    projectId: "myweb-64a8a",
    storageBucket: "myweb-64a8a.appspot.com",
    messagingSenderId: "605134341919",
    appId: "1:605134341919:web:df86688d8634978bbf122a",
    measurementId: "G-XDE7ZTEJLS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database=firebase.database();
  var ref=database.ref('users');
  function loginf(){
  ref.on('value',gotdata);
  }
  var uss='';
  var validem=false;
  function gotdata(data){
    
    var emailf=document.getElementById('email').value;
    var passwordf=document.getElementById('password').value;
    
    //console.log(data.val());
    var users=data.val();
    var keys=Object.keys(users);   
 
    for(var i=0; i<keys.length;i++){
      var k=keys[i];
      var email=users[k].email;
      var password=users[k].password;
      if(email==emailf && password==passwordf){
        console.log('emails'+email+ ':'+emailf);
        console.log('pass:'+password+':'+passwordf);
        uss=users[k];
        validem=true;        
        break;
      }
      
    }
    if(validem==true){
      console.log(uss);
      document.querySelector('#arlet').style.display='block';
	setTimeout(function(){
    
		document.querySelector('#arlet').style.display='none';		
		document.getElementById('email').value='';
		document.getElementById('password').value='';	
  },9000);
  
  window.location.href = "userprofile.html";
  localStorage.setItem("user", JSON.stringify(uss));
    }else{ 
      document.querySelector('#arletfail').style.display='block';
    setTimeout(function(){
      document.querySelector('#arletfail').style.display='none';     
      document.getElementById('email').value='';
      document.getElementById('password').value='';      
    },3000);
    }

  }
  
  

