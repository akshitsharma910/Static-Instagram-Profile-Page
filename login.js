    const slideshow = document.querySelector('.slideshow');        //login page slideshow
    const images = slideshow.querySelectorAll('img'); 
    let currentIndex = 0;
    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
        }
        setInterval(showNextImage, 3000);







    function authenticate(e){                                                   //id pass making and saving
            e.preventDefault();

            const username = document.getElementById("name").value;
            const password = document.getElementById("pass").value;
        
            const storedUser  = JSON.parse(localStorage.getItem(username));
        
            if (storedUser  && storedUser .pass === password) {
                window.location.href = "profile.html"; 
            } else {
                alert("Invalid Username Or Password ! Try Again !")
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



    


    
    const username = document.getElementById("name");                            // changing of color of submit button
    const password = document.getElementById("pass");
    const submitBtn = document.getElementById("login-btn");
    
    submitBtn.style.backgroundColor = "#4cb5f9";
    
    password.addEventListener("input", () => {
      const readyToSubmit = password.value.length >= 6 && username.value.length >= 1;
      submitBtn.style.backgroundColor = readyToSubmit ? "#229df0" : "#4cb5f9";
    });
    
    submitBtn.addEventListener("mouseover", () => {
      if (password.value.length >= 6) {
        submitBtn.style.backgroundColor = "#327be2";
      }
    });
    
    submitBtn.addEventListener("mouseout", () => {
      submitBtn.style.backgroundColor = password.value.length >= 6 ? "#229df0" : "#4cb5f9";
    });







