// login form handler 
const loginForm = document.getElementById('login-form');
if(loginForm){
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
}

// add bazar 
const bazarAddForm = document.getElementById('bazar-add-form');
if(bazarAddForm){
    bazarAddForm.addEventListener("submit", async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
    
        const items = [];
        const date = formData.get('date');
        const names = formData.getAll('name[]');
        const prices = formData.getAll('price[]');
        const qtys = formData.getAll('qty[]');

        for (let i = 0; i < names.length; i++) {
            items.push({
                name: names[i],
                price: Number(prices[i]),
                qty: Number(qtys[i])
            });
        }
    
        const payload = {
            date: date,
            items
        };

        try {
            const res = await fetch('http://localhost:3000/api/bazar', {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });
    
            const data = await res.json();
    
    
            console.log(data)
    
        } catch (error) {
            console.log("error happend here: "+ error);
        }
    })
}