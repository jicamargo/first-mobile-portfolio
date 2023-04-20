// When the user changes the any input field, the data is saved to the local storage.
// When loads the page, if there is any data in the local storage the input fields are pre-filled with this data.

let userInfo = {
  name: ''
}

let prueba = '{"name":"PEPITO PEREZ", "email":"pepito@gmail.com","msg":"this is a testmessage"}';
localStorage.setItem("userInfo", prueba);


let getInfo = localStorage.getItem("userInfo");

console.log(getInfo);
