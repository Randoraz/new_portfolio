//Elements
const image = document.getElementById("portrait-img");

const ollivandersButton = document.getElementById("ollivanders-button");
const adviceButton = document.getElementById("advice-button");
const excurtionButton = document.getElementById("excurtion-button");



//About Me image wink
const wink = () => { image.src = "./resources/images/Raquel Portrait - Winkle_1280x1280 - Assinado.png"; }
const openEye = () => { image.src = "./resources/images/Raquel Portrait 1280x1280 - Assinado.jpg"; }

image.onmouseenter = wink;
image.onmouseleave = openEye;



//See More button of the Projects section
const seeMoreButton = e => {
    let button = e.target;
    let div = document.getElementById(button.parentElement.id);
    let description = div.querySelector(".dp");

    if(description.style.display !== "block") {
        description.style.display = "block";
        button.innerHTML = "Hide &uArr;";
    } else {
        description.style.display = "none";
        button.innerHTML = "See more &dArr;";
    }
}

ollivandersButton.onclick = seeMoreButton;
adviceButton.onclick = seeMoreButton;
excurtionButton.onclick = seeMoreButton;