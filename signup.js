
function localUser(e) {                                                                    // id and pass making
    e.preventDefault();
  
    const numbermail = document.getElementById("numbermail").value;
    const pass = document.getElementById("pass").value;
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
  

    if (!numbermail || !pass || !fullname || !username) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const user = {
      numbermail,
      pass,
      fullname,
      username,
    };

    localStorage.setItem(username, JSON.stringify(user));
  
    const storedUser = localStorage.getItem(username);
    if (storedUser) {
      window.location.href="login.html";
    } else {
      console.error("Failed to store user data.");
    }

  }










  const showbtn = document.getElementById("show");                // show button visibility
  const passbox = document.getElementById("pass");
  passbox.addEventListener("input", () => {
      if (passbox.value.trim() !== "") {
          showbtn.style.visibility = "visible";
      } else {
          showbtn.style.visibility = "hidden";
      }
  });
  passbox.addEventListener("blur", () => {
      if (passbox.value.trim() === "") {
          showbtn.style.visibility = "hidden";
      }
  });








  function togglePassword() {                                                    //password hidden and showing
    const currentType = passbox.getAttribute('type');
    const newType = currentType === 'password' ? 'text' : 'password';
    passbox.setAttribute('type', newType);
}
showbtn.addEventListener("click", function(e){
    e.preventDefault();
    togglePassword();
});