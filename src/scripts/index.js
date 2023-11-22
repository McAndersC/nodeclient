import users from "./users/users.js";

const app = {};

app.init = () => {

    // Vi Benytter disse funktioner til at undersøge
    // om vi skal reagere på en form eller liste.
    users.create();
    users.list();

};

app.init();