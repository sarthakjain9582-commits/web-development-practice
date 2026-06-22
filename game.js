const btn = document.getElementById("change color")

btn.addEventListener("Click")

function changeButtonColor() {
    console.log("button is clicked");
    const randomColor = getRandomColor(); 
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    // console.log(letters[6]);
    let color = "#";
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
} 