const hardcodedCredentials = {
    'user1': 'password1',
    'user2': 'password2'
};

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (hardcodedCredentials[username] && hardcodedCredentials[username] === password) {
        document.getElementById('message').textContent = 'Login successful!';
        window.location.href = 'welcome.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
}