let makeColumn = document.createElement("div");
makeColumn.setAttribute("class", "column");
document.querySelector("body").appendChild(makeColumn);
let selColumn = document.querySelector(".column");
let makeHeader = document.createElement("header");
selColumn.appendChild(makeHeader);
let selHeader = document.querySelector("header");

let makeProfilePic = document.createElement("div");
makeProfilePic.setAttribute("id", "profile-pic");
selHeader.appendChild(makeProfilePic);
document.querySelector("#profile-pic").innerHTML = "<img class='profile-pic' src='assets/images/profile-cats.jpg' />";

let makeHeaderTxt = document.createElement("div");
makeHeaderTxt.setAttribute("id", "header-txt");
selHeader.appendChild(makeHeaderTxt);

let showNameAndAge = document.createElement("h1");
showNameAndAge.setAttribute("id", "name-and-age");
document.querySelector("#header-txt").appendChild(showNameAndAge);
document.querySelector("#name-and-age").innerHTML = "caique, 27";

let showState = document.createElement("p");
showState.setAttribute("id", "city-and-state");
document.querySelector("#header-txt").appendChild(showState);
document.querySelector("#city-and-state").innerHTML = "são paulo, br";

let makeMain = document.createElement("main");
document.querySelector(".column").appendChild(makeMain);


let makeMusicTitle = document.createElement("h2");
makeMusicTitle.setAttribute("id", "music-title");
document.querySelector("main").appendChild(makeMusicTitle);
document.querySelector("#music-title").innerHTML = "arnaldo antunes";

let makeMusicSub = document.createElement("p");
makeMusicSub.setAttribute("id", "music-sub");
document.querySelector("main").appendChild(makeMusicSub);
document.querySelector("#music-sub").innerHTML = "a crazy, yet free, mind!";

let makeReasonsTitle = document.createElement("h3");
makeReasonsTitle.setAttribute("id", "reasons-title");
document.querySelector("main").appendChild(makeReasonsTitle);
document.querySelector("#reasons-title").innerHTML = "top 3 favorite songs";

let makeReasonsSub = document.createElement("p");
makeReasonsSub.setAttribute("id", "reasons-sub");
document.querySelector("main").appendChild(makeReasonsSub);
document.querySelector("#reasons-sub").innerHTML = "it\'s a very hard thing for me deciding wich of his songs I like the best, because he writes lyrics that are mind blowing. sarcastic portraits of society, sassy observations on human behavior, acid comments on the status quo. this and always a playful way of handling our amazing mother language: brazilian portuguese.";

let makeUL = document.createElement("ul");
makeUL.setAttribute("id", "music-refs");
document.querySelector("main").appendChild(makeUL);

let makeListItem1 = document.createElement("li");
makeListItem1.setAttribute("id", "item-1");
document.querySelector("#music-refs").appendChild(makeListItem1);
document.querySelector("#item-1").innerHTML = "top 1 HAD to be this mockery of gender <a target='_blank' href='https://www.youtube.com/watch?v=UB3-7wl0arM'>everyone should listen to it</a>;";

let makeListItem2 = document.createElement("li");
makeListItem2.setAttribute("id", "item-2");
document.querySelector("#music-refs").appendChild(makeListItem2);
document.querySelector("#item-2").innerHTML = "this one is a very upbeat one about fashion and how amazingly diverse it can be.. <a target='_blank' href='https://www.youtube.com/watch?v=NdLm6A_Y3Mk'>drag your furniture away</a> and just dance around;";

let makeListItem3 = document.createElement("li");
makeListItem3.setAttribute("id", "item-3");
document.querySelector("#music-refs").appendChild(makeListItem3);
document.querySelector("#item-3").innerHTML = "aaaand one of my favorites to listen to on sad days.. <a target='_blank' href='https://www.youtube.com/watch?v=YRy4ET_4788'> press play now </a> and notice how he keeps playing with words and THAT'S what makes his songs perfect for me!";

let makeFooter = document.createElement("footer");
makeFooter.setAttribute("id", "cat-gallery");
document.querySelector("body").appendChild(makeFooter);

let gridContent = '';

for (let i = 1; i <= 15; i++) {
    let gridItem = '<img src="assets/images/album' + i + '.jpeg">';
    gridContent = gridContent + gridItem;
}

document.querySelector("footer").innerHTML = gridContent;