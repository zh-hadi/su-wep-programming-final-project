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

            // console.log(data)
            if (data.status === true) {
                window.location.href = data.url;
            }
    
        } catch (error) {
            console.log("error happend here: "+ error);
        }
    });
}

// register handler 
const registerFrom = document.getElementById('register-from');
if(registerFrom){
    registerFrom.addEventListener('submit',async (e)=> {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
    
        const items = [];
        const email = formData.get('email');
        const password = formData.get('password');
        const cPassword = formData.get('c-password');
        const firstname = formData.get('firstname');
        const lastname = formData.get('lastname');
       
        const errorMessage = document.getElementById('error-message');
        if (password !== cPassword) {
            errorMessage.style.display = "block";      
            errorMessage.innerText = "Password not match!"; 
            return;
        } else {
            errorMessage.style.display = "none";
            errorMessage.innerText = "";
        }

        // const total = document.getElementById('total-pirce-show').innerText;
    
        const payload = {
            firstname,
            lastname,
            email,
            password,
        };

        // console.log(payload)

        try {
            const res = await fetch('http://localhost:3000/api/auth/register', {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });
    
            const data = await res.json();

            console.log(data)
            if (data.status === true) {
                window.location.href = data.url;
            }else{
                errorMessage.style.display = "block";      
                errorMessage.innerText = data.message; 
            }
    
        } catch (error) {
            console.log("error happend here: "+ error);
        }

    })
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
                qty: qtys[i]
            });
        }

        const total = document.getElementById('total-pirce-show').innerText;
    
        const payload = {
            userID: getUser().id,
            date: date,
            items,
            total: total
        };

        try {
            const res = await fetch('http://localhost:3000/api/bazars', {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });
    
            const data = await res.json();
    
    
            if(data.status){
                window.location.href = "/bazars";
            }
    
        } catch (error) {
            console.log("error happend here: "+ error);
        }
    })
}


// bazar edit form 
const bazarEditForm = document.getElementById('bazar-edit-form');
if(bazarEditForm){
    bazarEditForm.addEventListener("submit", async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
    
        const items = [];
        const date = formData.get('date');
        const bazarId = formData.get('bazar_id');
        const names = formData.getAll('name[]');
        const prices = formData.getAll('price[]');
        const qtys = formData.getAll('qty[]');

        for (let i = 0; i < names.length; i++) {
            items.push({
                name: names[i],
                price: Number(prices[i]),
                qty: qtys[i]
            });
        }

        const total = document.getElementById('total-pirce-show').innerText;
    
        const payload = {
            date: date,
            items,
            total: total
        };

        // console.log(payload);

        try {
            const res = await fetch('http://localhost:3000/api/bazars/update/'+bazarId, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });
    
            const data = await res.json();
    
            if(data.status){
                window.location.href = "/bazars";
            }
    
           
    
        } catch (error) {
            console.log("error happend here: "+ error);
        }
    })
}

// logout method
const logoutBtn = document.getElementById("logout-btn");
if(logoutBtn){
    logoutBtn.addEventListener('click', async ()=> {
        try {
            const res =await fetch('http://localhost:3000/api/auth/logout',{
                method: "POST",
                headers: { "Content-Type": "application/json"},
            });

            const data = await res.json();

            console.log(data);

            if (data.status === true) {
                localStorage.removeItem('authuser');
                window.location.href = data.url;
            }
        }catch(err){
            console.log("error happend: "+ err)
        }
    })
}

// delete bazar
const deleteBazar= async (btn, id) => {
    const tr = btn.closest("tr");


    try{
        const res =await fetch('http://localhost:3000/api/bazars/'+id,{
            method: "DELETE",
            headers: { "Content-Type": "application/json"},
        });

        const data = await res.json();

        console.log(data);

        if (data.status === true) {
           if(tr){
            tr.remove();
           }
        }
    }catch(err) {
        console.log("delete item error happend: "+ err)
    }
}