let temprature = () => {
    let opt = document.querySelector("#unit");
    let display = document.querySelector(".value");
    var a = document.querySelector(".takeval").value;
    if (opt.value == "Celsius") {
        let F = a * (9 / 5) + 32;
        display.innerHTML = F.toFixed(4) + " F";
    } 
    else 
    {
        let C = (a - 32) * (5 / 9);
        display.innerHTML = C.toFixed(4) + " ºC";
    }
}