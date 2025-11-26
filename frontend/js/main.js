const addItems = (e, btn) => {
    e.preventDefault();
    let itemCount = Number(btn.dataset.itemCount);
    itemCount++;
    btn.dataset.itemCount = itemCount;
    let html = `
        <div class="form-item-all">
            <div class="form-item-single">
                <input class="item-serial" type="text" value="${itemCount}">
            </div>
            <div class="form-item-single">
                <input type="text" name="name[]">
            </div>
            <div class="form-item-single">
                <input class="total_price_cal" onchange="calculateTotalPrice()" type="text"  name="price[]">
            </div>
            <div class="form-item-single">
                <input type="text" name="qty[]">
            </div>
        </div>
    `;

   

    btn.parentElement.insertAdjacentHTML("beforebegin", html);
    // alert(itemCount);

}

// 
const calculateTotalPrice = () => {
    let total = 0;
    document.querySelectorAll('.total_price_cal').forEach((input)=> {
        total += parseFloat(input.value) || 0;
    });
    document.getElementById('total-pirce-show').innerText = total;
}

function formatDate(isoDate) {
    const date = new Date(isoDate);

    const day = date.getDate(); 
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

function formatDateForBazar(dateString) {
    return dateString.split("T")[0];
}


const getUser = () => {
    let user = JSON.parse(localStorage.getItem('authuser'));
    return user;
}
