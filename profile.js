function photo(event) {
    const overlay = document.getElementById('overlay');
    const expandedImg = document.getElementById('expanded-img');
    expandedImg.src = event.target.src;
    overlay.style.display = 'flex';

    overlay.onclick = function() {
        overlay.style.display = 'none';
    };
}





function follow(event) {
    event.preventDefault();

    const followButton = document.getElementById("follow-btn");
    const followerCount = document.getElementById("follow-count");

    if(followButton.textContent==="Follow"){
        followButton.textContent="Following";
        followButton.style="padding: 5px 15px;border-radius: 6px;border: none;background-color: lightgrey;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
        followerCount.innerHTML="<b>271M</b> followers";
    }
    else{
        followButton.textContent="Follow";
        followButton.style="padding: 5px 20px;border-radius: 6px;border: none;background-color:#229df0 ;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;color: white;";
        followerCount.innerHTML="<b>270M</b> followers";
    }
}






document.addEventListener("DOMContentLoaded", function () {
    const moreBtn = document.getElementById("more-btn");
    const dropdown = document.getElementById("dropdown");
    moreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    });
    document.addEventListener("click", function (e) {
        if (!moreBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });
});
