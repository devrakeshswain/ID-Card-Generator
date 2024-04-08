const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
const download = document.getElementById("down");

canvas.width = 400;
canvas.height = 250;

const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

preview.addEventListener("click", prev);

function prev() {
    let inName = document.getElementById("inName").value;
    let inBirth = document.getElementById("inBirth").value;
    let inField = document.getElementById("inField").value;
    let inYear = document.getElementById("inYear").value;
    let inNum = document.getElementById("inNum").value;

    const name = document.getElementById("name");
    const birth = document.getElementById("birth");
    const field = document.getElementById("field");
    const num = document.getElementById("num");

    name.innerHTML = inName;
    birth.innerHTML = inBirth;
    field.innerHTML = inField;
    num.innerHTML = "ID No." + inNum;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#159";
    ctx.fillRect(0, 0, canvas.width, 56);
    ctx.fillStyle = "#fff";
    ctx.fillText("Campus Card", 10, 25);
    ctx.font = "16px Arial";
    ctx.fillText("Undergraduate", 15, 45);
    ctx.fillStyle = "#000";
    ctx.fillText(name.innerHTML, 110, 90);
    ctx.fillText(birth.innerHTML, 110, 115);
    ctx.fillText(field.innerHTML, 110, 140);
    ctx.fillText(num.innerHTML, 110, 165);

    const img = document.getElementById("imgDisplayed");
    ctx.drawImage(img, 250, 60, 100, 100);
}

download.addEventListener("click", function () {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
});

function loadImage(event) {
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
}
