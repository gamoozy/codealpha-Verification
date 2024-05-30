function verifyCode() {
    var codeInput = document.getElementById('codeInput').value;
    var verificationResult = document.getElementById('verificationResult');

    if (codeInput === "") {
        alert("Please enter a code");
        document.title = "Please enter a code";
    } else if (codeInput === "CA/JN1/8897") {
        verificationResult.textContent = "Certificate verified.";
    } else {
        verificationResult.textContent = "Certificate not verified.";
    }
}