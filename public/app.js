document.getElementById('registerForm').addEventListener('submit', registerUser);
document.getElementById('loginForm').addEventListener('submit', loginUser);

async function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const result = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    }).then((res) => res.json());

    if (result.error) {
        alert(result.error);
    } else {
        alert('Registration successful');
    }
}

async function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const result = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then((res) => res.json());

    if (result.error) {
        alert(result.error);
    } else {
        alert('Login successful');
        // Optionally, redirect to a dashboard or another page
        // window.location.href = '/dashboard';
    }
}
