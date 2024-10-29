function pageStatus() {
    let pageStatus = document.getElementById("status");
    if(pageStatus.textContent == "MAINTAINED"){
        pageStatus.style.backgroundColor = "green";
    } else {
        pageStatus.style.backgroundColor = "darkred";
    }
}
