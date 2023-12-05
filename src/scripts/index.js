import users from "./users/users.js";
import products from "./products/products.js";

const app = {};

app.init = () => {

    // Vi Benytter disse funktioner til at undersøge
    // om vi skal reagere på en form eller liste.
    users.create();
    users.list();
    users.update();
    users.delete();

    // Products 
    products.create();
    products.list();
    products.update();
    products.delete();
    

};

app.init();