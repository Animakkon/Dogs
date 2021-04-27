/*document.getElementById("dogImg").src= fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json()).then(res => res["message"]);
*/
let trying = fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json());

console.log(trying);
