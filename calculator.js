function mike() {
    var a = parseInt(document.querySelector("#num1").value);
    var b = parseInt(document.querySelector("#num2").value);
    var operate = document.querySelector("#operator").value;
    var calculate;

    if (operate == "add"){
        calculate = a + b;
    } else if (operate == "subtract") {
        calculate = a - b;
    }  else if (operate == "mult") {
        calculate = a * b;
    }   else if (operate == "divide") {
        calculate = a / b;
    }

    document.querySelector("#result").innerHTML = calculate;
}