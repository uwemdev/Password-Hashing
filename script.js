async function sha256(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedString = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashedString;
}

async function hashPassword() {
    const passwordInput = document.getElementById("password").value;
    const hashedPassword = await sha256(passwordInput); 

    document.querySelector('.result').style.display = '';
    document.getElementById("hashedPassword").textContent = hashedPassword;
}

function showPassword() {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";  
    } else {
        passwordInput.type = "password";   
    }
}