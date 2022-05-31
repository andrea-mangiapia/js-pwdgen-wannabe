/* 
GENERATORE DI PASSWORD
*/
// Chiedo il nome all'utente
const myName = prompt ('Dimmi il tuo nome')

// Chiedo il cognome all'utente
const myLastname = prompt ('Dimmi il tuo cognome')

// Chiedo il suo colore preferito
const myFavoriteColor = prompt ('Dimmi il tuo colore preferito')

// Genero una password con Nome, Cognome, Colore preferito e numero 21 finale
const userMessage = myName + myLastname + myFavoriteColor + '21'

// Stampo in pagina
document.getElementById('pswGenerator').innerHTML = userMessage;
