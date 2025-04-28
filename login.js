document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit yang biasa

    const validEmail = "Rkusuma@gmail.com";
    const validPassword = "___...___"; // Password yang valid

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Reset pesan error
    errorMessage.textContent = '';

    if (!email || !password) {
        errorMessage.textContent = "Email dan password tidak boleh kosong";
    } else if (email !== validEmail && password === validPassword) {
        errorMessage.textContent = "Email anda salah";
    } else if (email === validEmail && password !== validPassword) {
        errorMessage.textContent = "Password anda salah";
    } else if (email === validEmail && password === validPassword) {
        // Jika email dan password benar, redirect ke home.html
        window.location.href = "home.html";
    }
});
