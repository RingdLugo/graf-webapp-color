document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorPicker = document.getElementById("colorPicker");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let hex = `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`.toUpperCase();
        
        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        hexCode.textContent = hex;
        colorPicker.value = hex;

        // Sincronizar valores numéricos con los controles deslizantes
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateSliders() {
        let r = redInput.value;
        let g = greenInput.value;
        let b = blueInput.value;

        red.value = r;
        green.value = g;
        blue.value = b;

        updateColor();
    }

    function updateFromPicker() {
        let hex = colorPicker.value;
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        red.value = r;
        green.value = g;
        blue.value = b;
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        updateColor();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);
    redInput.addEventListener("input", updateSliders);
    greenInput.addEventListener("input", updateSliders);
    blueInput.addEventListener("input", updateSliders);
    colorPicker.addEventListener("input", updateFromPicker);
});
