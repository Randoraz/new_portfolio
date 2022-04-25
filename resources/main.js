const image = document.getElementById("portrait-img");

const wink = () => { image.src = "./resources/images/Raquel Portrait - Winkle_1280x1280 - Assinado.png"; }
const openEye = () => { image.src = "./resources/images/Raquel Portrait 1280x1280 - Assinado.jpg"; }

image.onmouseenter = wink;
image.onmouseleave = openEye;