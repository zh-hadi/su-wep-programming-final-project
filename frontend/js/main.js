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
                <input type="text" name="price[]">
            </div>
            <div class="form-item-single">
                <input type="text" name="qty[]">
            </div>
        </div>
    `;

    

    btn.parentElement.insertAdjacentHTML("beforebegin", html);
    // alert(itemCount);

}