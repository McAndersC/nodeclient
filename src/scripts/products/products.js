import { productCreateHandler, productUpdateHandler, productDeleteHandler, productUpdateImage } from "./product.handlers.js";
import productservice from "./product.service.js";

const products = {}

products.create = () => {

    const form = document.querySelector('#productCreateForm');

    const createProduct = (e) => {

        
        productCreateHandler(e).then( (res) => {
    
            console.log('Server resultat', res)
    
        })
    
    }

    if(form)
    {
        form.addEventListener('submit', createProduct);
        
    }
};

products.list = async () => {

    // Finder Elementet
    const productsList = document.querySelector('.products-list');
 
     // Template for en produkt række <tr></tr> i vores <table>
    const listTmpl = (product) => {

        const productImage = `http://localhost:3000/products/${product.image}` 

        return `<tr>
            <td><img src="${productImage}" width="100" /> </td>
            <td>${product.title} </td>
            <td>${product.price}</td>
            <td>${product.recommended}</td>
            <td>${product.discountInPercent}</td>
            <td>
                <a href="/products/update.html?id=${product._id}">UPD</a>
                <a href="/products/delete.html?id=${product._id}">DEL</a>
            </td>
        </tr>`
    }

    // Hvis listen er tilstede henter vi alle produkter og skriver dem i listen.
    if(productsList)
    {
        // Henter produkter.
        let productData = await productservice.getProducts();

        let list = productData.data;
        // Looper over produkter og indsætter HTML templaten.
        // Altid som det sidste elemnent lige før </table> slutter "beforeend".
        list.forEach( (product) => {
    
            productsList.insertAdjacentHTML('beforeend', listTmpl(product))
            
        })

    }
  
};

products.update = async () => {

    const form = document.querySelector('#productUpdateForm');
    const productsForm = document.querySelector('#productForm');

    const updateProduct = (e) => {

        productUpdateHandler(e).then( (res) => {
    
            console.log('Server resultat', res)
    
        }) 
    
    } 

    const updateImage = (e) => {

  
        productUpdateImage(e).then( (res) => {
    
            console.log('Server resultat', res)
    
        }) 

    }

    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id');

    if(form) {

        let result = await productservice.getProductById(id);
        let product = result.data;

        if(product) {

            form.elements['title'].value = product.title;
            form.elements['price'].value = product.price;
            form.elements['id'].value = product._id;
            form.elements['recommended'].checked = product.recommended;
            form.elements['discountInPercent'].value = product.discountInPercent;
            form.addEventListener('submit', updateProduct)

        }
        
        if(productsForm) {

            let imageElem = document.querySelector('#productImage');
    
            // Udfyldet Form og Billede
            productsForm.elements['id'].value = product._id;
            imageElem.src = 'http://localhost:3000/products/' + product.image;
    
            productsForm.addEventListener('change', updateImage)
    
        }
    }



};

products.delete = async () => {

    const form = document.querySelector('#productDeleteForm');
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id');

    const deleteProduct = (e) => {

        productDeleteHandler(e).then( (res) => {
    
            console.log('Server resultat', res)
    
        }) 
    
    } 

    if(form) {

        let result = await productservice.getProductById(id);
        let product = result.data;

        if(product) {

            form.elements['id'].value = product._id;
            form.addEventListener('submit', deleteProduct)

        }

    }
};

export default products;