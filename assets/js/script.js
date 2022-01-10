function notifications() {
    let bell = document.getElementById('bell');
    
    if (bell.style.display === "block") {
        bell.style.display = "none";
    } else{
        bell.style.display = "block";
    }
}

function selectedButton() {
    let empty = document.getElementById('empty-el');
    let circle = document.getElementById('selected-el');
    
    if (circle.style.display === "block") {
        circle.style.display = "none";
        empty.style.display = "block";
    } else{
        circle.style.display = "block";
        empty.style.display = "none";
    }
}