const menuEmail = document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");
const burguerMenuIcon= document.querySelector(".menu"); //Menú hamburguesa del mobile"
const menuCarritoIcon= document.querySelector(".navbar-shopping-cart"); //Menú minicarrito
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu= document.querySelector(".mobile-menu"); //Menú que desaparecerá en modo mobile
const shoppingCartContainer= document.querySelector("#shoppingCartContainer"); //Menú del detalle de producto
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail")

menuEmail. addEventListener("click", toggleDesktopMenu);
burguerMenuIcon. addEventListener ("click", toggleMobileMenu);
menuCarritoIcon. addEventListener ("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click",closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

    if (!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}


function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    const isMobileClosed = mobileMenu.classList.contains ("inactive")

    if (!isMobileClosed) {
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClose = productDetailContainer.classList.contains ("inactive")

    if (!isProductDetailClose) {
        productDetailContainer.classList.add("inactive");
    }


    shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

const productList = [];//Creamos un array para agregar datos//
productList.push({
    name: "Vinyl",
    price: 120.00,
    image: "https://images.pexels.com/photos/1374557/pexels-photo-1374557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: "CD",
    price: 120.00,
    image: "https://images.pexels.com/photos/9401772/pexels-photo-9401772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: "Guitar",
    price: 120.00,
    image: "https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: "Headphones",
    price: 120.00,
    image: "https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});


/* <div class="product-card">
    <img src="https://images.pexels.com/photos/1374557/pexels-photo-1374557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
        <div class="product-info">
            <div>
                <p>120,00</p>
                <p>Vinyl</p>
                </div>
                <figure>
                    <img src="/icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>  */

    function renderProducts(arr){
        for (product of arr){  //Por cada "producto" de nuestra Litsa de Productos...

            //Crea la maquetación del HTML
            const productCart = document.createElement("div"); //Crea el contenedor DIV
            productCart.classList.add("product-card"); //Le añade la clase product-card al div.

        
            // product = {NAME,PRICE,IMAG} --> product.img
        
            const productImg = document.createElement("img"); //crea el elemento img
            productImg.setAttribute("src",product.image); //Se le agrega el atributo a la img con la lista de productos del array que se hizo arriba
            productImg.addEventListener("click", openProductDetailAside); //Se agrega una función que abre el detalle del producto al darle click a la imagen.

            const productInfo = document.createElement("div"); //Crea el contenedor div
            productInfo.classList.add("product-info"); //Le añade la clase-product info al productInfo(div)
        
            const productInfoDiv = document.createElement("div");//Crea el lemento div vacío
        
            const productPrice = document.createElement("p");//Crea el párrafo <p>
            productPrice.innerText = "$" + product.price; //Le añade el precio al párrafo con la lista de productos del array que se hizo arriba
            const productName = document.createElement("p");//Crea el párrafo <p>
            productName.innerText = product.name;//Le añade el nombre al párrafo con la lista de productos del array que se hizo arriba
        
            
            //APPENDCHILD A LA MAQUETACIÓN DE HTML
            const productInfoFigure = document.createElement("figure");//crea el <figure>
            const productImgCart = document.createElement("img");//crea el elemento img
            productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")//Le añade el atributo de la imagen (el src del minicarrito)
        
            productInfoFigure.appendChild (productImgCart);
            productInfoDiv.appendChild(productPrice)        //Se le apendió el productPrice al productInfoDiv
            productInfoDiv.appendChild(productName) //Se le apendió el productName al productInfoDiv
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
        
            productCart.appendChild(productImg);
            productCart.appendChild(productInfo);
        
            cardsContainer.appendChild(productCart);
        }   
    }

    renderProducts(productList);//Se manda llamar a la función renderProducts con la lista (ProductList), pero esta lista se puede cambiar de acuerdo a lo que necesites. 

