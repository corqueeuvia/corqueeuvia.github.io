// window.addEventListener('load', checkJSLoaded);

// function checkJSLoaded() {
//     let script = document.createElement('script');
//     script.addEventListener('load', (event) => {
//         console.log('app.js file has been loaded');
//     });

//     script.src = 'assets/scripts/script.js';
//     document.body.appendChild(script);
// }
document.getElementById('profile-pic').innerHTML = '<img class="profile-pic" src="assets/images/profile-cats.jpg" />';
document.getElementById('name-and-age').innerHTML = 'caique, 27';
document.getElementById('city-and-state').innerHTML = 'são paulo, br';
document.getElementById('hobby-title').innerHTML = 'cats';
document.getElementById('hobby-sub').innerHTML = '(not the musical!!)';
document.getElementById('hobby-description').innerHTML = 'I am a person of many interests, but none of them is as big as my interest and love for cats. yep, the pet.';

document.getElementById('reasons-title').innerHTML = 'learn and love';
document.getElementById('reasons-sub').innerHTML = 'all you have to do to love cats is learn more about them. for me, the purrrfect way to do so is  by having a cat of your own. but if you\'re not ready, you can learn more about them theoretically first:';
document.getElementById('hobby-refs').innerHTML = '<li>chico\'s podcat: he is ceo at <a target="_blank" href="https://www.canseidesergato.com/">cansei de ser gato (pt-br)</a> and speaks on behalf of the feline cause every monday on spotify;</li><li>carlos ruas\' cartoon series called <a target="_blank" href="https://www.umsabadoqualquer.com/category/caes-e-gatos/">cães e gatos (pt-br)</a>, which is an accurate portrait of cats in comparison to dogs;</li><li>science stuff about cats, such as <a target="_blank" href="https://edition.cnn.com/2021/11/10/world/cats-track-owners-location-voice-scn/index.html">this amazing cnn article (en)</a> on how cats use their hearing to keep track of their owners.</li>';

let gridContent = '';

for (let i = 1; i <= 15; i++) {
    let gridItem = '<img src="assets/images/cat' + i + '.jpg">';
    gridContent = gridContent + gridItem;
    console.log(gridContent);  
}

document.getElementById('cat-gallery').innerHTML = gridContent;
console.log(gridContent);