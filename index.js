fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens").then(response => response.json()).then(result => {

console.log(result);

document.querySelector("#card-title1").innerHTML = result[0].title;
// document.querySelector("#card-text1").innerHTML = result[0].description;
// document.querySelector(".nome-criador1").innerHTML = result[0].profileName;
let imgpost1 = `https://api-rest-post-diegocandido.herokuapp.com${result[0].thumbImage}`;
document.querySelector("#img-post1").src = imgpost1;


document.querySelector("#card-title2").innerHTML = result[1].title;
// document.querySelector("#card-text2").innerHTML = result[1].description;
// document.querySelector(".nome-criador2").innerHTML = result[1].profileName;
let imgpost2 = `https://api-rest-post-diegocandido.herokuapp.com${result[1].thumbImage}`;
document.querySelector("#img-post2").src = imgpost2;


document.querySelector("#card-title3").innerHTML = result[2].title;
// document.querySelector("#card-text3").innerHTML = result[2].description;
// document.querySelector(".nome-criador2").innerHTML = result[1].profileName;
let imgpost3 = `https://api-rest-post-diegocandido.herokuapp.com${result[2].thumbImage}`;
document.querySelector("#img-post3").src = imgpost3;


document.querySelector("#card-title4").innerHTML = result[3].title;
// document.querySelector("#card-text4").innerHTML = result[3].description;
// document.querySelector(".nome-criador2").innerHTML = result[1].profileName;
let imgpost4 = `https://api-rest-post-diegocandido.herokuapp.com${result[3].thumbImage}`;
document.querySelector("#img-post4").src = imgpost4;


document.querySelector("#card-title5").innerHTML = result[4].title;
// document.querySelector("#card-text5").innerHTML = result[4].description;
// document.querySelector(".nome-criador2").innerHTML = result[1].profileName;
let imgpost5 = `https://api-rest-post-diegocandido.herokuapp.com${result[4].thumbImage}`;
document.querySelector("#img-post5").src = imgpost5;


document.querySelector("#card-title6").innerHTML = result[5].title;
// document.querySelector("#card-text6").innerHTML = result[5].description;
// document.querySelector(".nome-criador2").innerHTML = result[1].profileName;
let imgpost6 = `https://api-rest-post-diegocandido.herokuapp.com${result[5].thumbImage}`;
document.querySelector("#img-post6").src = imgpost6;








return result;

});