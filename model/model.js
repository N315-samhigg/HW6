export function changePage(pageName) {
    console.log(pageName);
    if (pageName) {
        $.get("pages/" + pageName + ".html", (data) =>{
            $("#app").html(data);
            let pageTitle = "Jungle Cook - " + String(pageName).charAt(0).toUpperCase() + String(pageName).slice(1);
            $("title").html(pageTitle);
        }).fail((error) => {
            console.log("error " + error);
            alert("error " + error);
        });
    } else {
        $.get("pages/home.html", (data) =>{
            $("#app").html(data);
            let pageTitle = "Jungle Cook - Home";
            $("title").html(pageTitle);
        }).fail((error) => {
            console.log("error " + error);
            alert("error " + error);
        });
    }
}

export function checkLogin(email, password) {
    if (!email || !password) {
        alert("Please fill out both fields to log in."); //change to fancy alerts from class
        return false; 
    }
    console.log("Login successful for:", email);
    return true; 
}

export function register(firstName, lastName, email, password) {
    if (!firstName || !lastName || !email || !password) {
        alert("Fill out all the fields"); //change to fancy alerts
        return false;
    }
    return true;
}

let cartItems = [];

export function addToCart(item){
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export function loadCartItems(){
    const items = localStorage.getItem("cartItems");
    return items ? JSON.parse(items):[];
}

export function loadCart(){
    console.log("loading?")
    const cartItems = loadCartItems();
    console.log("load items", cartItems)
    const cartContainer = $("#cartItems");

    cartContainer.empty();
    if (cartItems.length === 0){
        cartContainer.html("<p>Cart Empty:(</p>")
        return
    } //dont really need this just messing around with it, if causes issues delete

    cartItems.forEach(item => {
        const cartItemHTML = `
        <div class="cartItem">
            <img src="${item.cover}" alt="Book Cover"/>
            <div class="itemText">
                <h3>${item.title}</h3>
                <h4>${item.price}</h4>
                <p>In Stock</p>
                <p>Quantity: 1 Change | Delete</p>
            </div>
        </div>`;
        cartContainer.append(cartItemHTML);
    });
}