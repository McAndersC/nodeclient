const productservice = {};


// Opret Produkt.
productservice.createProduct = async (user) => {

    // Send the user object to the server.
    return fetch('http://localhost:3000/product', { 
        method: 'POST', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 
    
};

productservice.getProducts = async () => {

    return fetch('http://localhost:3000/products')
        .then((response) => response.json())

}

productservice.getProductById = async (id) => {

    console.log('getProductById', id);

    return fetch('http://localhost:3000/product?id=' + id).then(res => res.json())


}

productservice.updateProduct = async (product) => {


    // Send the user object to the server.
    return fetch('http://localhost:3000/product', { 
        method: 'PUT', 
        body: JSON.stringify(product), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

}

productservice.deleteProduct = async (id) => {


    // Send the user object to the server.
    return fetch('http://localhost:3000/product?id='+id, { 
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

}


productservice.updateProductImage = async (formData) => {

    return fetch('http://localhost:3000/product/image', {
        method: 'POST', 
        body: formData
    }).then((response) => response.json()); 


}

export default productservice;