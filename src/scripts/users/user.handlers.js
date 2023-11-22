import userservice from "./user.service.js";

// Form handler til Opret Formen
export const userCreateHandler = async (e) => {

    e.preventDefault();

    // Vi "Dekonstruere" et object og tager de felter vi benytter.
    // I dette tilfælde tager vi vores input felter via deres "name" value.

    const { firstname, email } = e.currentTarget.elements;

    // Nu opretter vi det object vi vil sende til serveren.
    // Et objekt der har de værdier som vores server Model/Scheme som minimum skal have
    let user = {
        name: firstname.value,
        email: email.value
    }

    // Vi sender objektet til vores produkt service som sørger for kontakten til serveren.
    const result = await userservice.createUser(user);

    // Vi ressetter <form></form> felterne.
    e.target.reset();

    // Aflevere vores resultat.
    return result;
    
};

