// function createDiv(idName, className, parent) {
//     let div = document.createElement("div");
//     div.setAttribute("id", idName);
//     div.setAttribute("class", className);
//     document.querySelector(parent).appendChild(div);
// }

function create(element, idName, className, parent) {
    let el = document.createElement(element);
    el.setAttribute("id", idName);
    el.setAttribute("class", className);
    document.querySelector(parent).appendChild(el);
}

function addContent(elementSelector, content) {
    document.querySelector(elementSelector).innerHTML = content;
}

//flexbox structure
create("div", "", "column", "body");

//header
create("header", "", "", ".column");

//header's children
create("div", "profile-pic", "", "header");
addContent("#profile-pic", "<img class='profile-pic' src='assets/images/profile-pic.jpg' />");
create("div", "header-txt", "", "header");
create("h1", "name-and-age", "", "#header-txt");
addContent("#name-and-age", "caique, 27");
create("p", "city-and-state", "", "#header-txt");
addContent("#city-and-state", "são paulo, br");

//main
create("main", "", "", ".column");

//main's children
create("h2", "music-title", "", "main");
addContent("#music-title", "zebra");

create("h3", "resons-title", "", "main");
addContent("main", "if you hear hooves think zebras!");

create("ul", "music-refs", "", "main");
create("li", "", "", "#music-refs");
create("li", "", "", "#music-refs");
create("li", "", "", "#music-refs");
addContent("li:nth-child(1)", "ZEBRAS ARE PART OF THE HORSE AND DONKEY FAMILY <br /> horses and zebras are closely related, they’re not the same species, but they are part of the same family, the Equidae family, also known as the Equus family. although part of the same family, zebras aren’t practical to ride like horses, mainly because they are smaller and they have a very different temperament to horses.");
addContent("li:nth-child(2)", "ZEBRAS CAN SLEEP STANDING UP <br /> zebras can fall asleep standing up as they have locking joints, they don’t have to worry about falling over, and it ensures they can escape quickly if predators are about. they do need to lie down to enjoy a deep sleep.");
addContent("li:nth-child(3)", "there can be DOTTED ZEBRAS! yeah, check <a href='https://www.nationalgeographic.com/animals/article/zebra-pseudo-melanism-kenya-masai'>this link</a> to learn more about this rare condition.")

//footer
create("footer", "cat-gallery", "", "body");

//create footer content
let gridContent = '';

for (let i = 3; i <= 4; i++) {
    let gridItem = '<img src="assets/images/zebra' + i + '.jpg">';
    gridContent = gridContent + gridItem;
}

addContent("#cat-gallery", "<img src='assets/images/zebra3.jpg'><img src='assets/images/zebra4.jpg'>");