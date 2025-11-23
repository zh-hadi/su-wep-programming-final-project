// login form handler 
const loginForm = document.getElementById('login-form');


loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    try {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        });

        const data = await res.json();

        localStorage.setItem('authuser', JSON.stringify(data.user));

        console.log(data)

    } catch (error) {
        console.log("error happend here: "+ error);
    }
});