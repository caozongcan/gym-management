let users = [];

document.getElementById('register-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    users.push({ username, password });
    alert('Registration successful!');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

document.getElementById('login-btn').addEventListener('click', () => {
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
    if (user) {
        alert('Login successful!');
        document.getElementById('courses').style.display = 'block';
        document.getElementById('course-list').innerHTML = `<li>Yoga</li><li>Weight Training</li><li>Cardio</li>`;
    } else {
        alert('Invalid username or password!');
    }
});