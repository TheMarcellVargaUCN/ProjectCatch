function notifications() {
    let bell = document.getElementById('bell');
    
    if (bell.style.display === "block") {
        bell.style.display = "none";
    } else{
        bell.style.display = "block";
    }
}