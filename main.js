function cal() {

    var v1 = parseInt(document.querySelector("#value1").value);
    var v2 = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "add") {
        calculate = v1 + v2;
    } else if (op == "sub") {
        calculate = v1 - v2;
    } else if (op == "mul") {
        calculate = v1 * v2;
    } else if (op == "div") {
        calculate = v1 / v2;
    }
    document.querySelector("#results").innerHTML = "Result: " + calculate;
}

