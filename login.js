function myFunction() {
  var popup = document.getElementById("pop-up");
  var container = document.querySelector(".main-container");
  popup.classList.add("show");
  container.classList.add("active");
}

function closeLogin() {
  var popup = document.getElementById("pop-up");
  var container = document.querySelector(".main-container");
  popup.classList.remove("show");
  container.classList.remove("active");
}

function saveData() {
  let username = document.getElementById("username").value;
  let psw = document.getElementById("password").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  // Login
  if (username == "" || psw == "") {
    alert("Enter your details.");
  } else if (
    user_records.some((v) => {
      return v.username == username && v.psw == psw;
    })
  ) {
     alert(localStorage.getItem("username") + " Login");
    let current_user = user_records.filter((v) => {
      return v.username == username && v.psw == psw;
    })[0];
    localStorage.setItem("username", current_user.username);
     window.location.href = "userpage.html";
  } else if (
    user_records.some((v) => {
      return v.username == username && v.psw != psw;
    })
  ) {
    alert("Check your password.");
    window.location.href = "index.html";
  } else {
    user_records.push({
      username: username,
      psw: psw,
    });
   
    alert("You are now registered. Login using same username and Password.");
     localStorage.setItem("username", JSON.stringify(user_records));
      window.location.href = "userpage.html";
   
  }
}
function Logout() {
  localStorage.removeItem("username");
  window.location.href = "index.html";
}
