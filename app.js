function verifyUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("userpassword").value;

    checkUserCredentials(username, password);

   
}


function checkUserCredentials(username, password) {
    var sysUsername = "Bond";
    var sysPassword = "007";
    
    var messageBox = document.getElementById("message");
    
    if (username == sysUsername && password == sysPassword) {
        document.getElementById("output-message").innerHTML = "Correct. Logging you in..."
        messageBox.style.backgroundColor = "#03AC13";
    } else {
        document.getElementById("output-message").innerHTML = "Username or password incorrect! "
        messageBox.style.backgroundColor = "#B90E0A";
        messageBox.style.padding = "20px";
        document.getElementById("username").value = "";
        document.getElementById("userpassword").value = "";
    }
}