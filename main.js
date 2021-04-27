fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(res => document.getElementById("dogImg").src=res.message);
/*fetch('https://dog-api.kinduff.com/api/facts').then(response => response.json()).then(res => alert(res[facts]));
/*document.getElementById("dogFact").textContent*/