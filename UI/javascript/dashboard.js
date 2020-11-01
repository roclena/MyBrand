var users = JSON.parse(localStorage.getItem('admin'));
if (users == null) {
  window.location.href = "login.html";
} else {
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
  database = firebase.database();

  document.getElementById('usname').innerHTML = 'Admin :' + (users.firstName).toUpperCase();
  var messagesref = firebase.database().ref('articles');
  messagesref.on('value', gotData);
    function gotData(data) {
        
        var article = data.val();
        var keys = Object.keys(article);
        var art;
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var date = article[k].PostedDate;
            var title = article[k].Title;
            var body = article[k].Body;
            
            art=i+1;
        }
        console.log('num:'+art);
        document.getElementById('artnu').innerHTML=art;
    }
    var messagesrefuser = firebase.database().ref('users');
  messagesrefuser.on('value', gotDatauser);
    function gotDatauser(data) {
        
        var user = data.val();
        var keys = Object.keys(user);
        var nuser;
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];           
            
            nuser=i+1;
        }
        console.log('num:'+nuser);
        document.getElementById('usernu').innerHTML=nuser;
    }
    var messagesrefq = firebase.database().ref('email');
  messagesrefq.on('value', gotDataq);
    function gotDataq(data) {
        
        var qu = data.val();
        var keys = Object.keys(qu);
        var nemail;
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];           
            
            nemail=i+1;
        }
        console.log('num:'+nemail);
        document.getElementById('qnu').innerHTML=nemail;
    }
  function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
}