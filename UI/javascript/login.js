const formlogin = document.getElementById('logform');

formlogin.addEventListener('submit', (e) => {

  e.preventDefault();
  var emailf = document.getElementById('email').value;
  var passwordf = document.getElementById('password').value;
  fetch("https://rogerbrand.herokuapp.com/api/login", {
    method: "post",
    headers: {
      'Accept': 'application/json,*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: emailf,
      password: passwordf
    })
  }).then(res => res.json()).then(data => {
    console.log('data are::' + data);
    if (data.data.Role === 'user') {
      document.querySelector('#arlet').style.display = 'block';
      setTimeout(function () {
        document.querySelector('#arlet').style.display = 'none';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
      }, 9000);
      localStorage.setItem("token", data.Token);
      localStorage.setItem("user", JSON.stringify(data.data));
      return window.location.href = "userprofile.html";

    } else if (data.data.Role === 'Admin') {
      document.querySelector('#arlet').style.display = 'block';
      setTimeout(function () {
        document.querySelector('#arlet').style.display = 'none';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
      }, 9000);
      localStorage.setItem("token", data.Token);
      localStorage.setItem("admin", JSON.stringify(data.data));
      return window.location.href = "dashboard.html";

    }

  }).catch(err => {
    console.log(err);
    alert("invalid Email or password");
    setTimeout(() => {
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    }, 1000);

  })

});
