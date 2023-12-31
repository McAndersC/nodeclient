const userservice = {};


// Opret Bruger.
userservice.createUser = async (user) => {

    // Send the user object to the server.
    return fetch('http://localhost:3000/user', { 
        method: 'POST', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 
    
};

// Hent Alle brugere.
userservice.getUsers = async () => {

    return fetch('http://localhost:3000/users')
        .then((response) => response.json())

}

userservice.getUserById = async (id) => {

    return fetch('http://localhost:3000/user?id=' + id).then(res => res.json())


}

userservice.updateUser = async (user) => {


    // Send the user object to the server.
    return fetch('http://localhost:3000/user', { 
        method: 'PUT', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

}

userservice.deleteUser = async (id) => {


    // Send the user object to the server.
    return fetch('http://localhost:3000/user?id='+id, { 
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

}

userservice.updateUserProfile = async (formData) => {

    return fetch('http://localhost:3000/user/profile', {
        method: 'POST', 
        body: formData
    }).then((response) => response.json()); 


}

export default userservice;