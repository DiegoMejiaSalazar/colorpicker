function buttonClicked() {
    const colors = ['#760CE8', '#4782B1', '#E8890C', '#2c3e6c', '#19191b'];
    const selectedColor = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("body").style.backgroundColor = selectedColor;
    document.getElementById("colorcode").innerHTML = selectedColor;
    document.getElementById("colorcode").style.color = selectedColor;
}