import { userCreateHandler, userUpdateHandler } from "./user.handlers.js";
import userservice from "./user.service.js";

const users = {};

// Undersøger om en "Create" <form> er tilstede.

// Funktion til at oprette vores bruger.
const createUser = (e) => {

    userCreateHandler(e).then( (res) => {

        console.log('Server resultat', res)

    })

}

const updateUser = (e) => {


    userUpdateHandler(e).then( (res) => {


        console.log('Server resultat', res)

    } ) 


} 

users.create = () => {

    const form = document.querySelector('#createForm');
    
    if(form)
    {
        form.addEventListener('submit', createUser);
        
    }

};

users.list = async () => {

    // Finder Elementet
    const userList = document.querySelector('.user-list');
 
     // Template for en user række <tr></tr> i vores <table>
    const listTmpl = (user) => {
        return `<tr>
            <td>${user.name} </td>
            <td>${user.email}</td>
            <td>
                <a href="/users/update.html?email=${user.email}&id=${user.id}">UPD</a>
                <a href="/users/delete.html?email=${user.email}&id=${user.id}">DEL</a>
            </td>
        </tr>`
    }

    // Hvis listen er tilstede henter vi alle brugere og skriver dem i listen.
    if(userList)
    {
        // Henter brugere.
        let userData = await userservice.getUsers();

        // Looper over alle brugere og indsætter HTML templaten.
        // Altid som det sidste elemnent lige før </table> slutter "beforeend".
        userData.forEach( (user) => {
    
            userList.insertAdjacentHTML('beforeend', listTmpl(user))
            
        })

    }
  
};

users.update = async () => {

    const form = document.querySelector('#updateForm');

    if(form) {

        const urlParams = new URLSearchParams(window.location.search)
        const id = urlParams.get('id');

        let result = await userservice.getUserById(id);
        let user = result.data;
  
        if(user) {

            form.elements['email'].value = user.email;
            form.elements['firstname'].value = user.name;
            form.elements['id'].value = user.id;

            form.addEventListener('submit', updateUser)

            
        }


    }



}

export default users;